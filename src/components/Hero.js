import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Photo from "./Photo";


const Hero = () => {
  return (<div
    style={{
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      height: "80vh"
    }}
  >
    <AnimatedTitle />
    <Photo />
  </div>)
}

export default Hero;