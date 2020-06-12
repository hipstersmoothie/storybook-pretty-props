import React from "react";
import { getPropTypes, PropRenderer, EnumType } from "./types";
import { joinValues, HighlightButton } from "../utils";

const MAX_LENGTH = 24;
const ONE_OF = "oneOf = ";

/** Render a oneOf type */
const OneOf = ({ propType }: PropRenderer<EnumType>) => {
  const [minimized, setMinimized] = React.useState(true);
  /** Toggle viewing the entire shape */
  const toggle = () => setMinimized(!minimized);
  const propTypes = getPropTypes(propType);
  const code = (
    (Array.isArray(propTypes) &&
      ((!minimized && `\n  ${joinValues(propTypes, " |\n  ")}`) ||
        joinValues(propTypes))) ||
    propTypes
  ).toString();

  const isMinimizable = code.length > MAX_LENGTH;
  const typeDef = minimized ? code.substr(0, MAX_LENGTH) : code;

  return (
    <span style={{ whiteSpace: minimized ? "normal" : "pre" }}>
      {isMinimizable ? (
        <HighlightButton style={{ fontSize: "0.9rem" }} onClick={toggle}>
          {ONE_OF}
        </HighlightButton>
      ) : (
        ONE_OF
      )}
      {typeDef};
      {isMinimizable && <HighlightButton onClick={toggle}>...</HighlightButton>}
    </span>
  );
};

export default OneOf;
