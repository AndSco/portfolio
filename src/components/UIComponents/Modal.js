import React from "react";
import styled from "styled-components";
import { RemoveScroll } from "react-remove-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../constants/constants"

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${constants.colors.modalBground};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  padding: 3rem 5rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
  }
`

const Modal = ({children, handleModal}) => {
  return (
    <RemoveScroll>
      <StyledModal>
        <FontAwesomeIcon
          icon="times-circle"
          size="3x"
          color="white"
          style={{
            position: "fixed",
            right: "2rem",
            top: "2rem",
            cursor: "pointer",
            zIndex: 1000,
          }}
          onClick={handleModal}
        />
        {children}
      </StyledModal>
    </RemoveScroll>
  )
}

export default Modal;