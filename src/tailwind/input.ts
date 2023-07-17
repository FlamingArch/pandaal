import StyleObject from "../types/styleObject";

export default new StyleObject({
  base: "flex items-center rounded-xl overflow-hidden transition min-h-[48px] ",
  normal: "border-2 border-gray-700 fill-gray-700 text-gray-700",
  hover: "hover:shadow-xl",
  focus:
    "focus-within:shadow-primary-300  focus-within:border-primary-500 focus-within:shadow-xl focus-within:fill-primary-500 focus-within:text-primary-500",
  focusHover:
    "focus-within:hover:shadow-primary-300 focus-within:hover:border-primary-500 focus-within:hover:fill-primary-500 focus-within:hover:text-primary-500",
  others: "",
});
