import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "my-portfolio",
  description: "Hung Duong's portfolio",
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
