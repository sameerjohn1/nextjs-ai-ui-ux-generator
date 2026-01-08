import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

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
    <ClerkProvider>
      <html lang="en">
        <body className={appFonts.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
