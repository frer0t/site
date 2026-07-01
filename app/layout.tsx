import "@/app/global.css";
import Footer from "@/components/Footer";
import { justmeAgainDownHereFont, robotoFont } from "@/utils/fonts";
import { metadata, viewport } from "@/utils/seo";
import { Toaster } from "sonner";

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.classList.remove("dark");else document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${justmeAgainDownHereFont.variable} ${robotoFont.className} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col lowercase selection:bg-mygreen/70 selection:text-white dark:selection:bg-myred dark:selection:text-white">
        {/*
          Plain inline script, not next/script — beforeInteractive scripts in
          the App Router are queued into `self.__next_s` and only run once
          the async client runtime processes them, which happens after the
          browser has already painted (causing a light-theme flash on load).
          A raw <script> tag blocks parsing and runs synchronously in place.
        */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <Footer />
        <Toaster position="top-center" duration={6000} />
      </body>
    </html>
  );
}
export { metadata, viewport };
