import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="flex items-center gap-4 p-6">
        <div className="text-xl font-bold mr-auto text-primary-500">
          pandaal
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.hoest.pandaal"
          className="rounded-2xl p-3 bg-primary-50 hover:bg-primary-100 text-black transition-colors cursor-pointer"
        >
          Download for Android
        </a>
        <Link
          href={"/home"}
          className="rounded-2xl p-3 bg-primary-500 hover:bg-primary-600 transition-colors cursor-pointer text-white"
        >
          Go to WebApp
        </Link>
      </div>
      <p className="px-6">Landing Page Goes Here</p>
    </>
  );
}
