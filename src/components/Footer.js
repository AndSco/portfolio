import React from "react";
import styled from "styled-components";
import constants from "../constants/constants";

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.6rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    justify-content: center;
  }
`


const Footer = () => <StyledFooter>Designed and coded by Andrea Scorcia | 2020</StyledFooter>
 

export default Footer;