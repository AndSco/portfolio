import React, {useRef, useState, useEffect, useCallback} from "react"
import "../styles/index.css"
import styled, { keyframes } from "styled-components";
import constants from "../constants/constants";

import { useTransition, animated } from "react-spring"


const Title = styled.div`
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  overflow: hidden;
  width: 100%;
  color: ${props =>
    props.main ? constants.colors.pink : constants.colors.green};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  line-height: 80px;
`

const AnimatedTitle = props => {
  const ref = useRef([])
  const [items, setItems] = useState([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { color: "#28d79f" },
      //{ transform: "perspective(600px) rotateX(0deg)" },
    ],
    update: { color: "#FF3072" },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    setItems([])
    // ref.current.push(
    //   setTimeout(
    //     () => setItems(["Yet another", "Portfolio website"]),
    //     1000
    //   )
    // )
    ref.current.push(setTimeout(() => setItems(["Andrea", "Scorcia"]), 200))
    ref.current.push(
      setTimeout(
        () => setItems(["Andrea", "Scorcia", "Javascript", "Developer"]),
        200
      )
    )
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
      <Title main>Andrea</Title>
      <Title main>Scorcia</Title>
      <Title>Javascript</Title>
      <Title>Developer</Title>
      {/* {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item"
          key={key}
          style={rest}
          // onClick={reset}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))} */}
    </div>
  )
}

export default AnimatedTitle;