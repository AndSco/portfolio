import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  /* &::after {
    content: "";
    display: block;
    height: 1px;
    margin-left: 3rem;
    flex-grow: 1;
    background-color: ${props => props.theme.text};
    opacity: 0.2;
  } */
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
