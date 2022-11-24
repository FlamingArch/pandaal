import React from "react";
import { IconUser } from "../components/icons";

function AccountButton() {
  return (
    <div className="cursor-pointer overflow-hidden transition rounded-xl bg-primary-500 hover:bg-primary-700 fill-white">
      <IconUser className="w-6 h-6 m-3 absolute" />
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="w-12 h-12 aspect-square object-cover object-center hover:filter hover:brightness-75 transition-all border-none"
      />
    </div>
  );
}

export default AccountButton;
