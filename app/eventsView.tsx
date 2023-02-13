"use client";

import { useAppStore } from "@/context/app";
import Image from "next/image";

export default function EventsView({ events }: { events: string }) {
  const currentCity = useAppStore((state) => state.currentCity);
  const groupedEvents: any = JSON.parse(events);

  return (
    <>
      {Object.keys(groupedEvents).map(
        (categoryEvents: any, index: number) =>
          groupedEvents[categoryEvents].filter(
            (event: any) => event.city == "" || event.City == currentCity
          ).length > 0 && (
            <div key={index}>
              <h1 className="px-6 text-lg">{categoryEvents}</h1>
              <div className="flex overflow-hidden hover:overflow-scroll gap-4 p-4">
                {groupedEvents[categoryEvents].map((event: any) => {
                  if (event.city == "" || event.City == currentCity) {
                    return (
                      <div
                        key={event.id}
                        className="max-w-[143px] p-[8px] min-w-[143px] flex-grow flex-col flex hover:bg-primary-50 rounded-3xl cursor-pointer hover:scale-105 transition-all"
                      >
                        <Image
                          src={event.bannerURL}
                          className="rounded-2xl mb-2 w-[135px] h-[180px]"
                          width={135}
                          height={180}
                          alt={event.Title}
                        />
                        <p className="text-sm">{event.Title}</p>
                        <p className="text-xs">{event.organisationName}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          )
      )}
    </>
  );
}
