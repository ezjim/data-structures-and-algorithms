// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values


///////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5];

const mapOne = numbers.map(item => item + 1);
// console.log(mapOne);

module.exports = { mapOne };
///////////////////////////////////////////////////////////////////////////
///!!!!!!!!!!! travis yml   and eslint from source code    

//this is the original code i started with, i thought i had to just use .map,  then i found out that i had to make a function called 'map' without using the good stuff.  so Will and I sat down and with a little help figured out what we were missing to turn an [] into an [{}].
// const arr = [1, 2, 3, 4];
// let newArr = arr.map((val, i) => {
//   return {
//     value: val,
//     index: i
//   };
// });
// console.log(newArr);

                              /* expected result */
// newArr = [
//   { value: 1, index: 0 },
//   { value: 2, index: 1 },
//   { value: 3, index: 2 },
//   { value: 4, index: 3 }
// ];
const map = (someArr, fn) => {
  let newArr = [];

  for (let i = 0; i < someArr.length; i++) {
    newArr[i] = fn(someArr[i], i);
  }
  return newArr;
};

//this is just a recipie
function makeObj(val, i) {
  return {
    onions: val,
    carrots: i
  };
}
console.log(map([1, 2, 3, 4, 5], makeObj));
