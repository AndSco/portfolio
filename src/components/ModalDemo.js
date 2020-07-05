import React, {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../constants/constants";
import ButtonLight from "./UIComponents/ButtonLight";
import { RemoveScroll } from "react-remove-scroll"
import Spinner from "./UIComponents/Spinner";


export const Modal = styled.div`
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

const DemoBox = styled.div`
  width: 80vw;
  height: 80vh;

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 95vw;
    height: auto;
    min-height: 320px;
  }
`


const ModalDemo = ({project, closeModal}) => {
  const {demoUrl} = project;
  const [isLoading, setIsLoading] = useState(true);

 return (
   <RemoveScroll>
    <Modal>
      <FontAwesomeIcon
        icon="times-circle"
        size="3x"
        color="white"
        style={{
          position: "fixed",
          right: "2rem",
          top: "2rem",
          cursor: "pointer",
          zIndex: 1000
        }}
        onClick={closeModal}
      />
      <DemoBox>
        {isLoading 
          ?
          <Spinner />
          :
          null
        }
        <iframe
          width="100%"
          height="100%"
          src={demoUrl}
          onLoad={() => setIsLoading(false)}
          // title={project}
          frameBorder="0"
        />
      </DemoBox>
    </Modal>
   </RemoveScroll>
 )
}

export default ModalDemo;