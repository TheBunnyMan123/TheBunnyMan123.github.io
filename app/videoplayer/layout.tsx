import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./extra.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TKBunny's Video Player",
  description: "TheKillerBunny's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
