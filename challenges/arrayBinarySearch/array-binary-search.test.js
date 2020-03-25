const {
  binarySearch
} = require('./array-binary-search.js');

describe('binary Search test', () => {
  it('takes an array and search value, returns index of said searched item', () => {    
    expect(binarySearch([1], 1)).toEqual(0);
    expect(binarySearch([2, 4, 6, 8, 9, 10], 4)).toEqual(1);
    expect(binarySearch([2, 4, 6, 8, 9, 10], 6)).toEqual(2);
    expect(binarySearch([2, 4, 6, 8, 9, 10], 8)).toEqual(3);
    expect(binarySearch([2, 4, 6, 8, 9, 10], 9)).toEqual(4);
    expect(binarySearch([999, 111, 123, 456, 6969, 666, 1337], 1)).toEqual(-1);
    expect(binarySearch([], 69)).toEqual(-1);
    expect(binarySearch(['i', 'am', 'seeing', 'if', 'strings', 'work', 'too'], 'am')).toEqual(1);
  });
});
  