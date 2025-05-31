'use client';
import localFont from "next/font/local";
import "./globals.css";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
          <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <h1 className="mt-6 text-2xl font-bold tracking-wide">
              Crodlin Tech
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Precision in every pixel
            </p>
          </div>
        ) : (
          <>

            {children}

          </>
        )}

      </body>
    </html>
  );
}
