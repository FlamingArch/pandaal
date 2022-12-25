import React from "react";
import { useNavigate } from "react-router-dom";
import { IconUser } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";

function AccountButton() {
  const { user } = React.useContext<any>(FirebaseContext);
  const [expand, setExpand] = React.useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900 cursor-pointer rounded-xl"
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      onClick={() => navigate("/account")}
      onContextMenu={(e) => {
        e.preventDefault();
        navigate("/signout");
      }}
    >
      <div className="relative cursor-pointer overflow-hidden transition rounded-xl bg-primary-500 hover:bg-primary-700 fill-white">
        <img
          src={user?.photoURL}
          alt=""
          className="w-12 scale-[1.1] h-12 aspect-square object-cover object-center hover:filter hover:brightness-75 transition-all border-none outline-none"
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
