const THEME_TOGGLE_SRC = "/theme-toggle.mp3";

let clip: HTMLAudioElement | null = null;

export function playLightSwitchSound() {
  if (typeof window === "undefined") return;
  try {
    if (!clip) {
      clip = new Audio(THEME_TOGGLE_SRC);
      clip.preload = "auto";
    }
    clip.currentTime = 0;
    void clip.play().catch(() => {});
  } catch {
    /* ignore */
  }
}
