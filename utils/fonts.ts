import { IBM_Plex_Sans, Just_Me_Again_Down_Here } from "next/font/google";

const justmeAgainDownHereFont = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  variable: "--font-just-me-again-down-here",
  weight: ["400"],
});

const imbFlexSansFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700"],
});
export { imbFlexSansFont, justmeAgainDownHereFont };
