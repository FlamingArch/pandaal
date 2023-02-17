import { Location } from "@/fragments";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Location />
      {children}
    </div>
  );
}
