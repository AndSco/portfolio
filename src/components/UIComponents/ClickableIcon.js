import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ClickableIcon = ({icon, size, color, styles, link}) => {
  return (
    <a href={link} target="_blank">
      <FontAwesomeIcon icon={icon} style={{cursor: "pointer", ...styles}} size={size} color={color} />
    </a>)
}


export default ClickableIcon;