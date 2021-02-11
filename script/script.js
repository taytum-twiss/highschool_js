//'use strict';

// Hello World for proof of life
//console.log('Hello World');

// What are variables?
// Somethiing you can assign a value to...

//var myVar = 5; //the process of putting something in a variable is called 'assignment'

//console.log('myVar is:', myVar)

// Math

///console.log('myVar plus 3:', myVar +3);

// What about strings? How do we handle strings?

//var myString = 'JavaScript is very cool.';
//var myAddOn = 'This is the best language in the world';

//adding strings is called 'concatenation'. We concatenate strings togehter. Short version 'concat'



//non-types language 
//console.log(myString + ' ' + myAddOn + '' + myVar + 3);

//5+3 = 8
//'5' + '3' =  '53'



// JavaScript Functions

// declare the function
// name the function
// define it - ie what does it do?
// we have to call it to do something...

function add(a,b) { //passengers are called parameters

//var vs. let - scoping
let sum = a+b;
return sum;

}

let a = 1;
let b = 5;

//console.log(a+b)

console.log(add(3,4)); //7
console.log(add(10,12)); //22
console.log(add(a,b)); //6

//console.log('hello')