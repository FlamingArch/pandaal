"use client";

import illustrationOffline from "@/public/offline.svg";
import Image from "next/image";

export default function PageError() {
  return (
    <div className="w-full px-6 flex-grow grid place-content-center">
      <Image
        src={illustrationOffline}
        alt=""
        className="px-[10vw] md:px-[15vw] pt-[10vw] md:pt-[15vw] pb-8"
      />
      <p className="px-[10vw] md:px-[15vw] text-2xl pb-4">You're Offline!</p>
      <p className="px-[10vw] md:px-[20vw]">
        <ul className="list-disc flex gap-2 flex-col pl-6">
          <li>Check your Internet connection</li>
          <li>
            Check that pandaal has permission to access the web (you might be
            connected but behind a firewall)
          </li>
        </ul>
      </p>
    </div>
  );
}
