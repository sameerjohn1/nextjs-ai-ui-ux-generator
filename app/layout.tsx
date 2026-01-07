import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const appFonts = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIUX Mockup Generator App",
  description: "Generate High quality Free UIUX Mobile and Web Mockup designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={appFonts.className}>{children}</body>
    </html>
  );
}
