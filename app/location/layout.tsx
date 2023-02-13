import { IconBack } from "@/components/icons";
import Link from "next/link";

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="flex flex-col gap-4 sticky top-0 p-4 backdrop-blur-xl backdrop-filter backdrop-saturate-200 bg-white">
        <Link
          href={"/"}
          replace
          className="rounded-xl bg-primary-50 hover:bg-primary-100 cursor-pointer transition-colors p-3 fill-primary-500 w-fit"
        >
          <IconBack className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Change your Location City</h1>
        <p>We are only available in few cities</p>
      </header>
      {children}
    </div>
  );
}
