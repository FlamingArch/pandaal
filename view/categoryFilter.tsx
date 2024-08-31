"use client";

import useAppStore from "@/store";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import sampleCategories from "../sampleCategories.json";
import EventCategory from "@/model/EventCateogry";

export default function CategoryFilterView() {
  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useAppStore(
      useShallow((state) => ({
        categories: state.categories,
        setCategories: state.setCategories,
        selectedCategory: state.selectedCategory,
        setSelectedCategory: state.setSelectedCategory,
      }))
    );

  useEffect(() => {
    setCategories(sampleCategories as EventCategory[]);
  });

  return (
    <>
      <div
        className={
          "rounded-full flex items-center text-sm p-2.5 px-6 whitespace-nowrap transition-colors duration-300 cursor-pointer " +
          (selectedCategory == undefined
            ? "bg-branding-500 text-white"
            : "bg-black/10")
        }
        onClick={() => setSelectedCategory(undefined)}
      >
        All
      </div>
      {categories.map((c) => (
        <div
          key={c.id}
          className={
            "rounded-full flex items-center text-sm p-2.5 px-6 whitespace-nowrap transition-colors duration-300 cursor-pointer " +
            (c.id == selectedCategory
              ? "bg-branding-500 text-white"
              : "bg-black/10")
          }
          onClick={() => setSelectedCategory(c.id)}
        >
          {c.label}
        </div>
      ))}
    </>
  );
}
