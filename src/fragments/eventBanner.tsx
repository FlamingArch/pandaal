import { convertToTextDate } from "../functions";

export default function EventBanner({
  event,
  className,
}: {
  event?: any;
  className?: string;
}) {
  return (
    <div className={"relative overflow-hidden " + className}>
      <div className="absolute bg-black -z-10 w-full">
        <img
          src={event?.bannerURL}
          className="blur-2xl brightness-75 w-full"
        ></img>
      </div>
      <div className="responsive p-6 z-10 flex items-stretch text-white">
        <img
          src={event?.bannerURL}
          className="rounded-2xl w-[160px] aspect-[9/12]"
        ></img>
        <div className="flex flex-col md:p-6 pl-6 gap-4">
          <p className="text-xl font-semibold">{event?.title}</p>
          <p>{convertToTextDate(event?.startDate)}</p>
          <p>{event?.price == 0 ? "Free" : "Rs. " + event?.price}</p>
        </div>
      </div>
    </div>
  );
}
