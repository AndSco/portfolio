import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../constants/constants";
import ButtonLight from "./UIComponents/ButtonLight";


const Modal = styled.div`
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
`

const DemoBox = styled.div`
  width: 65vw;
  height: 80vh;
  background-color: white;
`

const DetailsBox = styled.div`
  color: white;
  padding: 1rem;
  padding-left: 3.5rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ModalDemo = ({project, closeModal}) => {
  const {demoUrl, title} = project;
  console.log("url", demoUrl)
 return (
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
       }}
       onClick={closeModal}
     />
     <DemoBox>
       <iframe
         width="100%"
         height="100%"
         src={demoUrl}
         // title={project}
         frameBorder="0"
       />
     </DemoBox>
     <DetailsBox>
       <u><h4 style={{textAlign: "right", fontWeight: 400}}>{title}</h4></u>
       <ButtonLight title="See source code" color="white" noEffect />
     </DetailsBox>
   </Modal>
 )
}

export default ModalDemo;