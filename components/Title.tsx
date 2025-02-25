"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 80;
const START_TEXT = "@#^&$fa1^fh2:";
const CHARS = "@#^&$fa1^fh2:";

const Title = ({
  secretTitle,
  className,
}: {
  secretTitle: string;
  className: string;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [encrypted, setEncrypted] = useState(true);
  const [text, setText] = useState(START_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = secretTitle
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos > secretTitle.length * CYCLES_PER_LETTER) {
        pos = 0; // Reset position
        setEncrypted(false); // Toggle encrypted state
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(encrypted ? secretTitle : START_TEXT);
  };

  useEffect(() => {
    scramble();
    return () => {
      stopScramble();
    };
  }, []);

  return (
    <motion.h1
      className={cn(
        "group relative font-medownhere lowercase",
        encrypted
          ? "text-mygreen dark:text-myred"
          : "text-myblack dark:text-white",
        className
      )}
      title={`Decrypted: ${secretTitle}`}
    >
      {text}
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "linear",
        }}
        className={`absolute inset-0 z-0 scale-125 bg-gradient-to-t from-mygreen/0 from-40% via-mygreen/40 to-mygreen/0 to-60% dark:from-myred/0 dark:from-40% dark:via-myred/40 dark:to-60% transition-opacity ${
          encrypted ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      />
    </motion.h1>
  );
};

export default Title;
