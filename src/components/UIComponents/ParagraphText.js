import styled from "styled-components";
import constants from "../../constants/constants";

export default styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  max-width: 40vw;
  line-height: 1.8rem;
  padding: ${props => props.padding || undefined};

  @media (max-width: ${constants.breakPoints.medium}) {
    max-width: 75vw;
  }
  ;
`
