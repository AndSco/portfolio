import constants from "../../constants/constants";

export const lightTheme = {
  body: "#FFF",
  text: constants.colors.darkGrey,
  highlights: constants.colors.pink,
  mainTitle: constants.colors.pink, 
  secondaryTitle: constants.colors.green,
  secondaryDetails: constants.colors.lightGrey,
  overlayGradient: "linear-gradient(rgba(255, 68, 131, 0.62), rgba(14, 217, 158, 0.62))", 
  buttonColor: constants.colors.green, 
  aboutStrip: "#F5F5F5"
}
export const darkTheme = {
  body: constants.colors.darkThemeBackground,
  text: "#D6DDE0",
  highlights: constants.colors.aqua,
  mainTitle: "lightgray", 
  secondaryTitle: constants.colors.aqua,
  secondaryDetails: "#CED6DA",
  overlayGradient: "linear-gradient(rgba(12, 68, 131, 0.62), rgba(14, 217, 158, 0.62))", 
  buttonColor: "white",//"#FFFF00", 
  aboutStrip: "#2B3052"
}
