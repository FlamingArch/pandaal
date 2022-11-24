import React from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { IconBack } from "../components/icons";

let backButton = (
  <Link
    to={-1}
    className="cursor-pointer transition p-3 w-fit flex gap-3 rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500 hover:text-primary-500"
  >
    <IconBack className="w-6 h-6" />
  </Link>
);

export default function PageRegister() {
  return (
    <motion.div
      animate={{ y: [window.innerHeight, 0] }}
      exit={{ y: [0, window.innerHeight] }}
      transition={{
        type: "spring",
        duration: 0.3,
      }}
      className="fixed top-0 left-0 w-screen h-screen bg-white z-50 p-8 gap-8 flex flex-col"
    >
      {backButton}
      Hello, World
      <Outlet />
    </motion.div>
  );
}
