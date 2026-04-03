import "@/app/global.css";
import Footer from "@/components/Footer";
import { justmeAgainDownHereFont, robotoFont } from "@/utils/fonts";
import { metadata, viewport } from "@/utils/seo";
import Script from "next/script";
import { Toaster } from "sonner";

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");else if(t==="light")document.documentElement.classList.remove("dark");else if(window.matchMedia("(prefers-color-scheme:dark)").matches)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${justmeAgainDownHereFont.variable} ${robotoFont.className} antialiased`}
    >
      <body className="flex min-h-screen flex-col lowercase selection:bg-mygreen/70 selection:text-white dark:selection:bg-myred dark:selection:text-white">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
        <Footer />
        <Toaster position="top-center" duration={6000} />
      </body>
    </html>
  );
}
export { metadata, viewport };
