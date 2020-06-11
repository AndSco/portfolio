import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
  min-width: 450px;
  height: 450px;
  background-color: ${props => props.theme.highlights};
  border-radius: 50%;
  position: relative;
  right: -100px;
  overflow: hidden;
  transition: all 0.5s linear;
`

const Photo = props => {
  return (
    <PhotoContainer />
    )
}

export default Photo;