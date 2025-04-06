import Navbar from "@/components/app/navbar";
import { ThemeProvider } from "@/lib/theme-context";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akhilesh Upadhyay | Full-Stack Developer",
  description:
    "Creative Full-Stack Developer building problem-solving software using React, Next.js, Node.js and TypeScript.",
  keywords: [
    "Akhilesh Upadhyay",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Software Engineer Hyderabad",
    "Open Source Developer",
  ],
  authors: [{ name: "Akhilesh Upadhyay", url: "https://placeholder_domain" }],
  creator: "Akhilesh Upadhyay",
  metadataBase: new URL("https://placeholder_domain"),
  openGraph: {
    title: "Akhilesh Upadhyay | Full-Stack Developer",
    description:
      "Creative Full-Stack Developer building scalable, problem-solving web applications.",
    url: "https://placeholder_domain",
    siteName: "Akhilesh Upadhyay",
    images: [
      {
        url: "https://placeholder_domain/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akhilesh Upadhyay Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhilesh Upadhyay | Full-Stack Developer",
    description:
      "Creative Full-Stack Developer building problem-solving apps using React and Node.js",
    creator: "@placeholder_handle",
    images: ["https://placeholder_domain/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
