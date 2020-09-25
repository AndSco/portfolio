import styled from "styled-components"
import constants from "../../constants/constants"

export default styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  width: 40vw;
  min-width: 40vw;
  line-height: 1.7rem;
  padding: ${props => props.padding || undefined};

  @media (max-width: ${constants.breakPoints.medium}) {
    min-width: 75vw;
    font-size: ${constants.fonts.textSizeSmallerDevices.size};
  }
`
