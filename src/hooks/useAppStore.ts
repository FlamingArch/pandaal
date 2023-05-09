import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import { Functions, getFunctions } from "firebase/functions";
import { create } from "zustand";
import { getCityStorage, setCityStorage } from "../functions";

const firebaseConfig = {
  apiKey: "AIzaSyAzkEwuLhZwpL57SkaAY1ee2ym91fQLIGk",
  authDomain: "pandaal-a71fd.firebaseapp.com",
  projectId: "pandaal-a71fd",
  storageBucket: "pandaal-a71fd.appspot.com",
  messagingSenderId: "918662713292",
  appId: "1:918662713292:web:feebd8bddb182f59809769",
  measurementId: "G-RN1KKBLZ7S",
};

const app = initializeApp(firebaseConfig);

export type AppStoreData = {
  city: string;
  setCity: (city: string) => void;
  firestore: Firestore;
  auth: Auth;
  functions: Functions;
};

export const useAppStore = create<AppStoreData>((set) => ({
  city: getCityStorage() ?? "Greater Noida",
  setCity: (city) =>
    set((state) => {
      setCityStorage(city);
      return { ...state, city: city };
    }),
  firestore: getFirestore(app),
  auth: getAuth(app),
  functions: getFunctions(app),
}));

export default useAppStore;