/* @flow */

describe('sum tests', () => {
  it('2 + 2 should equal 4', () => {
    expect(2 + 2).toEqual(4);
  });
});

const x = (a: string): string => a;

x(1);
x('1');
