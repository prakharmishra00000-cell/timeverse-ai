'use client';

import React, { useState } from 'react';
import { DEMO_USER_PROFILE } from '@/lib/store/demo-data';
import { Settings, User, Key, Bell, Shield, Download, Trash2, Check } from 'lucide-react';

export default function SettingsPage() {
  const [profileName, setProfileName] = useState(DEMO_USER_PROFILE.name);
  const [apiKey, setApiKey] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
          <Settings className="w-3.5 h-3.5 text-cyan-400" />
          <span>USER & SYSTEM SETTINGS</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Account & Temporal Preferences
        </h1>
        <p className="text-xs text-slate-300 mt-1 font-sans">
          Manage your traveler profile, API credentials, privacy preferences, and data export.
        </p>
      </div>

      {/* Form Settings */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Details */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
          <h3 className="text-sm font-mono font-bold text-slate-100 flex items-center gap-2 uppercase">
            <User className="w-4 h-4 text-cyan-400" />
            <span>PROFILE INFORMATION</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                value={DEMO_USER_PROFILE.email}
                disabled
                className="w-full px-3 py-2 rounded-xl glass-input text-xs opacity-60 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* AI & Custom API Keys */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
          <h3 className="text-sm font-mono font-bold text-slate-100 flex items-center gap-2 uppercase">
            <Key className="w-4 h-4 text-purple-400" />
            <span>GOOGLE GEMINI API KEY (OPTIONAL OVERRIDE)</span>
          </h3>
          <p className="text-xs text-slate-400">
            If provided, TIMEVERSE will use your custom Gemini API key for live generation. Leaving it blank uses the default high-speed simulation engine.
          </p>

          <div>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono"
            />
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
          <h3 className="text-sm font-mono font-bold text-slate-100 flex items-center gap-2 uppercase">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>DATA & PRIVACY</span>
          </h3>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-space-900 hover:bg-space-850 text-slate-200 border border-white/10 text-xs flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Export Timeline Knowledge Base (JSON)</span>
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-space-900 hover:bg-rose-950/40 text-rose-300 border border-rose-500/30 text-xs flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4 text-rose-400" />
              <span>Delete Account & Erase Memory Vault</span>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="cyber-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
          >
            <span>Save Settings</span>
          </button>
          {savedSuccess && (
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Check className="w-4 h-4" />
              <span>Settings saved!</span>
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
