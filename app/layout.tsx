import type { Metadata } from "next";
import { Geist_Mono, Lexend_Zetta } from "next/font/google";
import "./globals.css";
import HomeHeader from "@/components/home/HomeHeader";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salon SAASH",
  description:
    "Ladies Hair and Beauty Salon in Peradeniya, Sri Lanka, facial, hair color, dressing, makeup, nail art, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendZetta.variable} ${geistMono.variable} antialiased`}
      >
        <HomeHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
