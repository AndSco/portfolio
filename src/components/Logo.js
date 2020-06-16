import styled from "styled-components";


const Logo = styled.h1`
  font-family: "Gugi";
  font-size: 1.5rem;
  padding: 14px;
  border: 1px solid ${props => props.theme.highlights};
  border-radius: 50%;
  color: ${props => props.theme.highlights};
  margin: 0;
  cursor: pointer;
  transition: all 0.5s linear;

  &:hover {
    transform: rotateX(360deg);
  }
`

export default Logo;