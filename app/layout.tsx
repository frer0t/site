import Footer from "@/components/Footer";
import "@/public/global.css";
import { justmeAgainDownHereFont, robotoFont } from "@/utils/fonts";
import { metadata, viewport } from "@/utils/seo";
import { Toaster } from "sonner";

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
        {children}
        <Footer />
        <Toaster position="top-center" duration={6000} />
      </body>
    </html>
  );
}
export { metadata, viewport };
