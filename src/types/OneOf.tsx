import React from "react";
import { getPropTypes, PropRenderer, EnumType } from "./types";
import { joinValues } from "../utils";

/** Render a oneOf type */
const OneOf = ({ propType }: PropRenderer<EnumType>) => {
  const propTypes = getPropTypes(propType);

  return (
    <span>
      {`oneOf ${Array.isArray(propTypes) ? joinValues(propTypes) : propTypes}`}
    </span>
  );
};

export default OneOf;
