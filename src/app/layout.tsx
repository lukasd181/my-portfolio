import type { Metadata } from "next";
import WebNavBar from "@/components/WebNavBar";
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
      <body>
        <div className="flex h-full w-full flex-row">
          <WebNavBar />
          <main className="h-full w-full flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
