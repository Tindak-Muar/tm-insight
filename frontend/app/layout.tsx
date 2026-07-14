import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

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
    default: "TM Insight",
    template: "%s | TM Insight",
  },
  description:
    "Platform risikan politik berasaskan data, media dan AI untuk analisis strategik di Malaysia.",
  applicationName: "TM Insight",
  authors: [{ name: "Tindak Muar" }],
  keywords: [
    "TM Insight",
    "Political Intelligence",
    "Risikan Politik",
    "Malaysia",
    "Data Analytics",
    "Media Intelligence",
    "AI",
    "Strategi Politik",
  ],
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