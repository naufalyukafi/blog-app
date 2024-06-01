import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Stay informed with the latest news and breaking stories on Blog App. Explore comprehensive coverage, and timely updates on global events, Machine Learning, Blockchain, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="news, machine learning, blockchain, updates" />
      <meta name="description" content="Stay informed with the latest news and breaking stories on Blog App. Explore comprehensive coverage, and timely updates on global events, Machine Learning, Blockchain, and more." />

      <meta property="og:title" content='Blog App - Global News' />
      <meta property="og:description" content='Stay informed with the latest news and breaking stories on Blog App. Explore comprehensive coverage, and timely updates on global events, Machine Learning, Blockchain, and more.' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
