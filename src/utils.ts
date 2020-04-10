import { PropTypeValue } from "./types/types";

/** Join a bunch of values in an or '|' sequence */
export const joinValues = (propTypes: PropTypeValue[]) =>
  propTypes.map(prop => ("value" in prop ? prop.value : prop.name)).join(" | ");
