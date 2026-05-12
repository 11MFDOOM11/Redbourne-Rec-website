import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redbourn Leisure Centre | Community Sports & Fitness",
  description:
    "Redbourn Leisure Centre — a community sports and wellness facility in Redbourn, Hertfordshire. Gym, astroturf, café bar and more.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Redbourn Leisure Centre | Community Sports & Fitness",
    description:
      "Redbourn Leisure Centre — a community sports and wellness facility in Redbourn, Hertfordshire. Gym, astroturf, café bar and more.",
    type: "website",
    url: "https://redbournleisure.co.uk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
