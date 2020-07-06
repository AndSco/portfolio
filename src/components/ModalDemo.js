import React, {useState} from "react";
import styled from "styled-components";
import constants from "../constants/constants";
import Spinner from "./UIComponents/Spinner";
import Modal from "./UIComponents/Modal";


const DemoBox = styled.div`
  width: 80vw;
  height: 80vh;

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 95vw;
    height: auto;
    min-height: 320px;
  }
`


const ModalDemo = ({project, handleModal}) => {
  const {demoUrl} = project;
  const [isLoading, setIsLoading] = useState(true);

 return (
    <Modal handleModal={handleModal}>
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
 )
}

export default ModalDemo;