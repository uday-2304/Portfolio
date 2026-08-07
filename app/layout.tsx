import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Digital Experience",
  description: "Luxury Editorial Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-[#020813] text-[#F5F5F5] selection:bg-[#e61919] selection:text-[#FFFFFF]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
