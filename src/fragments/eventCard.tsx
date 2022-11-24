import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ViewEventCard({
  event,
  details,
  hover,
  onClick,
  navigateOnClick,
  width,
  className,
}: {
  event: any;
  details?: boolean;
  hover?: boolean;
  navigateOnClick?: boolean;
  onClick?: any;
  width?: number | string;
  className?: string;
}) {
  const navigate = useNavigate();

  const hoverStyles = hover
    ? "hover:bg-primary-50 hover:scale-110 hover:rounded-3xl cursor-pointer hover:p-2"
    : "";
  const widthStyles = width ? `w-${width}` : "w-[210px]";
  const defaultStyles = `flex flex-col flex-shrink-0 transition-all`;

  console.log(`Setting WidthStyle: ${widthStyles}`);

  return (
    <div
      key={event?.id}
      className={`${defaultStyles} ${widthStyles} ${hoverStyles} ${className}`}
      onClick={
        onClick ??
        (navigateOnClick ? () => navigate(`/${event?.id}`) : () => {})
      }
    >
      <img
        src={event?.bannerURL}
        className="aspect-[9/12] object-cover object-center rounded-3xl border-none"
      />
      {details && (
        <div className="flex flex-col p-4 gap-2">
          <p className="text-xl font-medium">{event?.Title}</p>
          <p className="">{event?.organisationName}</p>
          <p className="font-bold text-primary-500">
            {event?.price === "0" ? "Free" : event?.price}
          </p>
        </div>
      )}
    </div>
  );
}
