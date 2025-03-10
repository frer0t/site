import Footer from "@/components/Footer";
import { mydetails } from "@/constants/my-basic-details";
import "@/public/global.css";
import { justmeAgainDownHereFont, robotoFont } from "@/utils/fonts";
import { baseurl } from "@/utils/staticurls";
import { AnimatePresence } from "motion/react";
import type { Metadata, Viewport } from "next";
const description = `hi, i'm ${mydetails.name}, i started software engineering in 2019, with hackclub. i'm currently Software engineer at gobi. before that, i was Junior Backend engineer at eden care medical. i ❤️ lowercase, side projects and monkeytype.`;

export const metadata: Metadata = {
  title: {
    template: "%s >> frérot ntwali's personal website",
    default: "frérot ntwali's personal website",
  },
  description,
  keywords: [
    mydetails.name,
    "software engineer",
    "frontend engineer",
    "backend engineer",
    "fullstack engineer",
    "devops engineer",
    "portfolio",
    "blog",
  ],
  authors: [{ name: mydetails.name, url: baseurl }],
  publisher: mydetails.name,
  creator: mydetails.name,
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
    description,
    images: [
      {
        url: "/logo-light.svg",
        type: "image/svg+xml",
        alt: "frérot ntwali's logo",
      },
      {
        url: "/me-light.jpeg",
        type: "image/jpg",
        alt: mydetails.name,
      },
      {
        url: "/me-dark.jpeg",
        type: "image/jpg",
        alt: mydetails.name,
      },
    ],
    countryName: "Rwanda",
  },
  twitter: {
    card: "summary",
    creator: mydetails.name,
    description,
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
        alt: mydetails.name,
      },
      {
        url: "/me-dark.jpeg",
        type: "image/jpeg",
        alt: mydetails.name,
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
