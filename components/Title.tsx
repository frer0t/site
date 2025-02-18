"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 70;
const START_TEXT = "!@#$%^&*():{};|,.<>/?";
const CHARS = "!@#$%faf*hhj:{q;|,.3>/?";

const Title = ({ sectretTitle }: { sectretTitle: string }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [encrypted, setEncrypted] = useState(true);
  const [text, setText] = useState(START_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = sectretTitle
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

      if (pos > sectretTitle.length * CYCLES_PER_LETTER) {
        pos = 0; // Reset position
        setEncrypted(false); // Toggle encrypted state
        stopScramble();
        setTimeout(() => {
          setText(START_TEXT);
          setTimeout(() => {
            scramble();
            setEncrypted(true);
          }, 10000);
        }, 10000);
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(encrypted ? sectretTitle : START_TEXT);
  };

  useEffect(() => {
    scramble();
    return () => {
      stopScramble();
      // Clear any pending timeouts
      const timeoutId = Number(setTimeout(() => {}, 0));
      for (let i = 0; i < timeoutId; i++) {
        clearTimeout(i);
      }
    };
  }, []);

  return (
    <motion.h1
      className={`text-6xl sm:text-8xl text-center group overflow-hidden relative font-medium   transition-colors duration-300 select-none ${
        encrypted ? "text-mygreen" : "text-myblack"
      } font-medownhere lowercase`}
      title={`Decrypted: ${sectretTitle}`}
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
        className={` absolute inset-0 z-0 scale-125 bg-gradient-to-t from-mygreen/0 from-40% via-mygreen/40 to-mygreen/0 to-60%  transition-opacity ${
          encrypted ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      />
    </motion.h1>
  );
};

export default Title;
