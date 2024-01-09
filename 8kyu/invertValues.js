//Question:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.



//Answer:

//no empty arrays, always be a num, return array in same order, 
//return array in opposite value

// [1,2,3,4] => [-1,-2,-3,-4]
// [1,-2,3,-4] => [-1,2,-3,4]
//[30,-10,50,70] => [-30,10,-50,-70]


function invert(array) {
    //loop through each element in the array and return opposite value
   return array.map((x)=> x * -1)
  }