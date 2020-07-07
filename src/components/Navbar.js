import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ButtonLight from "./UIComponents/ButtonLight";
import FlexJustified from "./UIComponents/FlexRow";
import ThemeSwitch from "./UIComponents/ThemeSwitch";
import constants from "../constants/constants";
import Anchor from "./UIComponents/Anchor";
import Burger from "./UIComponents/Burger";

// import cv from "../files/cv.pdf";

const NavLink = styled.div`
  font-size: .7rem;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 2.5rem;
  border-bottom: ${props => "0px solid " + props.theme.highlights};
  transition: color 0.50s linear; 
  
  &:hover {
    transform: scale(1.1);
    /* border-bottom: ${props => "2px solid " + props.theme.highlights}; */
  }

  &::after {
    content: ""; 
    height: 2px;
    width: 0px;
    background-color: ${props => props.theme.highlights};
    transition: all 0.20s linear; 
  }

  &:hover::after {
    width: 100%;
  }

  @media (min-width: ${constants.breakPoints.large}) {
    font-size: 1rem;
  }
`

const Nav = styled.nav`
  width: 100%;
  height: 13vh;
  min-height: 80px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.body};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transform: ${props => (props.isVisible ? "none" : "translateY(-200px)")};
  box-shadow: ${props =>
    props.scrollPosition < -100 ? "6px 7px 9px -4px rgba(0,0,0,0.38)" : "none"};

  transition: all 0.5s linear;
`

const LinksContainer = styled(FlexJustified)`
  flex: 3;
  justify-content: flex-end;

  @media (max-width: ${constants.breakPoints.medium}) {
    display: none;
  }
`



const NavRight = () => {
  return (
    <LinksContainer data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "1rem" }}
      >
        <Anchor to="aboutSection">
          <NavLink active>About</NavLink>
        </Anchor>

        <Anchor to="projectsSection">
          <NavLink>Projects</NavLink>
        </Anchor>
        <Anchor to="contactsSection">
          <NavLink>Contact</NavLink>
        </Anchor>
      </div>
      <a href={"cv.pdf"} target="_blank"><ButtonLight title="CURRICULUM VITAE" isHoverable={true} /></a>
    </LinksContainer>
  )
}

const Navbar = ({ changeTheme, theme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);


  const handleScroll = () => {
    if (isMobileMenuOpen) return;
    if (document.body.getBoundingClientRect().top === 0) {
      setIsVisible(true);
      return;
    }
    setScrollPosition(document.body.getBoundingClientRect().top);
    setIsVisible(document.body.getBoundingClientRect().top > scrollPosition);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <Nav
      isVisible={isVisible}
      scrollPosition={scrollPosition}
    >
      <Logo />
      <NavRight changeTheme={changeTheme} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <ThemeSwitch changeTheme={changeTheme} theme={theme} />
        <Burger 
          isMobileMenuOpen={isMobileMenuOpen} 
          closeMobileMenu={closeMobileMenu} 
          openMobileMenu={openMobileMenu} />
      </div>
    </Nav>
  )
}

export default Navbar;