import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../constants/constants";

const AsteriskContainer = styled.div`
  color: ${props => props.color || props.theme.highlights};
  margin-right: 0.7rem;
  transition: all .6s ease;
`

export const Asterisk = ({color}) => {
  return (
    <AsteriskContainer color={color}>
      <FontAwesomeIcon icon="star-of-life" size="sm" />
    </AsteriskContainer>
  )
}

const SectionTitle = styled.h2`
  text-transform: uppercase;
  ${props => props.styles};
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.7rem;
  border-right: 7px solid ${props => props.theme.highlights};
  padding-right: 1rem;
  align-self: flex-start;

  &:hover ${AsteriskContainer} {
    transform: rotate(180deg);
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    align-self: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  @media (min-width: ${constants.breakPoints.large}) {
    font-size: 2.7rem;
  }
`

const Title = ({title, styles}) => {
  return (
    <SectionTitle styles={styles}>
      <Asterisk />
      {title}
    </SectionTitle>
  )
}

export default Title;
