"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Scale } from "lucide-react";
import JurisChatbot from "@/components/JurisChatbot";
import { loadUserProgress, UserProgress, setCurrentUserId } from "@/lib/user-progress";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setCurrentUserId(firebaseUser?.uid || null);
      if (firebaseUser) {
        setProgress(loadUserProgress(firebaseUser.uid));
      }
    });
    return () => unsubscribe();
  }, []);

  // Only show for authenticated users
  if (!user) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl dark:from-amber-500 dark:to-amber-600 dark:text-stone-900"
          aria-label="Open chat with Juris AI"
        >
          <div className="relative">
            <Scale size={28} className="relative z-10" />
            <div className="absolute inset-0 animate-ping opacity-20">
              <Scale size={28} />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 h-[600px] w-[400px] overflow-hidden rounded-lg shadow-2xl">
          <div className="relative h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 z-10 rounded-sm bg-white/10 p-1.5 text-white transition hover:bg-white/20 dark:bg-stone-900/20 dark:hover:bg-stone-900/30"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
            <JurisChatbot userProgress={progress} />
          </div>
        </div>
      )}
    </>
  );
}
