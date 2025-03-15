"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-[90vh] overflow-hidden">
      <Header secretTitle="/404" />
      <div className="flex flex-col items-center justify-center p-4 text-center relative min-h-[70vh]">
        {/* Animated 404s that follow mouse with parallax effect */}
        {[
          "top-4 left-4",
          "top-4 right-4",
          "bottom-4 left-4",
          "bottom-4 right-4",
        ].map((position, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} text-4xl sm:text-5xl lg:text-8xl font-bold text-mygreen dark:text-myred opacity-20`}
            animate={{
              x:
                typeof window !== "undefined"
                  ? (mousePosition.x - window.innerWidth / 2) / (20 + index * 5)
                  : 0,
              y:
                typeof window !== "undefined"
                  ? (mousePosition.y - window.innerHeight / 2) /
                    (20 + index * 5)
                  : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
          >
            404
          </motion.div>
        ))}

        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-myblack dark:text-white animate-fade-in">
          it seems you&apos;re lost
        </h1>
        <h2 className="mb-8 text-lg sm:text-xl lg:text-2xl text-myblack dark:text-white opacity-75 animate-slide-up">
          Oops! Page not found
        </h2>
        <Link
          href="/"
          className="text-myblack dark:text-white underline hover:text-mygreen dark:hover:text-myred decoration-wavy font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300"
        >
          go back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
