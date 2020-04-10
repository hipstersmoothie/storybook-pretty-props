import React from "react";

const styles = {
  hasProperty: {
    whiteSpace: "nowrap"
  } as const
};

interface PropertyLabelProps {
  /** The name of the property */
  property?: string;
  /** Whether the property is required */
  required?: boolean;
}

/** Render a label for a property */
const PropertyLabel = ({ property, required }: PropertyLabelProps) => {
  if (!property) {
    return null;
  }

  return (
    <span style={styles.hasProperty}>
      {property}
      {required ? "" : "?"}:{" "}
    </span>
  );
};

PropertyLabel.defaultProps = {
  property: "",
  required: false
};

export default PropertyLabel;
