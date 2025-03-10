import Footer from "@/components/Footer";
import "@/public/global.css";
import {baseurl} from "@/utils/staticurls";
import { justmeAgainDownHereFont, robotoFont } from "@/utils/fonts";
import { AnimatePresence } from "motion/react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s >> frérot ntwali's personal website",
    default: "frérot ntwali's personal website",
  },
  description:
    "hi, i'm frérot ntwali, i started software engineering in 2023, with andela (ATLP). i'm currently Software engineer at gobi. before that, i was backend engineer at eden care medical. i ❤️ lowercase, side projects and monkeytype.",
  keywords: [
    "frérot ntwali",
    "software engineer",
    "web developer",
    "portfolio",
    "blog",
  ],
  authors: [{ name: "frérot ntwali", url: baseurl }],
  publisher: "frérot ntwali",
  creator: "frérot ntwali",
  icons: {
    apple: [
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    icon: [
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    other: [
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: {
      template: "%s << frérot ntwali's personal website",
      default: "frérot ntwali's personal website",
    },
    description:
      "hi, i'm frérot ntwali, i started software engineering in 2023, with andela (ATLP). i'm currently Software engineer at gobi. before that, i was backend engineer at eden care medical. i ❤️ lowercase, side projects and monkeytype.",
    images: [
      {
        url: "/logo-light.svg",
        type: "image/svg+xml",
        alt: "frérot ntwali's logo",
      },
      {
        url: "/me-light.jpeg",
        type: "image/jpg",
        alt: "frérot ntwali",
      },
      {
        url: "/me-dark.jpeg",
        type: "image/jpg",
        alt: "frérot ntwali",
      },
    ],
    countryName: "Rwanda",
  },
  twitter: {
    card: "summary",
    creator: "frérot ntwali",
    description:
      "hi, i'm frérot ntwali, i started software engineering in 2023, with andela (ATLP). i'm currently Software engineer at gobi. before that, i was backend engineer at eden care medical. i ❤️ lowercase, side projects and monkeytype.",
    title: "frérot ntwali's personal website",
    images: [
      {
        url: "/logo-light.svg",
        type: "image/svg+xml",
        alt: "frérot ntwali's logo",
      },
      {
        url: "/logo-dark.svg",
        type: "image/svg+xml",
        alt: "frérot ntwali's logo",
      },
      {
        url: "/me-light.jpeg",
        type: "image/jpeg",
        alt: "frérot ntwali",
      },
      {
        url: "/me-dark.jpeg",
        type: "image/jpeg",
        alt: "frérot ntwali",
      },
    ],
  },
  metadataBase: new URL(baseurl),
};
export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    {
      color: "rgb(122, 84, 121)",
      media: "(prefers-color-scheme: dark)",
    },
    {
      color: "rgb(60, 161, 137)",
      media: "(prefers-color-scheme: light)",
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
      className={`${justmeAgainDownHereFont.variable} ${robotoFont.className} antialiased`}
    >
      <body className="flex flex-col selection:bg-mygreen/70 selection:text-white dark:selection:bg-myred dark:selection:text-white lowercase">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
