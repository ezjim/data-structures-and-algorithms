function binarySearch(array, bSearch) {
  let top = array.length;
  let bottom = 0;
  
  for (let i = 0; i < array.length / 2; i++) {
    let middleOfArray = Math.floor((bottom + top) / 2);
    if (array[middleOfArray] === bSearch) return middleOfArray;
    if (array[middleOfArray] > bSearch) top = middleOfArray;
    if (array[middleOfArray] < bSearch) bottom = middleOfArray; 
  }
  return -1;
}

module.exports = {
  binarySearch
};