import styled from "styled-components";
import constants from "../constants/constants";

const MainPageBody = styled.div`
  max-width: 100vw;
  padding: 7rem 0 0 0;

  @media (max-width: ${constants.breakPoints.medium}) {
    /* padding: 110px 60px; */
  }
`


export default MainPageBody;

