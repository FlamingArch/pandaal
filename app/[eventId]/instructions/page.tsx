import Link from "next/link";
import { fetchEvent } from "functions";
import { Parser } from "html-to-react";

export default async function page({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await fetchEvent(params.eventId);
  return (
    <>
      <p className="text-3xl font-bold">Instructions</p>
      <div className="h-full flex-grow links text-sm">
        {Parser().parse(event?.howToRegisterHtmlText)}
      </div>
      <Link
        href={`${params.eventId}/register`}
        className="rounded-2xl grid place-content-center pt-auto bg-primary-500 hover:bg-primary-600 p-3 cursor-pointer text-white hover:text-white"
      >
        Register
      </Link>
    </>
  );
}
