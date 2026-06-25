"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useChat } from "ai/react";
import { useClientConfig } from "@/app/components/ui/chat/hooks/use-config";
import { ChatMessages } from "@/app/components/ui/chat";

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { backend } = useClientConfig();

  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
    append,
    setInput,
  } = useChat({
    api: `${backend}/api/chat`,
    headers: {
      "Content-Type": "application/json",
    },
    onError: (error: unknown) => {
      console.error("Chat error:", error);
      if (!(error instanceof Error)) throw error;
      alert(
        "Error occurred. Please check your API configuration."
      );
    },
  });

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 max-h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center flex-shrink-0">
        <div>
          <h3 className="font-semibold">Chat with Amarpreet</h3>
          <p className="text-sm text-blue-100">Ask me about my experience & AI expertise</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 p-1 rounded transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <ChatMessages
          messages={messages}
          isLoading={isLoading}
          reload={reload}
          stop={stop}
          append={append}
        />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 flex-shrink-0 bg-gray-50">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask a question..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg px-3 py-2 transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
