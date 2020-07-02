import styled from "styled-components";
import constants from "../../constants/constants";

const SkewedContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${props => props.theme.aboutStrip}; 
  /* background: ${props =>
    props.scope === "about"
      ? props.theme.aboutStrip
      : props.theme.contactsStrip};  */
  margin-bottom: 100px 0 2rem 0;
  padding: 1.6rem ${constants.padding.left} 3rem ${constants.padding.right};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 130;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    /* transform-origin: ${props =>
      props.scope === "about" ? "bottom right" : "top left"} ; */
    transform: skewY(5deg);
    /* transform: ${props =>
      props.scope === "about" ? "skewY(5deg)" : "skewY(-5deg)"} ;; */
    background: inherit;
    z-index: -1;
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    height: auto;
    padding: ${constants.padding.paddingResponsive};
  }
`

export default SkewedContainer;