"use client";

import { playLightSwitchSound } from "@/utils/playLightSwitchSound";
import { useCallback, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "theme";

function readDomIsDark() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(readDomIsDark());
  }, []);

  const toggle = useCallback(() => {
    playLightSwitchSound();
    const next = !readDomIsDark();
    applyTheme(next);
    setIsDark(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title="Toggle theme"
      className="inline-flex size-7 shrink-0 appearance-none items-center justify-center rounded p-0 leading-none text-myblack transition-colors hover:text-mygreen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mygreen dark:text-white dark:hover:text-myred dark:focus-visible:outline-myred [&_svg]:block [&_svg]:size-5 [&_svg]:shrink-0"
    >
      {!mounted ? (
        <span className="size-5 shrink-0" aria-hidden />
      ) : isDark ? (
        <FiSun strokeWidth={2} aria-hidden />
      ) : (
        <FiMoon strokeWidth={2} aria-hidden />
      )}
    </button>
  );
}
