import { IconFavorites } from "../components/Icons";

const FavoriteCard = ({ event }) => {
  let colors = event
    ? "text-white bg-pink-600 fill-white border-pink-700 hover:bg-pink-700 hover:shadow-pink-700"
    : "text-pink-600 fill-pink-600 border-gray-100 hover:bg-pink-50 hover:shadow-pink-200";

  return (
    <div
      className={
        "flex rounded-2xl justify-between items-center transition-all shadow-md p-4 border gap-3 cursor-pointer hover:shadow-xl " +
        colors
      }
    >
      <div className="flex flex-col flex-grow">
        <p className="text-xl font-bold">
          {event ? "Added to Favourites" : "Interested in this Event?"}
        </p>
        {!event && <p>Add this to favourites & get updates.</p>}
      </div>
      <div className="h-10 w-1 border border-slate-200 bg-slate-200 rounded-full"></div>
      <div className="flex flex-col justify-center items-center px-2">
        <IconFavorites className="w-8 h-8" />
        <p>{event.likeCount}</p>
      </div>
    </div>
  );
};

export default FavoriteCard;
