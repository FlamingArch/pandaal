import { AppHead, AppSidebar } from "../fragments";
import PageHome from "./_home";

export default function Home() {
  return (
    <>
      <AppHead />
      <div
        className="grid h-screen w-screen overflow-hidden"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        <AppSidebar />
        <PageHome />
      </div>
    </>
  );
}
