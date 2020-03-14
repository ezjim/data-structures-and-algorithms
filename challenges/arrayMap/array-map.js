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

/*  return an object .This object will contain the index and the value at that index. To do this, we’ll utilize the i argument: */
// const arr = [1, 2, 3, 4];

// let newArr = arr.map((val, i) => {
//   return {
//     value: val,
//     index: i
//   };
// });
// console.log(newArr);

//////////////////////////////////////result
// newArr = [
//   { value: 1, index: 0 },
//   { value: 2, index: 1 },
//   { value: 3, index: 2 },
//   { value: 4, index: 3 }
// ];





const map = (someArr, fn) => {
  let newArr = [];

  for(let i = 0; i < someArr.length; i++) {
    newArr[i] = fn(someArr[i], i); 
  }
  return newArr;
};

function makeObj(onions, carrots, id) {
  return {
    value: onions,
    index: carrots,
    id: Math.random()
  };
}


console.log(map([0, 1, 2, 2, 5], makeObj));



/*  This will create an array of objects for us within our newArr: */





// let arr = [1, 2, 3, 4];