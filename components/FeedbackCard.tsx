"use client";
import { format } from "date-fns";
import * as motion from "motion/react-client";
import Link from "next/link";

const FeedbackCard = ({ data, index }: { data: IFeedback; index: number }) => {
  const { initials, message, feedback, link, created_at } = data;

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      key={index}
      className="relative rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md border-2 border-dashed border-mygreen dark:border-myred overflow-hidden"
    >
      {/* Matrix-like background with canvas */}
      <canvas
        className="absolute w-full h-full inset-0 opacity-40 pointer-events-none"
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const chars = "01".split("");
            const fontSize = 11;
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

      <div className="relative">
        <div className="flex items-center mb-6 justify-between ">
          <div className="bg-gradient-to-r from-mygreen to-mygreen/80 dark:from-myred/70 dark:to-myred w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-mygreen/30 dark:border-myred/30">
            <span className="text-white text-lg font-bold uppercase">
              {initials}
            </span>
          </div>
          <span className="text-mygreen/70 dark:text-white text-sm font-mono">
            {format(new Date(created_at), "MMM d, yyyy")}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-white/90 dark:bg-[#000000]/10 p-4 rounded-xl border-2 border-mygreen/30 dark:border-myred/30 backdrop-blur-sm">
          <p className="text-[#3CA189] dark:text-myred text-sm font-semibold mb-2">
            Message for 🌍
          </p>
          <p className="text-[#3CA189]/90 dark:text-white font-medium">
            {message}
          </p>
        </div>

        {feedback && (
          <div className="bg-white/90 dark:bg-[#000000]/10 p-4 rounded-xl border-2 border-mygreen/30 dark:border-myred/30 backdrop-blur-sm">
            <p className="text-mygreen dark:text-myred text-sm font-semibold mb-2">
              Adventure Thoughts 💭
            </p>
            <p className="text-mygreen/90 dark:text-white font-medium">
              {feedback}
            </p>
          </div>
        )}

        {link && (
          <div className="bg-white/90 dark:bg-[#000000]/10 p-4 rounded-xl border-2 border-mygreen/30 dark:border-myred/30 backdrop-blur-sm">
            <p className="text-mygreen dark:text-myred text-sm font-semibold mb-2">
              Connect With Me 🔗
            </p>
            <Link
              href={link.startsWith("https") ? link : `https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mygreen/90 dark:text-white font-medium hover:underline decoration-wavy break-all"
            >
              {link}
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
