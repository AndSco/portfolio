import React from "react"
import styled from "styled-components"

const StyledLogo = styled.h1`
  font-size: 1.5rem;
  padding: 14px;
  border: 1px solid ${props => props.theme.highlights};
  border-radius: 50%;
  color: ${props => props.theme.highlights};
  margin: 0;
  cursor: pointer;
  transition: color 0.5s linear, transform 0.9s ease;

  &:hover {
    transform: rotateX(360deg);
  }
`

const Logo = () => {
  return (
    <StyledLogo
      id="logo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      AS
    </StyledLogo>
  )
}

export default Logo
