import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Phan Dinh Nhat — Business Analyst | MES & Manufacturing Consulting",
  description:
    "Senior Business Analyst delivering MES/MOM implementations, ERP integration and process digitalization for manufacturing clients. Proven 15% efficiency gains across factory go-lives.",
  keywords: ["Business Analyst", "MES Consultant", "MOM", "ERP", "Manufacturing", "Apriso", "BPMN", "IoT Integration", "Factory Digitalization"],
  authors: [{ name: "Phan Dinh Nhat" }],
  metadataBase: new URL("https://portfolio-pro.vercel.app"),
  openGraph: {
    title: "Phan Dinh Nhat — Business Analyst | MES & Manufacturing Consulting",
    description:
      "MES/MOM implementations, ERP integration and process digitalization for manufacturing clients — from requirements to go-live.",
    url: "https://portfolio-pro.vercel.app",
    siteName: "Phan Dinh Nhat — Capability Profile",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Dinh Nhat — Business Analyst | MES Consulting",
    description:
      "MES/MOM implementations and ERP integration for manufacturing clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
