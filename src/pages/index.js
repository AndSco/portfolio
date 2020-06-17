import React from "react"
import "../styles/index.css"
import Navbar from "../components/Navbar";
import MainPageBody from "../components/MainPageBody"
import Hero from "../components/Hero"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/UIComponents/Globalstyles";
import { lightTheme, darkTheme } from "../components/UIComponents/Themes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub, faJs, faReact, faNode, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faDatabase, faEnvelope, faExternalLinkAlt, faPlayCircle, faTimesCircle, faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import SocialsStrip from "../components/SocialsStrip";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Image from "../components/ProjectPic";

library.add(faLinkedin, faGithub, faJs, faReact, faNode, faHtml5, faCss3Alt, faMobileAlt, faDatabase, faEnvelope, faExternalLinkAlt, faPlayCircle, faTimesCircle, faStarOfLife); 

const IndexPage = () => {
  const [theme, setTheme] = React.useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Navbar changeTheme={changeTheme} />
      <MainPageBody>
        <Hero />
        <SocialsStrip />
        <About />
        <ProjectsSection />
        <Image fileName="../images/covid19.png" />
      </MainPageBody>
    </ThemeProvider>
  )
}

export default IndexPage
