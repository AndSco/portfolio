import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../constants/constants";


export const techs = [
  {
    name: "Javascript",
    icon: ["fab", "js"],
  },
  {
    name: "React",
    icon: ["fab", "react"],
  },
  {
    name: "NodeJS",
    icon: ["fab", "node"],
  },
  {
    name: "HTML5",
    icon: ["fab", "html5"],
  },
  {
    name: "CSS3",
    icon: ["fab", "css3-alt"],
  },
  {
    name: "React Native",
    icon: "mobile-alt",
  },
  {
    name: "MongoDB",
    icon: "database",
  },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  margin: 0 1rem 0.5rem 1rem;
  transition: all 0.3s ease;


  @media (max-width: ${constants.breakPoints.medium}) {
    width: 60px;
    height: 60px;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }
`

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40vw;
  justify-content: center;
  align-items: center;

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 75vw;
  };
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    margin-left: 0;
  }
`

const TechIcon = ({ iconName, techName }) => {
  return (
    <IconContainer>
      <Circle>
        <FontAwesomeIcon icon={iconName} size="2x" />
      </Circle>
      <h6>{techName}</h6>
    </IconContainer>
  )
}

const CodeTechnology = () => {
  return (
    <Wrapper>
    <h4 style={{marginBottom: 30}}>My current stack</h4>
    <CircleContainer>
      {techs.map(tech => (
        <TechIcon key={tech.icon} iconName={tech.icon} techName={tech.name} />
      ))}
    </CircleContainer>
    </Wrapper>
  )
}

export default CodeTechnology;