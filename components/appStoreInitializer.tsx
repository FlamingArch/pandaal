"use client";
import React from "react";
import { useAppStore } from "@/context/app";

export default function appStoreInitializer({ state }: { state: any }) {
  const initialized = React.useRef(false);
  if (!initialized.current) {
    useAppStore.setState(state);
    initialized.current = true;
  }

  return null;
}
