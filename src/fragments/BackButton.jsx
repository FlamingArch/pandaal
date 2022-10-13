import React from "react";
import { Scaffold } from "../components";
import { IconBack } from "../components/icons";

const BackButton = () => {
  const Navigator = React.useContext(Scaffold.Context);

  return (
    <div
      className="rounded-xl p-4 bg-primary-100 fill-primary-400 w-fit cursor-pointer"
      onClick={() => Navigator.pop()}
    >
      <IconBack className="w-6 h-6" />
    </div>
  );
};

export default BackButton;
