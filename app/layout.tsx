import type { Metadata } from "next";
import "./globals.css";
import { aventa } from "./fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KNRG",
  description: "KNRG - Your Positive Boost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aventa.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
