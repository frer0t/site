"use client";
import { baseurl } from "@/utils/staticurls";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { SiPostman } from "react-icons/si";
import { TbInfoSquareRounded } from "react-icons/tb";
import CopyToClipboard from "./CopyToClipBoard";
import toast from "./ui/Toast";
const ModeDev = ({ paramsMessage }: { paramsMessage: string }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (paramsMessage) {
      setMessage(paramsMessage);
    }
  }, [paramsMessage]);

  useEffect(() => {
    if (message) {
      toast({
        description: message,
        icon: <TbInfoSquareRounded />,
      });
    }
  }, [message]);

  return (
    <motion.main
      key={1}
      className="relative h-screen flex items-center justify-center"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <canvas
        className="absolute w-full h-full inset-0 opacity-40 pointer-events-none"
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const chars = "01".split("");
            const fontSize = 14;
            const columns = canvas.width / fontSize;
            const drops = Array(Math.floor(columns)).fill(0);

            const draw = () => {
              const isDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)"
              ).matches;
              ctx.fillStyle = isDarkMode
                ? "rgba(0, 0, 0, 0.1)"
                : "rgba(255, 255, 255, 0.1)";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = isDarkMode
                ? "rgb(122, 84, 121)"
                : "rgb(60, 161, 137)";
              ctx.font = `${fontSize}px monospace`;

              for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(
                  text,
                  i * fontSize,
                  canvas.height - drops[i] * fontSize
                );
                if (
                  canvas.height - drops[i] * fontSize < 0 &&
                  Math.random() > 0.975
                ) {
                  drops[i] = 0;
                }
                drops[i]++;
              }
            };

            const matrixInterval = setInterval(draw, 80);
            return () => clearInterval(matrixInterval);
          }
        }}
      />
      <div className="w-fit">
        <h2 className="flex items-center gap-2 font-mono text-myblack dark:text-gray-100">
          I dare u
          <SiPostman height={6} width={6} className="text-orange-500" />
        </h2>
        <CopyToClipboard
          text={`${baseurl}/api/start`}
          className="backdrop-blur-sm w-fit p-4 xs:h-36 xs:w-[20rem] sm:h-40 sm:w-[40rem] border border-dashed border-mygreen dark:border-myred"
          contentClassName="items-center justify-center text-xs sm:text-2xl"
        >
          {baseurl}/api/start
        </CopyToClipboard>
      </div>
    </motion.main>
  );
};

export default ModeDev;
