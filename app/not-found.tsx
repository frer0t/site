"use client";
import { navigate } from "@/app/action";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
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
      <div className="flex flex-col items-center justify-center p-4 text-center relative min-h-[60vh]">
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
        <form action={navigate} className="w-full max-w-xl relative group">
          <input
            type="text"
            name="route"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            placeholder="correct your mistake"
            className="w-full p-4 text-center text-2xl text-myblack dark:text-white 
              bg-transparent outline-none transition-all duration-300
              border-b-2 border-transparent hover:border-gray-300 focus:border-gray-500
              focus:outline-none placeholder:opacity-50"
            autoFocus
            onFocus={(e) => {
              const len = e.target.value.length;
              e.target.setSelectionRange(len, len);
            }}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </form>
      </div>
    </main>
  );
};

export default NotFound;
