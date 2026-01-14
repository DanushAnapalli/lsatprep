import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import { TimerProvider } from "@/components/TimerProvider";
import StudyTimer from "@/components/StudyTimer";
import TimerAlert from "@/components/TimerAlert";
import FloatingChatWidget from "@/components/FloatingChatWidget";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
    default: "LSATprep - Master the LSAT with AI-Powered Practice",
    template: "%s | LSATprep",
  },
  description: "Ace the LSAT with adaptive practice tests, AI-powered explanations, and comprehensive analytics. 5-day free trial. Used by thousands of law school applicants.",
  keywords: [
    "LSAT prep",
    "LSAT practice tests",
    "LSAT study",
    "law school admission",
    "LSAT logical reasoning",
    "LSAT reading comprehension",
    "LSAT prep course",
    "online LSAT prep",
    "LSAT practice questions",
  ],
  authors: [{ name: "LSATprep" }],
  creator: "LSATprep",
  publisher: "LSATprep",
  metadataBase: new URL("https://lsatprep.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lsatprep.org",
    siteName: "LSATprep",
    title: "LSATprep - Master the LSAT with AI-Powered Practice",
    description: "Ace the LSAT with adaptive practice tests, AI-powered explanations, and comprehensive analytics. Start your 5-day free trial today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LSATprep - Master the LSAT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LSATprep - Master the LSAT with AI-Powered Practice",
    description: "Ace the LSAT with adaptive practice tests, AI-powered explanations, and comprehensive analytics. Start your free trial today.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          src="/theme-init.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TimerProvider>
            <TimerAlert />
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
            <StudyTimer />
            <FloatingChatWidget />
          </TimerProvider>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
