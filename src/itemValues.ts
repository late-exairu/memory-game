import { range, shuffle } from "lodash-es";

export const itemValues = {
  firstItemValue: null as number | null,
  secondItemValue: null as number | null,
};

export const gridItemNumbers = shuffle([...range(8), ...range(8)]) as number[];
