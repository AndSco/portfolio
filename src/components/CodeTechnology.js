import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


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
  transition: all .3s ease;

  &:hover {
    transform: scale(1.08);
  }
`

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40vw;
  justify-content: center;
  align-items: center;
`

const TechIcon = ({ iconName, techName }) => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "1rem"}}>
      <Circle>
        <FontAwesomeIcon icon={iconName} size="2x" />
      </Circle>
      <h6>{techName}</h6>
    </div>
  )
}

const CodeTechnology = () => {
  return (
    <CircleContainer>
      {techs.map(tech => <TechIcon key={tech.icon} iconName={tech.icon} techName={tech.name} />)}
    </CircleContainer>
  )
}

export default CodeTechnology;