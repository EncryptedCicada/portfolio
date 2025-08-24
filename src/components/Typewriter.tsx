"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number; // average ms between keystrokes
  startDelay?: number; // delay before starting animation in ms
};

export default function Typewriter({ text, speed = 100, startDelay = 0 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayed("");
    setCurrentIndex(0);
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

    if (currentIndex < text.length) {
      const typeChar = () => {
        const currentChar = text[currentIndex];
        setDisplayed((prev) => prev + currentChar);
        setCurrentIndex((prev) => prev + 1);
      };

      // Add human-like randomness to typing speed
      const delay = speed + Math.random() * speed * 0.5;

      const timer = setTimeout(typeChar, delay);
      return () => clearTimeout(timer);
    } else {
      // Finished typing
      setIsTyping(false);
    }
  }, [currentIndex, text, speed, isTyping, hasStarted]);

  return (
    <div className="flex items-center">
      {/* Typed text */}
      <span>{displayed}</span>

      {/* Dynamic caret that stays solid and grows during typing */}
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
        className="ml-[2px] w-[0.1em] h-[1.5em] bg-secondary"
      />
    </div>
  );
}
