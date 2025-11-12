import "./globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AosProvider } from "@/components/AosProvider";
import Header from "@/components/home/Header";
import Footer from "@/components/common/Footer";
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
          <div className="-mt-20">
            {children}
            {/* You can add a Footer component here later */}
          </div>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}