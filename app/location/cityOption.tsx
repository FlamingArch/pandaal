"use client";

import { useAppStore } from "@/context/app";
import { useRouter } from "next/navigation";

export default function CityOption({ cityName }: { cityName: string }) {
  const changeCity = useAppStore((state) => state.changeCity);
  const router = useRouter();

  return (
    <option
      className={
        "p-3 rounded-xl hover:bg-primary-100 cursor-pointer hover:text-primary-500 transition-all "
      }
      onClick={() => {
        changeCity(cityName);
        router.back();
      }}
    >
      {cityName}
    </option>
  );
}
