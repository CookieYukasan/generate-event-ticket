import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Generate Event Ticket",
  description: "Simple event ticket generator with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          spaceGrotesk.variable,
          roboto.variable,
          "bg-hero-section"
        )}
      >
        {children}
      </body>
    </html>
  );
}
