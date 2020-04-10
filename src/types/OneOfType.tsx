import React from "react";

import PrettyPropType from "./PrettyPropType";
import { getPropTypes, PropRenderer, UnionType } from "./types";

/** Render a oneOf type */
const OneOfType = ({ propType }: PropRenderer<UnionType>) => {
  const propTypes = getPropTypes(propType);

  return (
    <span>
      {propTypes.reduce((acc, value, i) => {
        const key = `${value.name}${"value" in value ? `-${value.value}` : ""}`;

        return [
          ...acc,
          <PrettyPropType key={key} propType={value} />,
          i < propTypes.length - 1 ? (
            <span key={`${key}-separator`}> | </span>
          ) : null
        ];
      }, [] as React.ReactNode[])}
    </span>
  );
};

export default OneOfType;
