import React from "react";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import FadeInDiv from "./UIComponents/FadeInDiv";
import constants from "../constants/constants";


const BackgroundCircle = styled.div`
  min-width: 600px;
  height: 600px;
  background-color: ${props => props.theme.highlights};
  border-radius: 50%;
  position: relative;
  right: -100px;
  transition: all 0.5s linear;
  display: flex;
  z-index: 100;

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 135px;
    min-width: 135px;
    height: 135px;
    position: static;
    align-items: center;
    justify-content: center;
  }
`

const Circles = () => {
  return (
    <FadeInDiv>
    <BackgroundCircle>
      <BackgroundImage />
    </BackgroundCircle>
    </FadeInDiv>
  )
}

export default Circles;