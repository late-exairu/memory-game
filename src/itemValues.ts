import { range, shuffle } from "lodash-es";

export const itemValues = {
  firstItemValue: null as string | null,
  secondItemValue: null as string | null,
};

export const gridItemNumbers = shuffle([...range(8), ...range(8)]) as number[];
