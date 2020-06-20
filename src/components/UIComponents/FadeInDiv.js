import styled from "styled-components";
import {fadeIn} from "../../constants/animations";

const FadeInDiv = styled.div`
  animation: ${fadeIn} 2500ms ease;
  ${props => props.styles};
`

export default FadeInDiv;