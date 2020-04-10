import React from "react";

import PrettyPropType from "./PrettyPropType";
import { PropRenderer, getPropTypes, ArrayOfType } from "./types";

/** Render an array of prop types */
const ArrayOf = ({ propType }: PropRenderer<ArrayOfType>) => (
  <span>
    [<PrettyPropType propType={getPropTypes(propType)} />]
  </span>
);

export default ArrayOf;
