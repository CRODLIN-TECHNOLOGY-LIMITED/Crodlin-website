'use client';
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster";
import { RoadmapProvider } from "@/app/context/RoadmapContext";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Crodlin Technology</title>
        <meta name="description" content="A best Software solutions" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        {isLoading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
        ) : (
          <RoadmapProvider>
            <Toaster />
            <Analytics />
            {children}
          </RoadmapProvider>
        )}
      </body>
    </html>
  );
}
