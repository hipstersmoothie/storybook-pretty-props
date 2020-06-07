import React from 'react';
import { PropTypeValue } from "./types/types";
import { Element } from './types/types';

/** Join a bunch of values in an or '|' sequence */
export const joinValues = (propTypes: PropTypeValue[]) =>
  propTypes.map(prop => ("value" in prop ? prop.value : prop.name)).join(" | ");

  /** A button to show more or less of a shape type */
export const HighlightButton = (props: Element<"button">) => (
  <button
    type="button"
    {...props}
    style={{
      display: "inline-block",
      background: "none",
      border: "0 none",
      color: "gray",
      cursor: "pointer"
    }}
  />
);