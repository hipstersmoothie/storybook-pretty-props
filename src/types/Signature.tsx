import React from "react";
import { PropRenderer, SignatureType } from "./types";

/** Render a signature prop type */
const Signature = ({ propType }: PropRenderer<SignatureType>) => (
  <span>{propType.raw}</span>
);

export default Signature;
