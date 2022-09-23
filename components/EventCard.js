const EventCard = ({ date, title, image, address }) => {
  return (
    <div className="flex flex-col gap-1" style={{ flex: "0 0 12rem" }}>
      <img
        src="https://source.unsplash.com/random"
        className="rounded-[2rem] aspect-[9/12] object-cover w-full"
        alt=""
      ></img>
      <p className="font-light">{date}</p>
      <p className="text-lg">{title}</p>
      <p className="font-light">{address}</p>
    </div>
  );
};

export default EventCard;
