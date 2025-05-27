"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import "./globals.css";
import { LanguageContext } from "./LanguageContext";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [lang, setLang] = useState("th");

  return (
    <html lang="en">
      <body
        className={`bg-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageContext.Provider value={{ lang, setLang }}>
          <header className="bg-black px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div style={{ position: "relative", width: 120, height: 40 }}>
                <Link href="/">
                  <Image
                    src="/fixtab-logo-white.png"
                    alt="Fixtab logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Link>
              </div>
            </div>
            <button
              type="button"
              aria-label="Toggle language"
              className="h-6 w-6 flex items-center justify-center"
              onClick={() => setLang(lang === "en" ? "th" : "en")}
            >
              <Image
                src={
                  lang === "en" ? "/images/TH-Flag.png" : "/images/US-Flag.png"
                }
                alt={lang === "en" ? "Thai Flag" : "US Flag"}
                width={24}
                height={24}
              />
            </button>
          </header>
          {children}
          <footer className="bg-white">
            <div className="mt-12 text-xs text-gray-400 text-center pb-4">
              Powered by Fixtab
            </div>
          </footer>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
