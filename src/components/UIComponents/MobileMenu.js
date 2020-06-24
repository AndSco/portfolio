import React from "react";
import styled from "styled-components";
import Anchor from "./Anchor";
import ClickableIcon from "./ClickableIcon";

const MobileMenuContainer = styled.div`
  width: 70vw;
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  padding-top: 15rem;
  justify-content: space-between;
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
  margin: 2.5rem 0;
  justify-content: flex-end;
`

const IconSectionContainer = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;
  width: 100%;
  justify-content: space-between;
  margin-top: 6rem;
  color: ${props => props.theme.body};
  opacity: 0.6;
  border-top: 2px solid;
`

const IconSection = () => {
  return (
    <IconSectionContainer>
      <ClickableIcon size="2x" icon={["fab", "linkedin"]} />
      <ClickableIcon size="2x" icon={["fab", "github"]} />
      <ClickableIcon size="2x" icon="envelope" />
    </IconSectionContainer>
  )
}

const MenuItem = ({closeMobileMenu, linkTo, text}) => {
  return (
    <div>
      <Anchor to={linkTo}>
        <Link onTouchEnd={closeMobileMenu}>{text}</Link>
      </Anchor>
    </div>
  )
}

const MobileMenu = ({ isMenuVisible, closeMobileMenu }) => {
  return (
    <MobileMenuContainer isMenuVisible={isMenuVisible}>
      <div style={{}}>
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
      </div>
      <IconSection />
    </MobileMenuContainer>
  )
}

export default MobileMenu;