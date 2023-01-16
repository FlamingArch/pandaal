import React from "react";

export default function Button({
  leading,
  children,
  trailing,
  disabled,
  type,
  onClick,
  className,
  styles,
}: {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "emphasis" | "primary" | "secondary" | "link";
  onClick?: () => void;
  className?: string;
  styles?: {
    leading: string;
    trailing: string;
    button: string;
    children: string;
  };
}) {
  const getStyles = () => {
    switch (type) {
      case "emphasis":
        return "hover:scale-105 bg-primary-500 shadow-xl shadow-primary-300 hover:shadow-primary-500 hover:shadow-2xl text-white fill-white hover:text-primary-50 hover:fill-primary-50 hover:bg-primary-600";
      case "primary":
        return "bg-primary-500 text-white fill-white hover:text-primary-50 hover:fill-primary-50 hover:bg-primary-600";
      case "link":
        return "text-primary-500 hover:text-primary-600 fill-primary-500 hover:fill-primary-600";
      default:
      case "secondary":
        return "bg-primary-50 text-black hover:text-primary-500 hover:fill-primary-500 hover:bg-primary-100";
    }
  };
  const getHoverStyles = () => {
    switch (type) {
      case "emphasis":
        return "hover:scale-105 hover:shadow-primary-500 hover:shadow-2xl hover:text-primary-50 hover:fill-primary-50 hover:bg-primary-600";
      case "primary":
        return "hover:text-primary-50 hover:fill-primary-50 hover:bg-primary-600";
      case "link":
        return "hover:text-primary-600 hover:fill-primary-600";
      default:
      case "secondary":
        return "hover:text-primary-500 hover:fill-primary-500 hover:bg-primary-100";
    }
  };
  const baseStyles =
    "flex justify-center items-center gap-3 p-4 w-fit rounded-xl transition-all cursor-pointer ";
  const disabledStyles = disabled
    ? " opacity-50 cursor-not-allowed shadow-none "
    : "";
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={`${baseStyles} ${getStyles()} ${
        !disabled && getHoverStyles()
      } ${disabledStyles} ${styles?.button} ${className}`}
    >
      <div className={styles?.leading}>{leading}</div>
      <div className={styles?.children}>{children}</div>
      <div className={styles?.trailing}>{trailing}</div>
    </button>
  );
}
