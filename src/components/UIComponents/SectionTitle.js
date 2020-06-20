import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../constants/constants";

const Asterisk = styled.div`
  color: ${props => props.theme.highlights};
  margin-right: 0.7rem;
  transition: all .6s ease;
`

const SectionTitle = styled.h2`
  text-transform: uppercase;
  ${props => props.styles};
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.7rem;

  &:hover ${Asterisk} {
    transform: rotate(180deg);
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    align-self: center;
    justify-content: center;
  }
`

const Title = ({title, styles}) => {
  return (
    <SectionTitle styles={styles}>
      <Asterisk><FontAwesomeIcon icon="star-of-life" size="sm" /></Asterisk>
      {title}
    </SectionTitle>
  )
}

export default Title;
