import React from "react";
import {
  IconShare,
  IconLocationEdit,
  IconClock,
  IconFavorites,
  IconEventAdd,
} from "../components/Icons";
import _ from "lodash";

export default function PageEvent() {
  const event = {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          impedit aperiam possimus, doloremque aliquam sequi quia, saepe
          voluptates magnam temporibus odit veniam eveniet ad perspiciatis
          doloribus repellendus consequatur corrupti sunt? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Voluptates id nobis, deserunt,
          deleniti suscipit consequuntur, doloremque unde quis neque quos earum.
          Tempore temporibus molestiae inventore sint, corrupti maxime dolor
          ratione! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Pariatur suscipit porro doloribus maiores minima ab amet explicabo
          odit voluptatibus aliquid quidem maxime nam veniam, quam nemo in,
          eaque assumenda voluptates? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus impedit aperiam possimus, doloremque
          aliquam sequi quia, saepe voluptates magnam temporibus odit veniam
          eveniet ad perspiciatis doloribus repellendus consequatur corrupti
          sunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptates id nobis, deserunt, deleniti suscipit consequuntur,
          doloremque unde quis neque quos earum. Tempore temporibus molestiae
          inventore sint, corrupti maxime dolor ratione! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Pariatur suscipit porro doloribus
          maiores minima ab amet explicabo odit voluptatibus aliquid quidem
          maxime nam veniam, quam nemo in, eaque assumenda voluptates?`,
    bannerURL: "https://source.unsplash.com/random",
  };

  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);

  return (
    <div className="w-screen p-8 grid gap-8">
      <img
        src={event.bannerURL}
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 blur-xl scale-110"
      />
      <div className="max-w-[300px] w-1/2 mx-auto aspect-[9/12] rounded-3xl overflow-hidden">
        <img src={event.bannerURL} className="w-full h-full shadow-lg" />
      </div>
      <div className="flex flex-col gap-8 p-8 rounded-3xl bg-white max-w-[900px] mx-auto shadow-2xl mb-32">
        <div className="flex flex-col">
          <div
            className="uppercase text-primary"
            style={{ letterSpacing: "0.2rem" }}
          >
            Contests
          </div>
          <div className="text-2xl">Tasveer - Mobile Photography</div>
          <div className="text-primary">by Pandaal</div>
        </div>

        <div className="flex items-center gap-2">
          <IconLocationEdit className="w-6 h-6 fill-primary" />
          <p className="text-slate-700">Pandaal</p>
        </div>

        <div className="flex gap-2 items-center">
          <IconClock className="w-6 h-6 fill-primary" />
          <div className="flex flex-col">
            <p className="text-slate-700">Start Time</p>
            <p className="text-red-800">
              WED, 12 OCT 2022, 12:00 AM TO 11:45 PM
            </p>
          </div>
        </div>

        <div className="flex rounded-2xl justify-between items-center transition-all text-pink-600 fill-pink-600 border-gray-100 shadow-md p-4 border gap-3 cursor-pointer hover:bg-pink-50 hover:shadow-pink-200 hover:shadow-xl">
          <div className="flex flex-col flex-grow">
            <p className="text-xl font-bold">Interested in this Event?</p>
            <p>Add this to favourites & get updates.</p>
          </div>
          <div className="h-10 w-1 border border-slate-200 bg-slate-200 rounded-full"></div>
          <div className="flex flex-col justify-center items-center px-2">
            <IconFavorites className="w-8 h-8" />
            <p>9</p>
          </div>
        </div>

        <div>
          <div className="text-2xl">Event Description</div>
          <p>
            {descriptionExpanded
              ? event.description
              : _.truncate(event.description, { length: 300 })}
          </p>
          <button
            className="text-primary font-bold uppercase hover:text-primarylight transition-colors"
            onClick={() => setDescriptionExpanded(!descriptionExpanded)}
          >
            Read {descriptionExpanded ? "Less" : "More"}
          </button>
        </div>

        <div className="flex rounded-2xl justify-between text-slate-700 fill-primary transition-all border-gray-100 cursor-pointer shadow-md p-4 border gap-3 hover:bg-indigo-50 hover:shadow-indigo-200 hover:shadow-xl">
          <div className="flex flex-col flex-grow">
            <p className="text-xl font-bold">Share this Event?</p>
            <p className="opacity-80">
              Why have all the fun alone? Invite your friends too!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center px-4">
            <IconShare className="w-8 h-8" />
          </div>
        </div>

        <div>
          <div className="text-2xl">Terms and Conditions</div>
          <div>
            <p>Age limit is 13+.</p>
            <p>Only Mobile Clicked Pictures allowed.</p>
            <p>1 Registration per Account will be considered.</p>
          </div>
        </div>

        <div className="rounded-2xl grid place-items-center text-center text-slate-700 fill-primary transition-all border-gray-100 cursor-pointer shadow-md p-4 border gap-3 hover:bg-indigo-50 hover:shadow-indigo-200 hover:shadow-xl">
          <IconEventAdd className="w-16 h-16 fill-primary" />
          <p className="text-xl font-bold">List Your Own Event</p>
          <p className="opacity-80">Contact us to list your own event.</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-primaryextralight shadow-2xl rounded-t-2xl p-8 z-10">
        <div className="max-w-[900px] mx-auto flex px-8">
          <div className="flex flex-col flex-grow">
            <p className="text-primary">Total Price</p>
            <p className="text-green-700 text-2xl">Free</p>
          </div>
          <div className="flex flex-col items-end flex-grow">
            <button className="bg-primary text-white w-full h-full rounded-2xl transition-all hover:bg-primarydark hover:shadow-2xl hover:shadow-primarylight">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
