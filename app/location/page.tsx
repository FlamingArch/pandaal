import constants from "@/constants";
import { useAppStore } from "@/context/app";
import { City } from "@/models";
import { initializeApp } from "firebase/app";
import { getDoc, doc, getFirestore, collection } from "firebase/firestore";
import CityOption from "./cityOption";

async function fetchCities() {
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  try {
    const snapshot = await getDoc(
      doc(collection(firestore, "appData"), "locationData")
    );
    const data = snapshot.data();
    return data;
  } catch (error) {
    console.debug(error);
    return null;
  }
}

export default async function page() {
  const { cities } = (await fetchCities()) ?? constants.defaultCities;

  return (
    <main className="rounded-xl overflow-hidden bg-primary-50 m-6 animate-pop-in">
      {cities.map((city: City) => {
        if (city.isActive) return <CityOption cityName={city.cityName} />;
      })}
    </main>
  );
}
