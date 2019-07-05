import { sortArrayAsc } from './sortArrayAsc'

export const join2Arrays = function (arr1: number[], arr2: number[]): number[] {
  return sortArrayAsc(arr1.filter((e, i, array) => (arr2.indexOf(e) !== -1)));
};
