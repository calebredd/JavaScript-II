// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }*/
// //My solution:
//   function firstItem(arr,cb){
//   return cb(arr[0]);
// };

// firstItem(items,function(first){
// console.log(first);});

/*
  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// //My Solution:
// function getLength(arr, cb) {
//  // getLength passes the length of the array into the callback.
//   return cb(arr.length);
// }
// getLength(items,function(length){
//       console.log(length);
// });

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr.pop())
// }
// last(items,function(final){
//   console.log(final);
// });

// //My Solution:
// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   return cb(x+y);
// }
// sumNums(2,3, function(sum){
//     console.log(sum);
// });

// //My Solution:
// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   return cb(x*y)
// }

// multiplyNums(2,3,function(times){
//   console.log(times);
// });

// //My Solution:
// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   return cb(list.filter(pops=>pops===item));
// }

// contains('Notebook', items, function(has){
//   console.log(has);
// }); 


/* STRETCH PROBLEM */
duplicates=[4,5,8,7,8,1,1,2,"was","was",2,3,3,4,4]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array.sort().filter((v,i)=>(array.indexOf(v)===i)));
}
//In above function: filter(v is for value of item in array, i is for index of item in array.)  .indexOf( Is used to find first instance of a value in an array or string. Can have second argument to represent starting place in array/string but defaults to the beginning.)

let dedupe=function(had){
  console.log(had);}

removeDuplicates(duplicates,dedupe);
