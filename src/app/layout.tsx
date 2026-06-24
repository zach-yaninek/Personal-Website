import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/content";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | Personal Site`,
    template: `%s | ${site.fullName}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SiteHeader />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
