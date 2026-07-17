import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
  default: "SINAR",
  template: "%s | SINAR",
},
description:
  "Strategi • Impak • Naratif • Analitik • Risikan",
applicationName: "SINAR",
  authors: [{ name: "Tindak Muar" }],
  keywords: [
  "SINAR",
  "Political Intelligence",
  "Knowledge Management",
  "AI",
  "Malaysia",
]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex flex-col h-screen">
          <Header />

          <div className="flex flex-1 overflow-hidden">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}