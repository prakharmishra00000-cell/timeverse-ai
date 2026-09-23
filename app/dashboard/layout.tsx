import React from 'react';
import { Sidebar } from '@/components/navigation/Sidebar';
import { Header } from '@/components/navigation/Header';
import { ContextualAIChat } from '@/components/chat/ContextualAIChat';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 md:pl-0">
        <Header />
        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full md:ml-64">
          {children}
        </main>
      </div>

      {/* Floating Contextual Time Companion AI */}
      <ContextualAIChat
        currentContextName="TIMEVERSE Central Command"
        currentContextType="Dashboard"
        contextDetails="Select a temporal module to launch timeline simulations."
      />
    </div>
  );
}
