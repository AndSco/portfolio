import constants from "../../constants/constants";

export const lightTheme = {
         body: "#FFF",
         text: constants.colors.darkGrey,
         highlights: constants.colors.pink,
         mainTitle: constants.colors.pink,
         secondaryTitle: constants.colors.green,
         secondaryDetails: constants.colors.lightGrey,
         overlayGradient:
           "linear-gradient(rgba(255, 68, 131, 0.62), rgba(14, 217, 158, 0.62))",
         buttonColor: constants.colors.green,
         aboutStrip:
           `linear-gradient(to left, #eef2f3, #F5F5F5)` ||
           `-webkit-linear-gradient(to left, #eef2f3, #F5F5F5)` ||
           "#F5F5F5",
         contactsStrip: "#efefef",
         contactsButtonColor: "white",
         underline: "#f5f56b",
         mobileMenuUnderline: "#791872",
       }
export const darkTheme = {
  body: constants.colors.darkThemeBackground,
  text: "#D6DDE0",
  highlights: constants.colors.aqua,
  mainTitle: "lightgray",
  secondaryTitle: constants.colors.aqua,
  secondaryDetails: "#CED6DA",
  overlayGradient:
    "linear-gradient(rgba(12, 68, 131, 0.62), rgba(14, 217, 158, 0.62))",
  buttonColor: "white", //"#FFFF00",
  aboutStrip:
    `linear-gradient(to left, #1f2f40, #141E30)` ||
    `-webkit-linear-gradient(to left, #1f2f40, #141E30)` ||
    "#141E30",
  contactsStrip: "#040121",
  contactsButtonColor: "#040121",
  underline: "#e51f6c",
  mobileMenuUnderline: "#CED6DA"
}
