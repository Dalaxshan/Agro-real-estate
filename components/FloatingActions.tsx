"use client";

import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/94771234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all"
      >
        <MessageSquare className="w-7 h-7" />
      </a>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 left-6 z-50 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/40 hover:bg-primary-600 transition-all",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};
