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
  align-items: flex-end;
  padding-right: 4rem;
  justify-content: center;
  background-color: ${props => props.theme.highlights};
  color: white;
  z-index: 10;
  right: ${props => (props.isMenuVisible ? 0 : "-2000px")};
  transition: all 0.2s ease;
  -webkit-box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.75);
`

const Link = styled.h2`
  color: ${props => props.theme.body};
  text-transform: uppercase;
  display: flex;
  margin: 1.5rem 0;
`

const MenuItem = ({closeMobileMenu, linkTo, text}) => {
  return (
    <div>
      <Anchor to={linkTo}>
        <Link onTouchStart={closeMobileMenu}>{text}</Link>
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