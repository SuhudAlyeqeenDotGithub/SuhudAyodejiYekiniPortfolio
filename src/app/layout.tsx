import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhud Ayodeji Yekini Website",
  description:
    "Al-Yeqeen Website, Suhud Ayodeji Yekini Webiste, Suhud Digital portfolio, portfolio, innovation, about suhud ayodeji yekini, full stack web development"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="XLCrSDkihp0w244nSySE9heltmIvH7ZZxSB_pacxsOQ" />
      </head>
      <body className="font-nunito font-semibold antialiased">{children}</body>
    </html>
  );
}
