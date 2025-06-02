"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const onLoad = () => setLoading(false);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-white text-gray-900`} style={{ scrollBehavior: 'smooth' }}>
        {loading && <Preloader />}
        <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
          <div className="grid-overlay" />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
