import { Poppins } from "@next/font/google";
import Navigation from "./nav";
import Link from "next/link";
import UserBadge from "./userBadge";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={font.className}>
      <header className="flex items-center justify-between p-6 backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-60 sticky top-0">
        <Link
          href="/"
          className="text-primary-500 hover:text-primary-700 font-bold text-xl cursor-pointer transition-colors"
        >
          pandaal
        </Link>
        <UserBadge />
      </header>
      <div className="flex">
        <Navigation />
        <div className="flex-grow pb-24 md:pb-0">{children}</div>
      </div>
    </div>
  );
}
