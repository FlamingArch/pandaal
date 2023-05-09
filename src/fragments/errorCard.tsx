export default function ErrorCard({ error }: { error: unknown }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-red-50 rounded-2xl">
      <p className="text-xl font-semibold uppercase text-red-500">
        An Error Occured
      </p>
      <p className="text-red-500">{`${error}`} </p>
    </div>
  );
}
