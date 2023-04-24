// scripts.js
const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  }

  // Initialising an object "data" with a single property "lists" which is an array containing three sub-arrays.
  const first = data.lists[0][1];   //Fixed errors and used the square brackets 
  const second = data.lists[1][1];  //Fixed errors and used the square brackets
  const third = data.lists[2][1];   //Fixed errors and used the square brackets

  const result = []; //this is an empty array

  /*This function contains three `if` statements to determine which array contains the largest value.
  It compares the last element of each array (`first`, `second`, and `third`) to determine which one is the largest.*/

  const extractBiggest = () => {
    //If `first` has the largest value, the function removes the last element from the `first` array and returns it.
    if (first[first.length - 1] >= second[second.length - 1] && first[first.length -1] >= third[third.length - 1]) {
      return first.pop();
      }
      //If `second` has the largest value, it removes the last element from `second` array and returns it.
    if (second[second.length - 1] >= third[third.length - 1]) {
      return second.pop();
      }
      // If `third` has the largest value,it removes the last element from `third` array and returns it.
      return third.pop();
  }

  // Only edit above
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  console.log(result)