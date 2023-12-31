import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#24C16B", // green
  secondary: "#0C381F", // dark green

  green: "#66D59A",
  lightGreen: "#E6FEF0",

  lime: "#00BA63",
  emerald: "#2BC978",

  red: "#FF4134",
  lightRed: "#FFF1F0",

  purple: "#800000",// changed to wine color
  lightpurple: "#ffc7c7",// changed to light wine

  yellow: "#FFC664",
  lightyellow: "#FFF9EC",

  black: "#1E1F20",
  white: "#ffc7c7",

  lightGray: "#FCFBFC",
  gray: "#C1C3C5",
  darkgray: "#C3C6C7",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Poppins-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Poppins-Bold", fontSize: SIZES.h5, lineHeight: 22 },
  h6: { fontFamily: "Poppins-Bold", fontSize: SIZES.h6, lineHeight: 22 },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
