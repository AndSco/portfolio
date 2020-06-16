import React from "react";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

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
`

const Circles = () => {
  return (
    <BackgroundCircle>
      <BackgroundImage />
    </BackgroundCircle>
  )
}

export default Circles;