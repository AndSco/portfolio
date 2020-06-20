import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ButtonLight from "./UIComponents/ButtonLight";
import FlexJustified from "./UIComponents/FlexRow";
import ThemeSwitch from "./UIComponents/ThemeSwitch";
import constants from "../constants/constants";
import BurgerMenu from "./UIComponents/BurgerMenu";
import MobileMenu from "./UIComponents/MobileMenu";
import Anchor from "./UIComponents/Anchor";

const NavLink = styled.div`
  font-family: "Proxima Nova";
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
    <LinksContainer>
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
      <ButtonLight title="RESUME" isHoverable={true} />
    </LinksContainer>
  )
}

const Navbar = ({ changeTheme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleScroll = () => {
    setScrollPosition(document.body.getBoundingClientRect().top);
    setIsVisible(document.body.getBoundingClientRect().top > scrollPosition);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <Nav isVisible={isVisible} scrollPosition={scrollPosition}>
      <MobileMenu isMenuVisible={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      <Logo />
      <NavRight changeTheme={changeTheme} />
      <ThemeSwitch changeTheme={changeTheme} />
      <BurgerMenu openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu} />
    </Nav>
  )
}

export default Navbar;