import React from "react";
import PrettyPropType from ".";

export default {
  title: "PrettyPropType"
};

export const Name = () => <PrettyPropType propType={{ name: "a | b | c" }} />;

export const Literal = () => (
  <PrettyPropType propType={{ name: "literal", value: "abc" }} />
);

export const Enum = () => (
  <PrettyPropType
    propType={{
      name: "enum",
      value: [
        { name: "literal", value: "a" },
        { name: "literal", value: "b" },
        { name: "literal", value: "c" }
      ]
    }}
  />
);

export const InstanceOf = () => (
  <PrettyPropType
    propType={{
      name: "instanceOf",
      value: "SomeType"
    }}
  />
);

export const Signature = () => (
  <PrettyPropType
    propType={{
      name: "signature",
      raw: "{ foo: string }"
    }}
  />
);

export const Shape = () => (
  <PrettyPropType
    propType={{
      name: "shape",
      value: {
        foo: {
          name: "literal",
          value: "bar"
        },
        off: {
          name: "literal",
          required: true,
          value: "number"
        }
      }
    }}
  />
);

export const Union = () => (
  <PrettyPropType
    propType={{
      name: "union",
      value: [
        {
          name: "number"
        },
        {
          name: "string"
        }
      ]
    }}
  />
);

export const ObjectOf = () => (
  <PrettyPropType
    propType={{
      name: "objectOf",
      value: {
        name: "number"
      }
    }}
  />
);
