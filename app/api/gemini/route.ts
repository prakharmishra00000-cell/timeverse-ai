import { NextRequest, NextResponse } from 'next/server';

/**
 * Server-side Next.js API Route for Gemini AI
 * Has full access to process.env.GEMINI_API_KEY on Render/Vercel/Local.
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { systemPrompt, userPrompt, customKey } = body;

    // Retrieve API key from server environment or client override
    const apiKey = customKey || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey || !apiKey.trim()) {
      return NextResponse.json(
        { error: 'No Gemini API key configured on server or request.' },
        { status: 400 }
      );
    }

    const cleanKey = apiKey.trim();

    // Models fallback sequence
    const modelsToTry = [
      'gemini-1.5-flash',
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-pro',
    ];

    let lastError = null;

    for (const model of modelsToTry) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${cleanKey}`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nUSER PROMPT: ${userPrompt}` }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048,
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            return NextResponse.json({ result: candidateText, modelUsed: model });
          }
        } else {
          const errText = await response.text();
          console.warn(`Gemini API model ${model} failed (${response.status}):`, errText);
          lastError = errText;
        }
      } catch (err) {
        console.warn(`Error trying Gemini model ${model}:`, err);
        lastError = String(err);
      }
    }

    return NextResponse.json(
      { error: 'Gemini API call failed across model endpoints.', details: lastError },
      { status: 502 }
    );
  } catch (error: any) {
    console.error('Server Gemini route error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing Gemini request.', message: error?.message },
      { status: 500 }
    );
  }
}
