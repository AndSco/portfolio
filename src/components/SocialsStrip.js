import React from "react";
import styled from "styled-components";
import ClickableIcon from "./UIComponents/ClickableIcon";
import constants from "../constants/constants";

const StyledStrip = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 2000;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 45vh;
    background-color: ${props => props.theme.text};
    opacity: 0.2;
    margin: 2rem auto 0 auto;
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    display: none;
  }
`

const StyledIconContainer = styled.div`
  margin: .5rem 0;
  padding: .2rem;

  &:hover {
    transform: translateY(-3px) scale(1.2);
  }
`;



const IconContainer = ({iconName, link}) => {
  return (
    <StyledIconContainer>
      <ClickableIcon icon={iconName} link={link} />
    </StyledIconContainer>
  )
}

const SocialStrip = () => {
  return (
    <StyledStrip>
      <IconContainer
        iconName={["fab", "linkedin"]}
        link="https://www.linkedin.com/in/andrea-scorcia-1144931a5/"
      />
      <IconContainer
        iconName={["fab", "github"]}
        link="https://github.com/AndSco?tab=repositories"
      />
      <IconContainer
        iconName="envelope"
        link="mailto:andrea.scorcia@gmail.com"
      />
    </StyledStrip>
  )
}

export default SocialStrip;