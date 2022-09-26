import Image from "next/image";
import illustration from "../res/welcome.svg";

export default function PageSignIn() {
  return (
    <div className="hidden grid-cols-1 md:grid-cols-2 w-screen h-screen overflow-hidden text-center bg-[#3F4882]">
      <div className="p-16 whidden md:grid place-content-center">
        <Image
          src={illustration}
          alt=""
          className="h-[20vmin] scale-75 object-contain"
        />
        Welcome to
        <p className="text-[2.5rem] font-bold">pandaal</p>
        <div className="text-2xl">{"Let's Get Started"}</div>
      </div>
      <div className="w-screen h-screen bg-white ">
        <Image
          src={illustration}
          alt=""
          className="h-[20vmin] scale-75 object-contain"
        />
        <div className=" bg-[#3F4882] rounded-[1.5rem] w-auto m-6 p-4">
          Continue with Phone
        </div>
      </div>
    </div>
  );
}
