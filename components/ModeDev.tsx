"use client";
import * as motion from "motion/react-client";
const ModeDev = () => {
  return (
    <motion.main
      key={1}
      className="relative h-screen flex items-center justify-center"
      exit={{ opacity: 0 }}
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
    </motion.main>
  );
};

export default ModeDev;
