import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Suhud Ayodeji Yekini Website - Portfolio",
  description:
    "Evolving through code, technology, fitness, and motivation — building tools that inspire progress,  Al-Yeqeen Website, Suhud Ayodeji Yekini Webiste, Suhud Digital portfolio, portfolio, contact suhud ayodeji yekin, innovation, about suhud ayodeji yekini, full stack web development"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="XLCrSDkihp0w244nSySE9heltmIvH7ZZxSB_pacxsOQ" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
