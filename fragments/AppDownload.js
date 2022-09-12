import Image from "next/image";
import illustration from "../res/download-app.svg";

export const SidebarAppDownloadPrompt = () => {
  return (
    <div className="flex flex-col gap-4 p-6 pt-[auto] bg-fuchsia-600">
      <p className="text-xl font-bold">Download the App</p>
      <p className="text-sm">Get the best experience with our mobile app.</p>
      <Image src={illustration} alt="" />
    </div>
  );
};
