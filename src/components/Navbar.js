import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ButtonLight from "./UIComponents/ButtonLight";
import FlexJustified from "./UIComponents/FlexRow";
import ThemeSwitch from "./UIComponents/ThemeSwitch";
import { AnchorLink } from "gatsby-plugin-anchor-links";


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
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.body};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  box-shadow: ${props => props.scrollPosition < -100 ? "6px 7px 9px -4px rgba(0,0,0,0.38)" : "none"};

  transition: all 0.5s linear;
`

const Anchor = ({to, children}) => {
  return (
  <AnchorLink to={`/#${to}`}>
    {children}
  </AnchorLink>
  )
}

const NavRight = ({ changeTheme }) => {
  return (
    <FlexJustified>
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
      <ThemeSwitch changeTheme={changeTheme} />
    </FlexJustified>
  )
}

const Navbar = ({ changeTheme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);


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
      <Logo />
      <NavRight changeTheme={changeTheme} />
    </Nav>
  )
}

export default Navbar;