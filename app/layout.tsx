// app/layout.tsx or app/RootLayout.tsx (depending on your project structure)
import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Products Affiliate",
  description: "Find the best products for your furry friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-purple-100 to-pink-100`}
      >
        <Header />
        <main className="container mx-auto py-8 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
