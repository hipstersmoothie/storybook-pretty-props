import React from "react";

import PrettyPropType from "./PrettyPropType";
import { PropRenderer, getPropTypes, ObjectOfType } from "./types";

/** Render an object type */
const ObjectOf = ({ propType }: PropRenderer<ObjectOfType>) => (
  <span>
    {"{[<key>]: "}
    <PrettyPropType propType={getPropTypes(propType)} />
    {"}"}
  </span>
);

export default ObjectOf;
