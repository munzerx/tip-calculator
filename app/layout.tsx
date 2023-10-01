import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const mono = Space_Mono({ weight: ['700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Calculate the appropriate tip!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
