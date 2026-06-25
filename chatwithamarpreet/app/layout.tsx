import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./markdown.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amarpreet Bhatia - AI Enablement Architect",
  description: "Enterprise AI Enablement Architect with 20+ years of experience in cloud-native transformation, platform engineering, and AI-first solutions. Chat with me about your technology challenges.",
  keywords: [
    "Amarpreet Bhatia",
    "Enterprise Architecture",
    "Cloud-Native",
    "AI Enablement",
    "Platform Engineering",
    "DevSecOps",
    "LlamaIndex",
    "Generative AI",
  ],
  authors: [{ name: "Amarpreet Bhatia", url: "https://amarpreetbhatia.github.io" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amarpreetbhatia.github.io",
    title: "Amarpreet Bhatia - AI Enablement Architect",
    description: "Professional portfolio featuring AI-powered chatbot",
    images: [
      {
        url: "https://amarpreetbhatia.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amarpreet Bhatia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@amarpreetbhatia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
