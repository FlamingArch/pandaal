import Image from "next/image";
import illustration from "@/public/login.svg";

export default function PageSignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid w-screen h-screen grid-rows-1fr-2fr lg:grid-rows-1 lg:grid-cols-1fr-2fr text-sm">
      <div className="bg-primary-500 grid place-content-center relative">
        <Image fill className="p-12 w-full h-full" src={illustration} alt="" />
      </div>
      <div className="flex flex-col p-6 md:p-16 lg:p-24 xl:p-32 items-stretch min-h-[400px] flex-grow w-full mx-auto">
        <p className="text-xl font-bold text-primary-500 z-10">pandaal</p>
        <div className="flex-grow"></div>
        {children}
        <div className="flex-grow"></div>
        <p className="text-center opacity-60">
          By Continuing, you agree our{" "}
          <a href="https://pandaal.in/tnc" target="_blank">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="https://pandaal.in/privacypolicy" target="_blank">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
