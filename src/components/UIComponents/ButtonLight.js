import React from "react";
import styled from "styled-components";
import constants from "../../constants/constants";
import { checkPropTypes } from "prop-types";

const ButtonStyled = styled.div`
  border: 1px solid ${constants.colors.green};
  color: ${constants.colors.green};
  padding: .2rem .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
`

const ButtonLight = ({title}) => {
  return (
    <ButtonStyled width={40} height={20}>
      {title}
    </ButtonStyled>
  )
} 

export default ButtonLight;