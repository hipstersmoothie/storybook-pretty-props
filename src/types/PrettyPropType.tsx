import React from "react";

import Shape from "./Shape";
import OneOfType from "./OneOfType";
import ArrayOf from "./ArrayOf";
import ObjectOf from "./ObjectOf";
import OneOf from "./OneOf";
import InstanceOf from "./InstanceOf";
import Signature from "./Signature";
import Literal from "./Literal";

import { PropTypeValue } from "./types";

// PropType -> Component map - these are a bit more complex prop types to display
const propTypeComponentMap = new Map<string, React.ComponentType<any>>([
  ["literal", Literal],
  ["enum", OneOf],
  ["instanceOf", InstanceOf],
  ["signature", Signature],
  ["shape", Shape],
  ["union", OneOfType],
  ["arrayOf", ArrayOf],
  ["objectOf", ObjectOf],
]);

export interface PrettyPropTypeProps {
  /** The prop to render */
  propType?: PropTypeValue;
  /** how deep to go when rendering object */
  depth?: number;
}

/** Pretty print a complex prop type */
const PrettyPropType = ({ propType, depth }: PrettyPropTypeProps) => {
  if (!propType) {
    return <span>unknown</span>;
  }

  const { name } = propType || {};
  const Component = propTypeComponentMap.get(name);

  if (Component) {
    return <Component propType={propType} depth={depth} />;
  }

  // Otherwise, propType does not have a dedicated component, display prop-type name by default
  return <span>{name}</span>;
};

PrettyPropType.defaultProps = {
  depth: 1,
};

export default PrettyPropType;
