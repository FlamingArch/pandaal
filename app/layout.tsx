import type { Metadata } from "next";
import { Poppins as PrimaryFont } from "next/font/google";
import "./globals.css";
import HeaderView from "@/view/header";

const primaryFont = PrimaryFont({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "pandaal",
  description: "The Event Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <HeaderView />
        {children}
      </body>
    </html>
  );
}
