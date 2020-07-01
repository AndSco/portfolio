import React from "react";
import styled from "styled-components";
import Anchor from "./Anchor";
import ClickableIcon from "./ClickableIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileMenuContainer = styled.div`
  width: 70vw;
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  padding-top: 6rem;
  justify-content: space-between;
  background-color: ${props => props.theme.highlights};
  color: white;
  z-index: 10;
  right: ${props => (props.isMenuVisible ? 0 : "-2000px")};
  /* transition: all 0.3s ease; */
  transition: ${props => !props.isMenuVisible ? "all 2s ease" : "all 0.3s ease"};
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
  max-width: 300px;
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
        <Link onMouseUp={closeMobileMenu}>{text}</Link>
      </Anchor>
    </div>
  )
}

const IconCloseContainer = styled.div`
  color: ${props => props.theme.body};
  position: absolute;
  top: 30px;
  right: 30px;

  &:active {
    transform: rotate(180deg);
  }
`

const MobileMenu = ({ isMenuVisible, closeMobileMenu }) => {
  const componentRef = React.useRef();
  const {current} = componentRef;

  const handleTouch = React.useCallback((e) => {
    if (current.contains(e.target)) {
      return;
    } else {
      closeMobileMenu();
    }
  }, [current]);

  React.useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("click", handleTouch);
    }
    
    return () => {
      document.removeEventListener("click", handleTouch)
    }
  }, [isMenuVisible, handleTouch]);


  return (
    <MobileMenuContainer isMenuVisible={isMenuVisible} ref={componentRef}>
      <div>
        <IconCloseContainer>
          <FontAwesomeIcon icon="times-circle" onClick={closeMobileMenu} size="3x" />
        </IconCloseContainer>
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