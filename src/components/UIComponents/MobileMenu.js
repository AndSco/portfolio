import React from "react";
import styled from "styled-components";
import Anchor from "./Anchor";

const MobileMenuContainer = styled.div`
  width: 70vw;
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.highlights};
  color: white;
  z-index: 10;
  right: ${props => props.isMenuVisible ? 0 : "-2500px"};
  transition: all .6s ease;
`;

const Link = styled.h2`
  color: ${props => props.theme.body};
  text-transform: uppercase;
`;

const MobileMenu = ({ isMenuVisible, closeMobileMenu }) => {
  return (
    <MobileMenuContainer isMenuVisible={isMenuVisible}>
      <Anchor to="aboutSection">
        <Link onTouchStart={closeMobileMenu}>ABOUT</Link>
      </Anchor>
      <Anchor to="projectsSection">
        <Link onTouchStart={closeMobileMenu}>Projects</Link>
      </Anchor>
      <Anchor to="contactsSection">
        <Link onTouchStart={closeMobileMenu}>Contact</Link>
      </Anchor>
    </MobileMenuContainer>
  )
}

export default MobileMenu;