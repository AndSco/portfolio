import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import constants from "../constants/constants";
import ButtonLight from "./UIComponents/ButtonLight";
import FlexJustified from "./UIComponents/FlexJustified";
import ThemeSwitch from "./UIComponents/ThemeSwitch";
import AppContext from "../context/AppContext";

const NavLink = styled.div`
  font-family: "Proxima Nova";
  font-size: .7rem;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  cursor: pointer;
  margin: 0 2.5rem;
  border-bottom: ${props => props.active ? "2px solid " + props.theme.highlights : "2px solid transparent"};
  transition: all 0.50s linear; 
`;

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px 40px 0 40px;
  align-items: center;
  justify-content: space-between;
`

const NavRight = ({ changeTheme }) => {
  const context = React.useContext(AppContext);
  return (
    <FlexJustified>
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "1rem" }}
      >
        <NavLink active>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </div>
      <ButtonLight title="RESUME" />
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