import Link from "next/link";

export default async function Page({ params }: any) {
  return (
    <div>
      <p>Page {params.id}</p>
      <Link href={`/${params.id}/instructions`}>
        <button className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
          How to Register?
        </button>
      </Link>
    </div>
  );
}
