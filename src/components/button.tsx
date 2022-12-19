import React from "react";

export default function Button({
  leading,
  children,
  trailing,
  type,
  onClick,
}: {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  type?: "emphasis" | "primary" | "secondary" | "link";
  onClick: () => void;
}) {
  const getStyles = () => {
    switch (type) {
      case "emphasis":
        return "hover:scale-105 bg-primary-500 shadow-xl dark:shadow-xl shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl text-white fill-white hover:text-primary-50 hover:fill-primary-50 hover:bg-primary-600";
      case "primary":
        return "bg-primary-500 text-white fill-white hover:text-primary-50 hover:fill-primary-50 hover:bg-primary-600";
      case "link":
        return "text-primary-500 hover:text-primary-600 fill-primary-500 hover:fill-primary-600";
      default:
      case "secondary":
        return "bg-primary-50 dark:bg-primary-800 dark:text-white dark:fill-white text-black hover:text-primary-500 hover:fill-primary-500 hover:bg-primary-100";
    }
  };

  return (
    <button
      onClick={onClick}
      className={
        "flex gap-3 p-4 w-fit rounded-xl transition-all cursor-pointer " +
        getStyles()
      }
    >
      {leading}
      {children}
      {trailing}
    </button>
  );
}
