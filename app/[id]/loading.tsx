export default function () {
  return (
    <div className="w-screen h-screen flex flex-col p-6 gap-6 items-center">
      <div className="rounded-2xl bg-gray-200 h-16 w-16 place-self-start" />
      <div className="rounded-2xl bg-gray-200 aspect-[9/12] w-1/3" />
      <div className="rounded-2xl bg-gray-200 h-40 w-full" />
      <div className="rounded-2xl bg-gray-200 h-40 w-full" />
      <div className="rounded-2xl bg-gray-200 h-10 w-full" />
      <div className="rounded-2xl bg-gray-200 h-10 w-full pt-auto" />
    </div>
  );
}
