import React from "react";

const FavoriteCard = ({ likes, favourite, onClick }) => {
  const styles = favourite
    ? "fill-white text-white bg-secondary-300"
    : "fill-secondary-300 text-secondary-300 bg-white";

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-4 shadow-md flex ${styles}`}
    >
      <div className="flex flex-col flex-grow">Added to favourites</div>
    </div>
  );
};

export default FavoriteCard;
