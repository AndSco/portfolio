import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const BurgerMenuContainer = styled.div`
  padding: 1rem;
  z-index: 20;
  color: ${props => props.iconShowing === "bars" ? props.theme.text : props.theme.body};
  transition: all .5s ease;

  @media(min-width: 600px) {
    display: none;
  }
`;


const BurgerMenu = ({ openMobileMenu, closeMobileMenu, isMobileMenuOpen }) => {
  const iconShowing = isMobileMenuOpen ? "times-circle" : "bars";
  
  const manageMenu = () => {
    if (!isMobileMenuOpen) {
      openMobileMenu()
    } else {
      closeMobileMenu()
    }
  }

  return (
    <BurgerMenuContainer onTouchStart={manageMenu} iconShowing={iconShowing}>
      <FontAwesomeIcon icon={iconShowing} size="2x" />
    </BurgerMenuContainer>
  )
}

export default BurgerMenu;