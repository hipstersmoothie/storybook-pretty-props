import React from "react";
import { PropRenderer, getPropTypes, LiteralType } from "./types";

/** Render a literal string value */
const Literal = ({ propType }: PropRenderer<LiteralType>) => (
  <span>{getPropTypes(propType)}</span>
);

export default Literal;
