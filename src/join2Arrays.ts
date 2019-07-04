import { sortArrayAsc } from './sortArrayAsc'

export const join2Arrays = function (arr1: number[], arr2: number[]): number[] {
  let ret: number[] = [];
  const arr1Ordered = sortArrayAsc(arr1);
  const arr2Ordered = sortArrayAsc(arr2);

  if (arr1Ordered.length > arr2Ordered.length) {
    arr2Ordered.forEach(e => {
      if (arr1Ordered.indexOf(e) !== -1 && !(ret.indexOf(e) > -1))
        ret.push(e);
    });
  } else {
    arr1Ordered.forEach(e => {
      if (arr2Ordered.indexOf(e) !== -1 && !(ret.indexOf(e) > -1))
        ret.push(e);
    });
  }

  return ret;
};
