import Link from "next/link";

export default function ({ params }: any) {
  return (
    <div>
      <p>Successfully Registered</p>
      <Link href={`/${params.id}`}>
        <button className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
          Ok
        </button>
      </Link>
    </div>
  );
}
