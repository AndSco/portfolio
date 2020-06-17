import React from "react";
import styled from "styled-components";
import ClickableIcon from "./UIComponents/ClickableIcon";

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
    opacity: .2;
    margin: 2rem auto 0 auto;
  }
`

const StyledIconContainer = styled.div`
  margin: .5rem 0;

  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`;



const IconContainer = ({iconName}) => {
  return (
    <StyledIconContainer>
      <ClickableIcon icon={iconName} />
    </StyledIconContainer>
  )
}

const SocialStrip = () => {
  return (
    <StyledStrip>
      <IconContainer iconName={["fab", "linkedin"]} />
      <IconContainer iconName={["fab", "github"]} />
      <IconContainer iconName="envelope" />
    </StyledStrip>
  )
}

export default SocialStrip;