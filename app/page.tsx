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
    </main>
  );
}
