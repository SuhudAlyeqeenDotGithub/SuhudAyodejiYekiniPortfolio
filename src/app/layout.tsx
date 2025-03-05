import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhud Ayodeji Yekini Website",
  description:
    "Al-Yeqeen Website, Suhud Ayodeji Yekini Webiste, Digital portfolio, portfolio, innovation, about, full stack web development"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-nunito font-semibold antialiased">{children}</body>
    </html>
  );
}
