import "@/public/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "frérot ntwali's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
