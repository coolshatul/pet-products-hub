// app/layout.tsx or app/RootLayout.tsx (depending on your project structure)
import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Pet Products Affiliate - Top Deals for Your Furry Friends",
  description:
    "Explore the best pet products for dogs, cats, and other animals. Discover top-quality affiliate deals, from pet toys to grooming essentials, all in one place. Shop now for exclusive offers!",
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
        <Analytics />
      </body>
    </html>
  );
}
