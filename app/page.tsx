"use client";

import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";

const categories = [
  "All",
  "Hackathons",
  "Concert",
  "Speed Dating",
  "Samuhik Vivah",
  "Orgy",
  "Karaoke",
  "Career Fare",
  "Terrorist Attack",
  "Stand Up",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  return <main className="flex min-h-screen flex-col"></main>;
}
