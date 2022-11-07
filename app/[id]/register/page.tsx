import Link from "next/link";

export default function ({ params }: any) {
  return (
    <div>
      Register for Event {params.id}
      <Link href={`/${params.id}/success`}>
        <button className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
          Complete
        </button>
      </Link>
    </div>
  );
}
