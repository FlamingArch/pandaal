// TODO: Add disabled button styles
export default {
  primary: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-xl
    transition flex items-center p-3 gap-3 justify-center
    disabled:hover:bg-primary-500 disabled:cursor-not-allowed`,
    icon: "w-6 h-6 fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "font-medium text-white",
  },
  emphasis: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-xl
    transition flex items-center p-3 gap-3 justify-center
    disabled:hover:bg-primary-500 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-50
    shadow-lg shadow-primary-300 nodark:shadow-primary-700
    hover:shadow-xl hover:shadow-primary-300 hover:nodark:shadow-primary-700 `,
    icon: "w-6 h-6 fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "font-medium text-white",
  },
  secondary: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-xl
    nodark:bg-primary-800 nodark:bg-opacity-70 nodark:hover:bg-primary-800
    transition flex items-center p-3 gap-3 justify-center
    disabled:hover:bg-primary-50 disabled:cursor-not-allowed`,
    icon: "w-6 h-6 fill-primary-500 nodark:fill-primary-100 disabled:bg-opacity-50",
    iconContainer: "",
    label: "font-medium text-primary-500 nodark:text-primary-100",
  },
  action: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-xl
    nodark:bg-primary-800 nodark:bg-opacity-70 nodark:hover:bg-primary-800
    backdrop-filter backdrop-blur-lg backdrop-saturate-150
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-primary-500 nodark:fill-primary-100 disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-primary-500 nodark:text-primary-100",
  },
  actionEmphasis: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-xl
    backdrop-filter backdrop-blur-lg backdrop-saturate-150
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-white",
  },
  actionSecondary: {
    button: `
    hover:bg-black hover:nodark:bg-white hover:bg-opacity-10 nodark:hover:bg-opacity-10 rounded-xl
    backdrop-filter backdrop-blur-lg backdrop-saturate-150
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-black nodark:fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-black nodark:text-white",
  },
  actionSecondaryInvert: {
    button: `
    hover:bg-white nodark:hover:bg-black hover:bg-opacity-10 rounded-xl
    backdrop-filter backdrop-blur-lg backdrop-saturate-150
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-white nodark:fill-black disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-white nodark:text-black",
  },
  actionSecondaryBlack: {
    button: `
    hover:bg-black hover:bg-opacity-10 rounded-xl
    backdrop-filter backdrop-blur-lg backdrop-saturate-150
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-black disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-black",
  },
  actionSecondaryWhite: {
    button: `
    hover:bg-white hover:bg-opacity-10 rounded-xl
    backdrop-filter backdrop-blur-lg backdrop-saturate-150
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-white",
  },
  actionSecondaryTransparent: {
    button: `
    hover:bg-black hover:nodark:bg-white hover:bg-opacity-10 nodark:hover:bg-opacity-10 rounded-xl
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-black nodark:fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-black nodark:text-white",
  },
  actionSecondaryTransparentInvert: {
    button: `
    hover:bg-white nodark:hover:bg-black hover:bg-opacity-10 rounded-xl
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-white nodark:fill-black disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-white nodark:text-black",
  },
  actionSecondaryTransparentBlack: {
    button: `
    hover:bg-black hover:bg-opacity-10 rounded-xl
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-black disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-black",
  },
  actionSecondaryTransparentWhite: {
    button: `
    hover:bg-white hover:bg-opacity-10 rounded-xl
    transition flex items-center p-3 gap-3 w-fit
    `,
    icon: "w-6 h-6 fill-white disabled:bg-opacity-50",
    iconContainer: "",
    label: "text-white",
  },
  card: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-full
    transition flex items-center gap-3 p-1
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-2",
    label: "font-[400] text-white",
  },
  cardSecondary: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-full
    transition flex items-center gap-3 p-1
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-2",
    label: "font-[400]",
  },
  cardReverse: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-full
    transition flex flex-row-reverse items-center gap-3 p-1
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-2",
    label: "font-[400] text-white flex-grow text-left pl-2",
  },
  cardSecondaryReverse: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-full
    transition flex flex-row-reverse items-center gap-3 p-1
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-2",
    label: "font-[400] flex-grow text-left pl-2",
  },
  cardBig: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-2xl
    transition flex items-center gap-3 p-5
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-4",
    label: "font-[400] text-white",
  },
  cardBigSecondary: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-2xl
    transition flex items-center gap-3 p-5
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-4",
    label: "font-[400]",
  },
  cardBigReverse: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-2xl
    transition flex flex-row-reverse items-center gap-3 p-5
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-4",
    label: "font-[400] text-white flex-grow text-left pl-2",
  },
  cardBigSecondaryReverse: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-2xl
    transition flex flex-row-reverse items-center gap-3 p-5
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-4",
    label: "font-[400] flex-grow text-left pl-2",
  },
  badge: {
    button: `
    rounded-xl overflow-hidden relative
    `,
    icon: "w-6 h-6 fill-white disabled:bg-opacity-50",
    iconContainer: "fixed inset-0 p-3",
    label: "text-white",
  },
  cardSquare: {
    button: `
    bg-primary-500 hover:bg-primary-600 rounded-2xl
    transition flex flex-col items-stretch justify-between gap-3 p-5 aspect-[1/1] h-fit
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-4 ml-auto",
    label: "font-[400] text-white w-28 text-left",
  },
  cardSquareSecondary: {
    button: `
    bg-primary-50 hover:bg-primary-100 rounded-2xl
    transition flex flex-col items-stretch justify-between gap-3 p-5 aspect-[1/1] h-fit
    `,
    icon: "w-6 h-6 fill-primary-500",
    iconContainer: "rounded-full bg-white p-4 ml-auto",
    label: "font-[400] w-28 text-left text-primary-500",
  },
};
