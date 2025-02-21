import { Just_Me_Again_Down_Here, Roboto } from "next/font/google";

const justmeAgainDownHereFont = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  variable: "--font-just-me-again-down-here",
  weight: ["400"],
});

export { justmeAgainDownHereFont };

const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "100", "300", "500", "700", "900"],
});
export { robotoFont };
