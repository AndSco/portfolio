import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../constants/constants";


const BurgerMenuContainer = styled.div`
  padding: 1rem;
  color: ${props => props.theme.text};
  transition: all 0.5s ease;

  &:active {
    transform: rotate(180deg);
  }

  @media (min-width: ${constants.breakPoints.medium}) {
    display: none;
  }
`


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
    <BurgerMenuContainer
      onClick={manageMenu}
      iconShowing={iconShowing}
    >
      <FontAwesomeIcon
        icon="bars"
        size="2x"
      />
    </BurgerMenuContainer>
  )
}

export default BurgerMenu;