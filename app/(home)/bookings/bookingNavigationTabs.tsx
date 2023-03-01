"use client";

import React from "react";
import { SegmentedControl } from "@/components";
import { useRouter, usePathname } from "next/navigation";

type BookingNavigationTabsProps = {
  children?: React.ReactNode;
};

export default function bookingNavigationTabs(
  props: BookingNavigationTabsProps
) {
  const path = usePathname();
  const pathArr = path?.split("/");
  const [selected, setSelected] = React.useState(
    pathArr?.length == 3 && pathArr[2] == "older" ? "Older" : "Upcoming"
  );
  const { replace: push } = useRouter();

  React.useEffect(() => {
    if (selected === "Upcoming") {
      push("/bookings");
    } else if (selected === "Older") {
      push("/bookings/older");
    }
  }, [selected]);

  return (
    <div className="md:mx-auto">
      <SegmentedControl
        values={["Upcoming", "Older"]}
        selected={selected}
        onChange={(val) => setSelected(val)}
      />
    </div>
  );
}
