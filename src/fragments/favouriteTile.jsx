import React from "react";
import { motion } from "framer-motion";
import { IconFavourite, IconFavouriteFill } from "../components/icons";
import { isLiked } from "../functions";

const FavouriteTile = ({ count, value, onChange }) => {
  const [likeCount, setLikeCount] = React.useState(0);
  const [isFavourite, setIsFavourite] = React.useState(value);

  React.useEffect(() => {
    setLikeCount(count);
    setIsFavourite(value);
  }, [count, value]);

  let likedButtonStyles = isFavourite ? "fill-white p-6 m-0" : "m-2 p-4";
  let baseButtonStyles = "transition-all duration-500";
  let likedContainerStyles = isFavourite
    ? "bg-secondary-500 fill-white text-white"
    : "bg-white fill-secondary-500 text-secondary-500";
  let baseContainerStyles =
    "rounded-3xl cursor-pointer items-center shadow p-6 flex justify-between gap-4 transition-all duration-500";
  let iconStyles = isFavourite
    ? "w-6 h-6 fill-white"
    : "w-6 h-6 fill-secondary-500";

  return (
    <div
      className={`${baseContainerStyles} ${likedContainerStyles}`}
      onClick={() => {
        setIsFavourite((oldVal) => !oldVal);
        setLikeCount((oldVal) => (oldVal += isFavourite ? -1 : 1));
        onChange();
      }}
    >
      <div className="flex flex-col">
        <motion.div onUpdate={{ opacity: [1, 0, 1] }} className="text-xl ">
          {isFavourite ? "Added to Favourites" : "Interested in this event?"}
        </motion.div>
        {!isFavourite && (
          <div className="opacity-80">Add to Favourites and Get Updates</div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className={`${baseButtonStyles} ${likedButtonStyles}`}>
          {isFavourite ? (
            <IconFavouriteFill className={iconStyles} />
          ) : (
            <IconFavourite className={iconStyles} />
          )}
        </div>
        <div className="text-xl">{likeCount}</div>
      </div>
    </div>
  );
};

export default FavouriteTile;
