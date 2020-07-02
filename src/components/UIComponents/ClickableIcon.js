import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../constants/constants";

const IconContainer = styled.div`
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 1.2rem;
  }
`

const ClickableIcon = ({icon, size, color, styles, link}) => {
  return (
    <a href={link} target="_blank">
      <IconContainer>
      <FontAwesomeIcon icon={icon} style={{cursor: "pointer", ...styles}} size={size} color={color} />
      </IconContainer>
    </a>
  )
}


export default ClickableIcon;