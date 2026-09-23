import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TIMEVERSE AI — Explore the Past. Alter the Present. Simulate the Future.',
  description: 'An immersive AI-powered timeline, alternate-universe, historical simulation, future-scenario and time-travel exploration platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-space-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
