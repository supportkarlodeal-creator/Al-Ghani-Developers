import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al-Ghani Developers",
  description:
    "Al Ghani Developers - Perfect Lifestyle With Affordability In Lahore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}