// array is the collection of the same datatypes
// it starts with 0 index
var countries = ["Nepal", "USA", "Japan", "Russia"];


// New type of declaration of array
var states = new Array("pradesh 1", "Bagmati",
"pradesh 2");

console.log(states[1]);

// length of array

console.log(states.length);

// changing the value of array

states[0] = "nishant";

console.log(states);

// another array

var user = new Array("nishant",
"nishant@gmail.com",
3, 34, true);

// to delete the value of the array

 user.pop() // the last value of the array

 user.unshift("New value");// insert the value in first index of the array

 user.shift() //this remove the value of the first index of the array

 console.log(user.indexOf(3));// 3 kun thau ma xa vanerw tha hunxa
 console.log(user.indexOf("nishant"));

 // kunai navayeko kura khojyo vani output vaneko -1 hunxa

 var arr = (Array.from("Nishant"));// yelley yek yek ota letter nikalxa ani naya array ma halna madat garxa
 
 console.log(arr);




