import styled from "styled-components";

const FlexJustified = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.styles};
`;

export default FlexJustified;