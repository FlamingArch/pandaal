import React from "react";
import { IconDiversity, IconEdit, IconUser } from "../components/icons";
import constants from "../constants";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function PageHome() {
  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(firestore, "Events");
    getDocs(collectionRef).then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setEvents(items);
    });
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col overflow-hidden">
      <div className="p-8 grid grid-cols-2 gap-4 sticky top-0 bg-white bg-opacity-80 backdrop-blur-3xl backdrop-saturate-150">
        <div className="text-2xl font-bold text-primary-500">pandaal</div>

        <div className="flex justify-end gap-4">
          <div className="cursor-pointer overflow-hidden transition rounded-xl bg-primary-500 hover:bg-primary-700 fill-white">
            {/* <IconUser className="w-6 h-6 m-3" /> */}
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-12 h-12 aspect-square object-cover object-center hover:filter hover:brightness-75 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 p-8">
        <p className="text-3xl text-primary-500">
          Popular Events Near Greater Noida
        </p>
        <div className="cursor-pointer transition p-3 w-fit flex gap-3 rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500 hover:text-primary-500">
          <IconEdit className="w-6 h-6" />
          Filter
        </div>
      </div>

      <div className="flex flex-col">
        <p className="px-8 uppercase font-bold">Events</p>
        <div className="flex overflow-scroll gap-8 p-8">
          {events.map((e) => {
            return (
              <div key={e.id} className="flex flex-col flex-shrink-0 w-[210px] transition-all hover:bg-primary-50 hover:scale-110 hover:rounded-3xl cursor-pointer hover:p-2">
                <img
                  src={e.bannerURL}
                  className="aspect-[9/12] object-cover object-center rounded-3xl"
                />
                <div className="flex flex-col p-4 gap-2">
                  <p className="text-xl font-medium">{e.Title}</p>
                  <p className="">{e.organisationName}</p>
                  <p className="font-bold text-primary-500">
                    {e.price === "0" ? "Free" : e.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
