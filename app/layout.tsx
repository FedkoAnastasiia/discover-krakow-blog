import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover Kraków",
  description: "Discover Kraków blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <div className="pageContainer">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
