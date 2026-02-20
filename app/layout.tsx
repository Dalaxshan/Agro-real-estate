import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Agro property | Find Your Dream Land in Sri Lanka",
  description:
    "Sri Lanka's premier real estate platform. Discover premium properties across Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <body className="font-inter antialiased">{children}</body>
      </html>
      <Footer />
    </>
  );
}
