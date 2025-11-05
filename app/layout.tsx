import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AosProvider }s from "@/components/AosProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AZ Refrigeration and Air Conditioning",
  description: "Your expert partner for cold storage, chillers, and ripening chambers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AosProvider>
          <Header />
          {children}
          {/* You can add a Footer component here later */}
        </AosProvider>
      </body>
    </html>
  );
}