"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
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
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a365d] text-white shadow-lg transition hover:bg-[#2d4a7c] hover:scale-110 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          aria-label="Open chat with Juris"
        >
          <MessageCircle size={24} />
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
