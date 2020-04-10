# storybook-pretty-props

Render prop types from react-docgen or react-docgen-typescript in a pretty way.
Useful for storybook addons that display prop types.

## Installation

```sh
npm i storybook-pretty-props
# with yarn
yarn add storybook-pretty-props
```

## Usage

Combine this with docgen output to render the prop type!

```js
import PrettyPropType from "storybook-pretty-props";

const Example = () => (
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
```
