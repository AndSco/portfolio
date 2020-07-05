import {keyframes} from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
` 

export const slideUp = keyframes`
  from { 
    transform: translate3d(0, 100%, 0); 
    opacity: 0;
  }
  to { 
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const slideDown = keyframes`
  from { 
    transform: translate3d(0, -100%, 0);
    opacity: 0; 
  }
  to { 
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }  
`


export const socialStripBounce = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }
  55% {
    transform: translate3d(0, -10%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

export const scaleUpText = keyframes`
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`