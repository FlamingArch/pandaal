import CategoryFilterView from "@/view/categoryFilter";
import LocationView from "@/view/location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LocationView>
        <div className="flex px-6 overflow-x-scroll gap-4">
          <CategoryFilterView />
        </div>
      </LocationView>
      <img
        src="https://unsplash.com/photos/9vDdkxSCAD4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIyNTI0Nzg2fA&force=true&w=2400"
        className="w-screen h-[34vh] object-cover"
      />
    </main>
  );
}
