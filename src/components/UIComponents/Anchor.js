import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Anchor = ({ to, children }) => {
  return <AnchorLink to={`/#${to}`}>{children}</AnchorLink>
}

export default Anchor;
