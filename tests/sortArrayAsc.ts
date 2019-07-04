import { expect } from 'chai';
import { sortArrayAsc } from '../src';

describe('SortArrayAsc', function () {
  it('shoud return [1, 2, 4, 5] from [5, 4, 3, 2, 1]', function () {
    const a = [5, 4, 3, 2, 1];
    const ret = sortArrayAsc(a);
    expect(ret).to.eql([1, 2, 3, 4, 5]);
  });

  it('shoud return [1, 2, 7, 1000] from [1000, 2, 7, 1]', function () {
    const a = [1000, 2, 7, 1];
    const ret = sortArrayAsc(a);
    expect(ret).to.eql([1, 2, 7, 1000]);
  })

  it('shoud return [1, 2, 7, 7, 8, 14, 1000] from [7, 8, 1000, 14, 2, 7, 1]', function () {
    const a = [7, 8, 1000, 14, 2, 7, 1];
    const ret = sortArrayAsc(a);
    expect(ret).to.eql([1, 2, 7, 7, 8, 14, 1000]);
  })
});
