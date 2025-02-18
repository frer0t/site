import Footer from "@/components/Footer";
import "@/public/global.css";
import { imbFlexSansFont, justmeAgainDownHereFont } from "@/utils/fonts";
import { AnimatePresence } from "motion/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "frérot ntwali",
  description: "frérot ntwali's personal website and portfolio",
  keywords: [
    "frérot ntwali",
    "software engineer",
    "web developer",
    "portfolio",
    "blog",
  ],
  authors: [{ name: "frérot ntwali" }],
  creator: "frérot ntwali",
  icons: [
    {
      url: "/logo.svg",
      type: "image/svg+xml",
      sizes: "any",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${justmeAgainDownHereFont.variable} ${imbFlexSansFont.className} antialiased`}
    >
      <body className="flex flex-col">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
