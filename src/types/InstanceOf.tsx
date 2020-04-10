import React from "react";
import { PropRenderer, getPropTypes, InstanceofType } from "./types";

/** Render an instanceOf prop type. */
const InstanceOf = ({ propType }: PropRenderer<InstanceofType>) => (
  <span>{getPropTypes(propType)}</span>
);

export default InstanceOf;
