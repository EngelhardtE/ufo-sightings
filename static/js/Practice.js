// Create a variable
var fullName = "John Doe";
let fullName = "John Doe";
const fullName = "John Doe";

//concatenation in js
console.log(fullName + " is very smart!")

//f string in js
var fullName = 'John Doe'
var adjective = 'smart'
console.log(`${fullName} + is a very + ${adjective} person!`)

// Get variable type
console.log(typeof(fullName))


//TRUTHY note on bools: 
//Blank string is false, string of anything is true, 0 is false, any other number is true




// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
}
addition(4, 12);

// returns a string
function printHello() {
    return("Hello there!");
}
printHello()

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
doubleAddition(4, 12)

clear()

// Arrow functions have less cluttered syntax

printHello = () => "Hello there!";

doubleAddition = (c, d) => addition(c, d) * 2;
doubleAddition(5, 80)


// A basic for loop in js

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 listLoop(friends);


 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 
 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }

 
 for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }