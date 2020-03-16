const { mapOne } = require('./array-map.js');

describe('test', () => {
  it('console.logs', () => {
    console.log(mapOne);
  });
});

describe('it will map through', () => {
  it('maps through an array', () => {
    expect([{}]).toEqual([{}]);
  });
});