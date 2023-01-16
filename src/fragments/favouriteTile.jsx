import React from "react";
import { motion } from "framer-motion";
import { IconFavourite, IconFavouriteFill } from "../components/icons";

const FavouriteTile = ({ count, value, onChange }) => {
  const [likeCount, setLikeCount] = React.useState(0);
  const [isFavourite, setIsFavourite] = React.useState(value);

  React.useEffect(() => {
    setLikeCount(count);
    setIsFavourite(value);
  }, [count, value]);

  let likedButtonStyles = isFavourite
    ? "bg-pink-500 shadow-pink-300 p-6 m-0 shadow-xl rounded-3xl"
    : "m-2 p-4 rounded-[3rem]";
  let baseButtonStyles =
    "border-pink-500 border-[1.75px] bg-white transition-all duration-500";
  let iconStyles = isFavourite ? "w-6 h-6 fill-white" : "w-6 h-6 fill-pink-500";

  return (
    <div
      className="rounded-3xl cursor-pointer bg-white items-center shadow-lg p-6 flex justify-between gap-4"
      onClick={() => {
        setIsFavourite((oldVal) => !oldVal);
        setLikeCount((oldVal) => (oldVal += isFavourite ? -1 : 1));
        onChange();
      }}
    >
      <div className="flex flex-col">
        <motion.div
          onUpdate={{ opacity: [1, 0, 1] }}
          className={"text-xl " + (isFavourite ? "text-pink-500" : "")}
        >
          {isFavourite ? "Added to Favourites" : "Interested in this event?"}
        </motion.div>
        {!isFavourite && (
          <div className="opacity-80">Add to Favourites and Get Updates</div>
        )}
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className={`${baseButtonStyles} ${likedButtonStyles}`}>
          {isFavourite ? (
            <IconFavouriteFill className={iconStyles} />
          ) : (
            <IconFavourite className={iconStyles} />
          )}
        </div>
        <div className="text-xl text-pink-500">{likeCount}</div>
      </div>
    </div>
  );
};

export default FavouriteTile;
