import React from "react";
import styled from "styled-components";
import Anchor from "./Anchor";
import {Asterisk} from "./SectionTitle";

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
  display: flex;
`

const MenuItem = ({closeMobileMenu, linkTo, text}) => {
  return (
    <div onTouchStart={closeMobileMenu}>
      <Anchor to={linkTo}>
        <Link>
          <Asterisk color="white" />
          {text}
        </Link>
      </Anchor>
    </div>
  )
}

const MobileMenu = ({ isMenuVisible, closeMobileMenu }) => {
  return (
    <MobileMenuContainer isMenuVisible={isMenuVisible}>
      <MenuItem
        closeMobileMenu={closeMobileMenu}
        linkTo="aboutSection"
        text="ABOUT"
      />
      <MenuItem
        closeMobileMenu={closeMobileMenu}
        linkTo="projectsSection"
        text="Projects"
      />
      <MenuItem
        closeMobileMenu={closeMobileMenu}
        linkTo="contactsSection"
        text="contact"
      />
    </MobileMenuContainer>
  )
}

export default MobileMenu;