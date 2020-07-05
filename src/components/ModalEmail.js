import React from "react";
import styled from "styled-components";
import ButtonLight from "./UIComponents/ButtonLight";
import { RemoveScroll } from "react-remove-scroll";
import { Modal } from "./ModalDemo";
import { scaleUpText, fadeIn } from "../constants/animations";



const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const ModalHeader = styled.h4`
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -3px;
  animation: ${scaleUpText} .3s ease-in-out;
`

const ButtonContainer = styled.div`
  animation: ${fadeIn} 1.2s linear;
`

const ModalEmail = ({ handleModal }) => {
  return (
    <RemoveScroll>
      <Modal>
        <ModalContent>
          <ModalHeader>Message sent!</ModalHeader>
          <ButtonContainer>
            <ButtonLight
              title="back to site"
              functionToPerform={handleModal}
              textSize="1.2rem"
            />
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </RemoveScroll>
  )
}

export default ModalEmail;