import { IconDiversity, IconEdit, IconUser } from "../components/icons";

export default function PageHome() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="p-8 grid grid-cols-3 sticky top-0 bg-white bg-opacity-80 backdrop-blur-3xl backdrop-saturate-150">
        <div className="text-2xl font-bold text-primary-400">pandaal</div>
        <div className=""></div>
        <div className="flex justify-end gap-4">
          <div className="cursor-pointer transition rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500">
            <IconEdit className="w-6 h-6 m-3" />
          </div>
          <div className="cursor-pointer overflow-hidden transition rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500">
            <IconDiversity className="w-6 h-6 m-3" />
          </div>
          <div className="cursor-pointer overflow-hidden transition rounded-xl bg-primary-400 hover:bg-primary-700 fill-white">
            <IconUser className="w-6 h-6 m-3" />
            {/* <img
              src="https://source.unsplash.com/random"
              alt="Random Image"
              className="w-12 h-12 aspect-square object-fill object-center bg-red-300 hover:filter hover:brightness-75 transition-all"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
