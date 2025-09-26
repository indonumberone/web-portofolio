"use client";
import { motion, AnimatePresence, useAnimation } from "motion/react";
import { useEffect, useState, useCallback } from "react";

interface TypingMotionProps {
  roles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypingMotion({
  roles,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2500,
}: TypingMotionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const cursorControls = useAnimation();

  // Enhanced typing with smoother character transitions
  const getVariableSpeed = useCallback(() => {
    if (isDeleting) return deletingSpeed;

    // More natural typing rhythm
    const baseSpeed = typingSpeed;
    const currentChar = roles[roleIndex]?.[charIndex];

    // Slower after punctuation, faster for common letters
    let speedMultiplier = 1;
    if (currentChar === " ") speedMultiplier = 0.5; // Pause at spaces
    if (currentChar === ",") speedMultiplier = 1.5; // Pause at commas
    if (/[aeiou]/i.test(currentChar)) speedMultiplier = 0.8; // Slightly faster for vowels

    const variation = Math.random() * 30;
    return baseSpeed * speedMultiplier + variation;
  }, [isDeleting, typingSpeed, deletingSpeed, roleIndex, charIndex, roles]);

  // Cursor blink pattern
  useEffect(() => {
    if (isPaused) {
      cursorControls.start({
        opacity: [1, 0],
        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
      });
    } else {
      cursorControls.start({
        opacity: 1,
        transition: { duration: 0.1 },
      });
    }
  }, [isPaused, cursorControls]);

  useEffect(() => {
    if (roles.length === 0) return;

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (!isDeleting) {
          // Typing phase
          if (charIndex < currentRole.length) {
            setDisplayedText(currentRole.substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            // Finished typing, pause
            setIsPaused(true);
          }
        } else {
          // Deleting phase
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
            setDisplayedText(currentRole.substring(0, charIndex - 1));
          } else {
            // Finished deleting, move to next role
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isPaused ? pauseTime : getVariableSpeed()
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    isPaused,
    roleIndex,
    roles,
    pauseTime,
    getVariableSpeed,
  ]);

  return (
    <span className={className}>
      <span className="inline-block min-h-[1.2em]">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={`${roleIndex}-${index}`}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
              delay: index * 0.01, // Slight stagger for smoother appearance
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      {/* Enhanced Animated Cursor */}
      <motion.span
        animate={cursorControls}
        className="inline-block w-0.5 h-6 bg-gradient-to-b from-primary to-primary/60 ml-1 rounded-sm shadow-sm"
        style={{
          boxShadow: isPaused ? "0 0 8px currentColor" : "none",
        }}
      />
    </span>
  );
}
