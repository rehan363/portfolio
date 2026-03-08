import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "REHAN AHMED | Full Stack AI Developer & Agentic AI Specialist",
  description: "Portfolio of REHAN AHMED - A Full Stack AI Developer and Agentic AI Specialist specializing in AI Driven software solutions, scalable architectures, and modern web technologies.",
  applicationName: "REHAN AHMED Portfolio",
  authors: [{ name: "REHAN AHMED", url: "https://github.com/rehan363" }],
  keywords: ["Full Stack AI Developer", "Agentic AI Specialist", "AI Developer", "Next.js", "Python", "FastAPI", "React", "TypeScript", "Islamabad", "Pakistan"],
  creator: "REHAN AHMED",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com", // TODO: Update with actual URL
    title: "REHAN AHMED | Full Stack AI Developer",
    description: "Building AI Driven software solutions and scalable architectures.",
    siteName: "REHAN AHMED Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "REHAN AHMED | Full Stack AI Developer",
    description: "Building AI Driven software solutions and scalable architectures.",
    creator: "@yourhandle", // TODO: Update if available
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import SingularityCursor from "./components/ui/SingularityCursor";


import SystemBackgroundWrapper from "./components/3d/SystemBackgroundWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <SystemBackgroundWrapper />
        <SingularityCursor />
        {children}
      </body>
    </html>
  );
}
