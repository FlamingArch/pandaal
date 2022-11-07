import Link from "next/link";

export default function page({ params }: any) {
  return (
    <div>
      <p>Instructions for Registering for Event {params.id}</p>
      <Link href={`/${params.id}/register`}>
        <button className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
          Register
        </button>
      </Link>
    </div>
  );
}
