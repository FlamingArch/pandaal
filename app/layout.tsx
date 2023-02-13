import { IconLocationEdit, IconTicketFill, IconUser } from "@/components/icons";
import "./globals.scss";
import { Poppins } from "@next/font/google";
import Link from "next/link";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
