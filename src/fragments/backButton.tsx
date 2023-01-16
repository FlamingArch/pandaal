import React from "react";
import { Link } from "react-router-dom";
import { IconBack } from "../components/icons";

export default function BackButton({ customPath }: { customPath?: string }) {
  return (
    <Link
      to={customPath ?? -1}
      className="cursor-pointer transition p-3 w-fit flex gap-3 rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500 hover:text-primary-500"
    >
      <IconBack className="w-6 h-6" />
    </Link>
  );
}
