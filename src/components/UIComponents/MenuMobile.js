import React from "react"
import styled from "styled-components"
import Anchor from "./Anchor"
import ClickableIcon from "./ClickableIcon"

const MobileMenuContainer = styled.div`
  width: 70vw;
  max-width: 300px;
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
  transition: all 0.3s ease;
  /* transition: ${props =>
    !props.isMenuVisible ? "all 2s ease" : "all 0.3s ease"}; */
  -webkit-box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.75);
`

const Link = styled.h2`
  color: ${props => props.theme.body};
  text-transform: uppercase;
  display: flex;
  margin: 2.5rem 0;
  position: relative;
  width: fit-content;
  text-shadow: ${props => props.color || props.theme.textShadow};

  background-image: ${props =>
    `linear-gradient(120deg, ${props.theme.mobileMenuUnderline} 0%, ${props.theme.mobileMenuUnderline} 100%)`};
  background-repeat: no-repeat;
  background-size: 100% 0.5em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
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

const MenuItem = ({ closeMobileMenu, linkTo, text }) => {
  return (
    <div>
      <Anchor to={linkTo}>
        <Link onMouseUp={closeMobileMenu}>{text}</Link>
      </Anchor>
    </div>
  )
}


const MenuMobile = ({ isMenuVisible, closeMobileMenu }) => {
  const componentRef = React.useRef()
  const { current } = componentRef

  const handleTouch = React.useCallback(
    e => {
      if (current.contains(e.target)) {
        return
      } else {
        closeMobileMenu()
      }
    },
    [current, closeMobileMenu]
  )

  React.useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("click", handleTouch)
    }

    return () => {
      document.removeEventListener("click", handleTouch)
    }
  }, [isMenuVisible, handleTouch])

  return (
    <MobileMenuContainer isMenuVisible={isMenuVisible} ref={componentRef}>
      <div>
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

export default MenuMobile
