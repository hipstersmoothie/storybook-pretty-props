import React from "react";
import prettier from "prettier/standalone";
import parserTypescript from "prettier/parser-typescript";
import { getPropTypes, PropRenderer, EnumType } from "./types";
import { joinValues, HighlightButton } from "../utils";

const MAX_LENGTH = 36;

/** Render a oneOf type */
const OneOf = ({ propType }: PropRenderer<EnumType>) => {
  const [minimized, setMinimized] = React.useState(true);
  /** Toggle viewing the entire shape */
  const toggle = () => setMinimized(!minimized);
  const propTypes = getPropTypes(propType);
  const code = `oneOf = ${
    Array.isArray(propTypes) ? joinValues(propTypes) : propTypes
  };`;

  const formatted = prettier.format(code, {
    parser: "typescript",
    plugins: [parserTypescript],
  });

  const isMinimizable = code.length > MAX_LENGTH;
  const typeDef = minimized ? formatted.substr(0, MAX_LENGTH) : formatted;

  return (
    <span style={{ whiteSpace: "pre" }}>
      {typeDef}
      {isMinimizable && (
        <HighlightButton onClick={toggle}>...</HighlightButton>
      )}
    </span>
  );
};

export default OneOf;
