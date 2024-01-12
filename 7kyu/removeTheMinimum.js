//Question:

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//Answer:

//get rid of the lowest num, if multiple elements have the same number remove the one witht the lowest index,
//if its an empty array return empty
//return new array

//[1,2,3,4,5] => [2,3,4,5]
//[6,3,7,8,2] => [6,3,7,8]
//[1,6,3,1] => [6,3,1]


function removeSmallest(numbers) {
    //find the smallest num
    let smallestNum = Math.min(...numbers)
    console.log(smallestNum)
    // loop through array and remove smallest value
    return numbers.filter((x,i) => i !== numbers.indexOf(smallestNum))
    //conditional
   
  }