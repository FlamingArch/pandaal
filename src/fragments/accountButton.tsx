import React from "react";
import { useNavigate } from "react-router-dom";
import { IconUser } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";
import { useUserDoc } from "../hooks";
import profileFemale from "../assets/profile-female.svg";
import profileMale from "../assets/profile-male.svg";

function AccountButton() {
  const { user } = React.useContext<any>(FirebaseContext);
  const [expand, setExpand] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center hover:bg-primary-50 cursor-pointer rounded-full hover:fill-white fill-none "
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      onClick={() => navigate("/account")}
      onContextMenu={(e) => {
        e.preventDefault();
        navigate("/signout");
      }}
    >
      <div
        className={
          "relative cursor-pointer overflow-hidden transition bg-primary-500 hover:bg-primary-700 " +
          (expand ? "rounded-full" : "rounded-full")
        }
      >
        <img
          src={profileMale}
          alt=""
          className={
            "w-12 scale-[1.1] h-12 aspect-square object-cover object-center hover:filter transition-all border-none outline-none " +
            (expand ? "brightness-50" : "")
          }
        />
        <IconUser className="w-6 h-6 m-3 absolute top-0 left-0 right-0 bottom-0" />
      </div>
      <div
        className={
          "transition-all duration-300 " + (expand ? "w-32 " : "w-0 opacity-0 ")
        }
      >
        <div className="min-w-[8rem] px-4 font-medium">
          {user?.displayName ?? "Sign In"}
        </div>
      </div>
    </div>
  );
}

export default AccountButton;
