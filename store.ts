import { create } from "zustand";
import EventCategory from "./model/EventCateogry";

type AppStoreLayout = {
  categories: EventCategory[];
  selectedCategory?: string | null;
  setCategories: (categories: EventCategory[]) => void;
  setSelectedCategory: (categoryId?: string | null) => void;
};

const useAppStore = create<AppStoreLayout>((set) => ({
  categories: [],
  setCategories: (categories: EventCategory[]) => {
    set({ categories });
  },
  selectedCategory: undefined,
  setSelectedCategory(categoryId = "") {
    set({
      selectedCategory: categoryId === "" ? undefined : categoryId,
    });
  },
}));

export default useAppStore;
