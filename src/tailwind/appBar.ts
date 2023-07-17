export default {
  root: "",
  container: "flex flex-col",
  toolbar: "flex flex-row items-center",
  leading: "",
  title: "font-medium",
  center: "flex-grow flex items-center justify-center",
  actions: "flex",
  primaryBar: "flex items-center",
  heading: "flex text-2xl font-bold flex-grow",
  primary: "p-3",
  backdrop: {
    clear: "",
    gradient: "bg-gradient-to-b from-white nodark:from-black to-transparent",
    gradientReverse:
      "bg-gradient-to-b from-black nodark:from-white to-transparent",
    gradientBlack: "bg-gradient-to-b from-dark to-transparent",
    material:
      "backdrop-blur-xl bg-white bg-opacity-50 nodark:bg-black nodark:bg-opacity-50 backdrop-saturate-150",
    materialShadow:
      "backdrop-blur-xl bg-white bg-opacity-50 nodark:bg-black nodark:bg-opacity-50 backdrop-saturate-150 shadow-xl",
    solid: "bg-white nodark:bg-black",
    shadow: "bg-white nodark:bg-black shadow-xl",
  },
};
