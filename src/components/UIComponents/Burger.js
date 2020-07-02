import React, {useState, useEffect} from "react";
import styled from "styled-components";
import MenuMobile from "./MenuMobile";
import constants from "../../constants/constants";

const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;

  @media (max-width: ${constants.breakPoints.medium}) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${props =>
      props.isOpen ? props.theme.body : props.theme.text};
    /* ${({ isOpen }) => (isOpen ? "grey" : "yellow")}; */
    border-radius: 10px;
    transform-origin: 1px;
    transition: all .2s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")}
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")}
    }
  }
`

const Burger = ({isMobileMenuOpen, closeMobileMenu, openMobileMenu}) => {
  return (
    <>
      <StyledBurger isOpen={isMobileMenuOpen} onClick={() => {
        isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
        }}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuMobile isMenuVisible={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
    </>
  )
}

export default Burger;