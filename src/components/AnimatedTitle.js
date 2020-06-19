import React from "react"
import "../styles/index.css"
import styled from "styled-components";
import {slideUp, slideDown} from "../constants/animations";


const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  overflow: hidden;
  width: 100%;
  color: ${props =>
    props.main ? props.theme.mainTitle : props.theme.secondaryTitle};
  display: flex;
  align-items: center;
  font-size: ${props => (props.main ? "5em" : "4.2em")};
  font-weight: ${props => (props.main ? 300 : 800)};
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  line-height: ${props => (props.main ? "70px" : "60px")};
  transition: all 0.5s linear;
  animation: ${props => props.main ? slideUp : slideDown} 1s ease;

  &:hover {
    transform: translate(10px);
  }
`

const AnimatedTitle = props => {

  return (
    <div>
      <Title main>Andrea</Title>
      <Title main>Scorcia</Title>
      <Title>Javascript</Title>
      <Title>Developer</Title>
    </div>
  )
}

export default AnimatedTitle;