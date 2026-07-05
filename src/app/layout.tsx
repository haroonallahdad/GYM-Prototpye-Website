import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TITAN | Premium Elite Fitness & Recovery",
  description: "Experience the next evolution of fitness. High-performance personal coaching, state-of-the-art strength training, and premium recovery zones.",
  keywords: "premium gym, elite fitness, luxury training, Equinox alternative, personal trainer, strength and conditioning, luxury recovery spa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#050505] text-white min-h-screen antialiased selection:bg-[#FF5E00] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
