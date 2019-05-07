// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Eraser'];








// function firstItem(array, getmethatfunction){
//   getmethatfunction(array[0])
// }

// firstItem(items, function(first){
//   console.log(first)
// });



// firstItem(items, function (kittycat){
// console.log(kittycat)
// });









  //Given this problem: 


  
  
    // firstItem passes the first item of the given array to the callback function.

  // Potential Solution:

  // Higher order function using "cb" as the call back
  const firstItem = (arr, cb) => {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, first => console.log(first));



const getLength = (arr, cb) => {
  cb(arr.length);
  // getLength passes the length of the array into the callback.
}

getLength(items, leng => console.log(leng));


const  lastItem = (arr, callback) => {
  // last passes the last item of the array into the callback.
  callback(arr[arr.length - 1]);
}

lastItem(items, last => console.log(last));

const  sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

sumNums(5,10, addTotal => console.log(addTotal));

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(5,10, multiplyTotal => console.log(multiplyTotal));

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  cb(list.includes(item));
}

contains('Pencil', items, result => console.log(result));

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {

  cb(items.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  }))
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

 

removeDuplicates(items, function(dupl){
  console.log(dupl);
})
