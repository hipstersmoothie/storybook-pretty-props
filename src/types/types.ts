/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/no-explicit-any */
import React from "react";

export type Element<
  T extends keyof JSX.IntrinsicElements
> = React.PropsWithoutRef<JSX.IntrinsicElements[T]>;

export interface PropTypeBase {
  /** The name of the type */
  name: string;
  /** Whether the prop is required */
  required?: boolean;
}

export interface LiteralType extends PropTypeBase {
  name: "literal";
  value: string;
}

export interface EnumType extends PropTypeBase {
  name: "enum";
  value: LiteralType[];
}

export interface InstanceofType extends PropTypeBase {
  name: "instanceOf";
  value: string;
}

export interface SignatureType extends PropTypeBase {
  name: "signature";
  raw: string;
}

export interface ShapeType extends PropTypeBase {
  name: "shape";
  value: Record<string, PropTypeValue>;
}

export interface UnionType extends PropTypeBase {
  name: "union";
  value: PropTypeValue[];
}

export interface ArrayOfType extends PropTypeBase {
  name: "arrayOf";
  value: PropTypeValue;
}

export interface ObjectOfType extends PropTypeBase {
  name: "objectOf";
  value: PropTypeValue;
}

export type PropTypeValue =
  | PropTypeBase
  | LiteralType
  | EnumType
  | InstanceofType
  | SignatureType
  | ShapeType
  | UnionType
  | ArrayOfType
  | ObjectOfType;

export interface PropRenderer<T = PropTypeValue> {
  /** The prop type to render */
  propType: T;
}

/** Get the types for a PropType */
export function getPropTypes<
  T extends PropTypeBase & {
    /** The value for the type */
    value: any;
  }
>(propType: T): T["value"] {
  if (typeof propType === "string") {
    return propType;
  }

  if ("value" in propType) {
    return propType.value;
  }

  return propType.name;
}
