import "./globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AosProvider } from "@/components/AosProvider";
import Header from "@/components/home/Header";
import Footer from "@/components/common/Footer";
import ServerExpiredPage from "@/components/maintenance/ServerExpiredPage";
import { SHOW_SERVER_EXPIRED_PAGE } from "@/config/maintenance";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Tech Refrigeration And Air Conditioning",
  description: "Your expert partner for cold storage, chillers, and ripening chambers.",
  alternates: {
    canonical: "https://www.starrefrigeration.in/",
  },
  openGraph: {
    title: "Star Tech Refrigeration And Air Conditioning",
    description: "Providing cold rooms, chillers, ripening chambers & HVAC solutions.",
    url: "https://www.starrefrigeration.in/",
    siteName: "Star Tech Refrigeration",
    type: "website",
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
      <body className={inter.className}>
        {SHOW_SERVER_EXPIRED_PAGE ? (
          <ServerExpiredPage />
        ) : (
          <AosProvider>
            <Header />
            <div className="-mt-20">
              {children}
              {/* You can add a Footer component later */}
            </div>
            <Footer />
          </AosProvider>
        )}
      </body>
    </html>
  );
}