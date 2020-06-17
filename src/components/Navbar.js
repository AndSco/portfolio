import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ButtonLight from "./UIComponents/ButtonLight";
import FlexJustified from "./UIComponents/FlexRow";
import ThemeSwitch from "./UIComponents/ThemeSwitch";
import { AnchorLink } from "gatsby-plugin-anchor-links"


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
  height: 10vh;
  display: flex;
  padding: 20px 40px 0 40px;
  align-items: center;
  justify-content: space-between;
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
        <NavLink>Contact</NavLink>
      </div>
      <ButtonLight title="RESUME" isHoverable={true} />
      <ThemeSwitch changeTheme={changeTheme} />
    </FlexJustified>
  )
}

const Navbar = ({ changeTheme }) => {
  return (
    <Nav>
      <Logo>AS</Logo>
      <NavRight changeTheme={changeTheme} />
    </Nav>
  )
}

export default Navbar;