import React, {useRef, useState, useEffect, useCallback, useContext} from "react"
import "../styles/index.css"
import { Link } from "gatsby"
import AnimatedTitle from "../components/AnimatedTitle";
import Layout from "../components/layout"
import { useTransition, animated } from "react-spring"
import Navbar from "../components/Navbar";
import MainPageBody from "../components/MainPageBody"
import Hero from "../components/Hero"
import Photo from "../components/Photo";
import FlexJustified from "../components/UIComponents/FlexJustified";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/UIComponents/Globalstyles";
import { lightTheme, darkTheme } from "../components/UIComponents/Themes";
// import AppContext from "../context/AppContext";

const IndexPage = () => {
  const [theme, setTheme] = React.useState("light");
  const changeTheme = () => {
    console.log("CHANGING")
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Navbar changeTheme={changeTheme} />
      <MainPageBody>
        <Hero />
      </MainPageBody>
    </ThemeProvider>
  )
}

export default IndexPage
