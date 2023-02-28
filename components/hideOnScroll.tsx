"use client";

import React from "react";

type HideOnScrollProps = {
  children: React.ReactNode;
  scrollDistance: number;
};

export default function HideOnScroll(props: HideOnScrollProps) {
  const { children, scrollDistance } = props;

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = React.useMemo(() => {
    return scrollPosition > scrollDistance
      ? 0
      : scrollPosition / scrollDistance;
  }, [scrollPosition, scrollDistance]);

  const opacityStyles = React.useMemo(() => {
    return `opacity-[${1 - opacity}]`;
  }, [opacity]);
  return (
    <div className={"transition-opacity " + opacityStyles}>{children}</div>
  );
}
