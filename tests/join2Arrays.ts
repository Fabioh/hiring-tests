import { expect } from 'chai';
import { join2Arrays } from '../src';

describe('join2Arrays', function () {
  it('shoud return [1, 3, 6, 16] from {[3, 5, 6, 1, 2, 16], [16, 6, 91, 1, 4, 3, 123, 1, 1]}', function () {
    const a = [3, 5, 6, 1, 2, 16];
    const b = [16, 6, 91, 1, 4, 3, 123, 1, 1];
    const ret = join2Arrays(a, b);
    expect(ret).to.eql([1, 3, 6, 16]);
  });

  it('shoud return [2] from {[1, 2], [5, 6, 2]}', function () {
    const a = [1, 2];
    const b = [5, 6, 2];
    const ret = join2Arrays(a, b);
    expect(ret).to.eql([2]);
  });

  it('shoud return [2] from {[1, 500, 2, 700, 80000], [2, 5, 80000]}', function () {
    const a = [1, 500, 2, 700, 80000];
    const b = [2, 5, 80000];
    const ret = join2Arrays(a, b);
    expect(ret).to.eql([2, 80000]);
  });

  it('shoud return [] from {[1, 500, 2, 700, 80000], []}', function () {
    const a = [1, 500, 2, 700, 80000];
    const b = [];
    const ret = join2Arrays(a, b);
    expect(ret).to.eql([]);
  });

  it('shoud return [] from {[1, 2], [5, 6]}', function () {
    const a = [1, 2];
    const b = [5, 6];
    const ret = join2Arrays(a, b);
    expect(ret).to.eql([]);
  });
});
