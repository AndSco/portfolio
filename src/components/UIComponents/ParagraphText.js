import styled from "styled-components";

export default styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  max-width: 40vw;
  line-height: 1.6rem;
  padding: ${props => props.padding || undefined};
  /* margin: ${props => props.margin || undefined} */
`
