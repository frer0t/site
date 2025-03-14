import Footer from "@/components/Footer";
import "@/public/global.css";
import { justmeAgainDownHereFont, robotoFont } from "@/utils/fonts";
import { metadata, viewport } from "@/utils/seo";

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
      </body>
    </html>
  );
}
export { metadata, viewport };
