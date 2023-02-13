import { create as createStore } from "zustand";

export const useAppStore = createStore<{
  currentCity: string;
  changeCity: Function;
}>((set) => ({
  currentCity: "Delhi",
  changeCity: (city: string) => set({ currentCity: city }),
}));
