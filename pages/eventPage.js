import { AppBar, Page } from "../components";
import { List } from "../legacy/components";
import { IconBack, IconClock, IconFavorites } from "../legacy/components/Icons";

export const PageEvent = ({ event, back }) => {
  return (
    <div>
      <div className="w-screen h-screen bg-white dark:bg-black">
        <img
          className="absolute top-0 left-0 object-cover w-screen h-screen scale-110 bg-black blur-xl"
          src={event.bannerURL}
        />
        <Page>
          <div className="absolute flex flex-col w-screen h-screen pt-16 overflow-scroll lg:grid lg:overflow-clip lg:grid-cols-2 place-items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex w-full px-12">
                <div
                  className="p-4 bg-[#c7dbf5] rounded-xl cursor-pointer"
                  onClick={back}
                >
                  <IconBack />
                </div>
              </div>
              <img
                style={{ width: "clamp(0px, 50%, 512px)" }}
                className="object-cover bg-black aspect-[9/12] rounded-2xl m-12"
                src={event.bannerURL}
              />
            </div>
            <div className="h-fit lg:h-full lg:overflow-scroll lg:m-0 w-[80vw] lg:w-full mx-auto bg-white gap-4 dark:bg-black flex flex-col p-6 rounded-2xl mb-12">
              <p
                style={{ letterSpacing: "0.25rem" }}
                className="font-light uppercase text-primary dark:text-white"
              >
                {event.Category}
              </p>
              <h1 className="text-2xl">{event.Title}</h1>
              <p className="text-primary dark:text-white">
                by {event.Category}
              </p>
              <div className="flex items-center gap-4 ">
                <IconClock className="w-6 h-6 fill-primary" />
                {event.onlinePlatform || event.offlineLocationAddress}
              </div>
              <div className="flex items-center gap-4 ">
                <IconClock className="w-6 h-6 fill-primary" />
                <div className="flex flex-col">
                  <p className="opacity-60">Start Time</p>
                  <p className="uppercase">
                    {event.startDate}, {event.startTime} to {event.endTime}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white shadow-md rounded-2xl">
                <div className="flex gap-4 ">
                  <div className="flex-col text-pink-500">
                    <div className="text-lg font-bold text-pink-500">
                      Interested in this Event?
                    </div>
                    Add to Favourites & get updates
                  </div>
                  <div className="bg-gray-300 h-1/2 w-[4px] rounded-xl"> </div>
                  <div className="flex flex-col items-center justify-center text-pink-500 fill-pink-500">
                    <IconFavorites className="w-8 h-8" />
                    {event.likeCount}
                  </div>
                </div>
              </div>

              <h1
                style={{
                  fontSize: "1.5rem",
                  paddingTop: "1rem",
                }}
              >
                Event Description
              </h1>
              <p>{event.description}</p>
              <div className="p-6 bg-white shadow-md rounded-2xl">
                <div className="flex gap-4 ">
                  <div className="flex-col ">
                    <div className="text-lg font-bold ">Share this Event</div>
                    Why have all the fun alone, Invite your friends too.
                  </div>
                  <div className="bg-gray-300 h-1/2 w-[4px] rounded-xl"> </div>
                  <div className="flex flex-col items-center justify-center fill-pink-500">
                    <IconFavorites className="w-8 h-8" />
                    {event.likeCount}
                  </div>
                </div>
              </div>
              <h1
                style={{
                  fontSize: "1.5rem",
                  paddingTop: "1rem",
                }}
              >
                Terms & Conditions
              </h1>
              <p>{event.termsAndConditions}</p>
            </div>
          </div>
        </Page>
      </div>
    </div>
  );
};
