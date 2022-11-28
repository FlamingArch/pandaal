import React from "react";
import { motion } from "framer-motion";
import { IconFavourite, IconFavouriteFill } from "../components/icons";

const favouriteTile = ({ count, value, onChange }) => {
  let likedButtonStyles = value
    ? "bg-pink-500 dark:bg-pink-500 shadow-pink-300 p-6 m-0 dark:shadow-pink-700 shadow-xl rounded-3xl"
    : "m-2 p-4 rounded-[3rem]";
  let baseButtonStyles =
    "border-pink-500 border-[1.75px] dark:bg-black bg-white transition-all duration-500";
  let iconStyles = value ? "w-6 h-6 fill-white" : "w-6 h-6 fill-pink-500";

  return (
    <div
      className="rounded-3xl cursor-pointer bg-white items-center dark:bg-black shadow-lg p-6 flex justify-between gap-4"
      onClick={onChange}
    >
      <div className="flex flex-col">
        <motion.div onUpdate={{ opacity: [1, 0, 1] }} className="text-xl">
          {value ? "Added to Favourites" : "Interested in this event?"}
        </motion.div>
        {!value && (
          <div className="opacity-80">Add to Favourites and Get Updates</div>
        )}
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className={`${baseButtonStyles} ${likedButtonStyles}`}>
          {value ? (
            <IconFavouriteFill className={iconStyles} />
          ) : (
            <IconFavourite className={iconStyles} />
          )}
        </div>
        <div className="text-xl text-pink-500">{count}</div>
      </div>
    </div>
  );
};

export default favouriteTile;
