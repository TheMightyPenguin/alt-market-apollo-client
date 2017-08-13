/* @flow */

describe('sum tests', () => {
  it('2 + 2 should equal 4', () => {
    expect(2 + 2).toEqual(4);
  });
});

const x = (a: string): string => a;

console.log(x(1));
console.log(x('1'));
