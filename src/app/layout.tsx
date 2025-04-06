import Navbar from "@/components/app/navbar";
import { ThemeProvider } from "@/lib/theme-context";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteLinks } from "@/data/links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ This will be re-evaluated on every build (and redeploy picks up envs)
export async function generateMetadata(): Promise<Metadata> {
  return {
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
      "Software Developer at ZerocodeHr",
    ],
    authors: [{ name: "Akhilesh Upadhyay", url: siteLinks.siteUrl }],
    creator: "Akhilesh Upadhyay",
    metadataBase: new URL(siteLinks.siteUrl),
    openGraph: {
      title: "Akhilesh Upadhyay | Full-Stack Developer",
      description:
        "Creative Full-Stack Developer building scalable, problem-solving web applications.",
      url: siteLinks.siteUrl,
      siteName: "Akhilesh Upadhyay",
      images: [
        {
          url: `${siteLinks.siteUrl}${siteLinks.ogImage}`,
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
      images: [`${siteLinks.siteUrl}${siteLinks.ogImage}`],
    },
    icons: {
      icon: "/favicon.ico",
      // if you want to support multiple devices
      apple: "/apple-touch-icon.png",
      shortcut: "/shortcut-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: siteLinks.siteUrl,
    },
    other: {
      "google-site-verification": "DuLaY2ga7H-vTwFf5Xv5y6vfptvw9cZjmy2VN9E0UqU",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  return (
    <html lang="en" dir="ltr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {!isMaintenance ? <Navbar /> : null}

          <main className="pt-20" role="main" aria-label="Main content">
            {children}
          </main>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akhilesh Upadhyay",
              url: siteLinks.siteUrl,
              jobTitle: "Full-Stack Developer",
              sameAs: [siteLinks.github, siteLinks.linkedin, siteLinks.blog],
            }),
          }}
        />
      </body>
    </html>
  );
}
