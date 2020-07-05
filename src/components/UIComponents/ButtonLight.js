import React from "react";
import styled from "styled-components";
import constants from "../../constants/constants";


const ButtonStyled = styled.div`
  border: 1px solid ${props => props.color || props.theme.buttonColor};
  color: ${props => props.color || props.theme.buttonColor};
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.textSize || "0.6rem"};
  font-weight: 600;
  text-transform: uppercase;
  width: ${props => (props.width ? props.width + "px" : undefined)};
  cursor: pointer;
  transition: color 0.2s linear, border 0.2s linear;

  &:hover {
    color: ${props => (props.noEffect ? props.color : props.theme.highlights)};
    border-color: ${props =>
      props.noEffect ? props.color : props.theme.highlights};
    transform: ${props => (props.noEffect ? "scale(1)" : "scale(1.03)")};
    
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    padding: 10px 0;
  }

  @media (min-width: ${constants.breakPoints.large}) {
    font-size: .9rem;
  }
`

const ButtonLight = ({title, width, textSize, color, noEffect, functionToPerform}) => {
  return (
    <ButtonStyled width={width} textSize={textSize} color={color} noEffect={noEffect} onClick={functionToPerform}>
      {title}
    </ButtonStyled>
  )
} 

export default ButtonLight;