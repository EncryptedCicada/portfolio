"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number; // average ms between keystrokes
  startDelay?: number; // delay before starting animation in ms
};

export default function Typewriter({ text, speed = 100, startDelay = 0 }: TypewriterProps) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setVisibleLength(0);
    setIsTyping(false);
    setHasStarted(false);

    // Start animation after delay
    const startTimer = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, startDelay]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    if (visibleLength < text.length) {
      const typeChar = () => {
        setVisibleLength((prev) => prev + 1);
      };

      // Add human-like randomness to typing speed
      const delay = speed + Math.random() * speed * 0.5;

      const timer = setTimeout(typeChar, delay);
      return () => clearTimeout(timer);
    } else {
      // Finished typing
      setIsTyping(false);
    }
  }, [visibleLength, text, speed, isTyping, hasStarted]);

  return (
    <span className="relative inline-block">
      {/* Hidden full text for layout calculation - preserves exact dimensions */}
      <span 
        className="whitespace-pre-wrap opacity-0 pointer-events-none" 
        aria-hidden="true"
      >
        {text}
      </span>
      
      {/* Visible text overlay - positioned absolutely to not affect layout */}
      <span className="absolute inset-0 whitespace-pre-wrap">
        {/* Visible portion of text */}
        <span>{text.slice(0, visibleLength)}</span>
        
        {/* Dynamic caret that follows text flow naturally */}
        <motion.span
          animate={{ 
            opacity: hasStarted ? (isTyping ? 1 : [1, 0, 1]) : 0,
            scaleY: isTyping ? 1.3 : 1,
            scaleX: isTyping ? 1.5 : 1,
          }}
          transition={{
            opacity: {
              duration: isTyping ? 0 : 0.8,
              repeat: isTyping ? 0 : Infinity,
              ease: "easeInOut",
            },
            scaleY: {
              duration: 0.4,
              ease: "easeOut",
            },
            scaleX: {
              duration: 0.4,
              ease: "easeOut",
            }
          }}
          className="inline-block ml-[1px] min-w-[2px] h-[1.2em] bg-secondary align-middle"
        />
      </span>
    </span>
  );
}
