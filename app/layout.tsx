import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "VERITAS — 로컬에서 동작하는 AI 리서치·문서 작성 어시스턴트",
    template: "%s · VERITAS",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "VERITAS",
    "로컬 AI",
    "온프레미스 AI",
    "리서치 어시스턴트",
    "문서 작성 AI",
    "로컬 LLM",
    "RAG",
    "근거 검증",
    "사내 보안 AI",
    "AutoSurvey",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: site.name,
    title: "VERITAS — 로컬에서 동작하는 AI 리서치·문서 작성 어시스턴트",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "VERITAS — 로컬에서 동작하는 AI 리서치·문서 작성 어시스턴트",
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0B2239",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-navy font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-royal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          본문 바로가기
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
