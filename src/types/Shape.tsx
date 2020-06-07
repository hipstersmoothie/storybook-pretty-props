import React from "react";

import PrettyPropType from "./PrettyPropType";
import PropertyLabel from "./PropertyLabel";

import { getPropTypes, ShapeType, PropRenderer } from "./types";
import { HighlightButton } from '../utils';

const MARGIN_SIZE = 15;

interface ShapeProps extends PropRenderer<ShapeType> {
  /** How far into the shape should we render */
  depth: number;
}

/** Render and interface/shape prop type */
const Shape = ({ propType, depth }: ShapeProps) => {
  const [minimized, setMinimized] = React.useState(true);
  const propTypes = getPropTypes(propType);

  /** Toggle viewing the entire shape */
  const toggle = () => setMinimized(!minimized);

  return (
    <span>
      <HighlightButton onClick={toggle}>{"{"}</HighlightButton>
      <HighlightButton onClick={toggle}>...</HighlightButton>

      {!minimized &&
        Object.keys(propTypes).map(childProperty => (
          <div key={childProperty} style={{ marginLeft: depth * MARGIN_SIZE }}>
            <PropertyLabel
              property={childProperty}
              required={propTypes[childProperty].required}
            />
            <PrettyPropType
              depth={depth + 1}
              propType={propTypes[childProperty]}
            />
            ,
          </div>
        ))}

      <HighlightButton onClick={toggle}>{"}"}</HighlightButton>
    </span>
  );
};

Shape.defaultProps = {
  propType: null
};

export default Shape;
