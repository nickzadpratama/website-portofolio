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
  title: "Nickzad Pratama — Full Stack Developer & Data Specialist",
  description:
    "Portofolio Nickzad Pratama, Full Stack JavaScript Developer & Data Specialist berbasis di Jakarta Timur. Berpengalaman di React, Next.js, Node.js, dan Data Engineering.",
  keywords: [
    "Nickzad Pratama",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Data Engineer",
    "Data Specialist",
    "Portofolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
