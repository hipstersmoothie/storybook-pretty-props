import React from "react";
import prettier from "prettier/standalone";
import parserTypescript from "prettier/parser-typescript";
import { getPropTypes, PropRenderer, EnumType } from "./types";
import { joinValues, HighlightButton } from "../utils";

const MAX_LENGTH = 36;

/** Render a oneOf type */
const OneOf = ({ propType }: PropRenderer<EnumType>) => {
  const [minimized, setMinimized] = React.useState(true);
  const didFormat = React.useRef(true);
  /** Toggle viewing the entire shape */
  const toggle = () => setMinimized(!minimized);
  const propTypes = getPropTypes(propType);
  let code = `oneOf = ${
    Array.isArray(propTypes) ? joinValues(propTypes) : propTypes
  };`;

  try {
    code = prettier.format(code, {
      parser: "typescript",
      plugins: [parserTypescript],
    });
    didFormat.current = true;
  } catch (e) {
    didFormat.current = false;
  }

  const isMinimizable = code.length > MAX_LENGTH;
  const typeDef = minimized ? code.substr(0, MAX_LENGTH) : code;
  const isMultiline = !minimized && didFormat.current;

  return (
    <span style={{ whiteSpace: isMultiline ? "pre" : "normal" }}>
      {typeDef}
      {isMinimizable && (
        <HighlightButton onClick={toggle}>...</HighlightButton>
      )}
    </span>
  );
};

export default OneOf;
