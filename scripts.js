/************************** Exercise 1 ***********************/

// List five different examples where a web app uses a conditional statement.

//Form Validation
//Automated Emails
//User authentification
// survey feedback forms 
//Search Filters
//tracking subscriptions

/************************** Exercise 2 ***********************/

let cash = 18;
let lunch = "granola bar";
//++ let cash = 18;
// let cash  = 12;
//let cash = 4;
//let cash = 35;
//let lunch = "granola bar";

if (cash > 10) {
  lunch = "sandwich";
}

if (cash > 15) {
  lunch = "fancy sandwich";
}

if (cash > 20) {
  lunch = "lobster rolls";
}

// After we execute the above code, what will be the value of `lunch`? Think about it for a bit, write down a guess below, then log the value of `lunch` to the console to see if you were right.

console.log(lunch); // fancy sandwich

// Try changing the value of `cash` (you can directly change the value we assign to it above) to the following values. For EACH value, write down your guess as to what the value of `lunch` will be, then log the result to the console to double-check your answer. If writing `console.log` statements in this file, you only have to write one `console.log` statement for this question.

// - What will be the value of `lunch` when `cash` is 12?

console.log(lunch); //sandwich

// - What will be the value of `lunch` when `cash` is 4?

console.log(lunch); // granola

// - What will be the value of `lunch` when `cash` is 35?

console.log(lunch); // lobster rolls


// What happens if you rearrange the if statements? Move the first `if` statement (the one with the condition `cash < 10`) and its whole code block (that is, all three lines of the if statement) down below the three lines of the last `if` statement. Then CHANGE the value of `cash` to 18.
let cash = 18;
let lunch = "granola bar";

if (cash > 15) {
  lunch = "fancy sandwich";
}

if (cash > 20) {
  lunch = "lobster rolls";
}

if (cash > 10) {
  lunch = "sandwich";
}

// Write down here what you think the result will be. Then log the result to the console to check your assumption.

console.log(lunch); //sandwich;

/************************** Exercise 3 ***********************/

let userAge = 5;

if (userAge >= 18) {
  console.log("You can vote.");
} else {
  console.log("You can't vote.");
}

// Run the above code to see what it logs to the console.
// You can't Vote

// What will it log if we change the age to 25? Write your guess here, and then make that change and see if you were right.
// You can vote

// People whose age is 18 can vote in the U.S, but currently, if `userAge` is 18, we'll log that the user cannot vote. Fix the condition of the `if` statement so that it works correctly.

if (userAge > 18) {
  console.log("You can vote.");
} else {
  console.log("You cant vote");
}

/************************** Exercise 4 ***********************/

// let userResponse = prompt("Give me a number, any number, and I will tell you whether it is positive or negative.");
let userResponse = prompt(
  "Give me a number, any number, and I will tell you whether it is positive or negative."
);

// Remove the `//` from the front of the line above. (Feel free to add them back when you're done with this section, so you don't get prompts for a problem you're not working on.)

// Create a conditional statement that will check to see if the number is positive or negative. Alert (or log to the console) a message telling the user which it is.
//let userResponse = prompt( "Give me a number, any number, and I will tell you whether it is positive or negative.");
// 5
let number = parseFloat(userResponse);

if (isNaN(number)) {
  alert("That's not a valid number.");
} else if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

console.log(); // This number is positive

/************************** Exercise 5 ***********************/

const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;
const salesTotal = retailPrice * quantity;
const profit = salesTotal - wholesalePrice * quantity;

// Write a conditional statement for your online store. If the profit is greater than $400, log to the console, 'You are good for today!'. If the profit is less than or equal to $400, log the string, 'You need to keep working!'
let profit = 450

if (profit > 400) {
  console.log("You are good for today!");
} else if (profit <= 400){
  console.log("You need to keep working!");
}

console.log(profit); //You are good for today
/*********************** BONUS EXERCISES *********************/

/************************** Exercise 6 ***********************/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Call the above function so that it evaluates to "Even", and save that value in a variable. Log the variable's value to the console.

// Call the above function so that it evaluates to "Odd", and save that value in a variable. Log the variable's value to the console.

/************************** Exercise 7 ***********************/

// Create a function that takes in one argument, a user's password. Check to see if the password is longer than 12 characters. If it is, alert 'Welcome', if it is not, alert 'You need to enter a longer password.'

/************************** Exercise 8 ***********************/

// Create a function that takes in two arguments, a user's password and what the user wrote to confirm their password. Check to see if the user's passwords are the exact same string. If they are, alert 'Welcome', if they are not, alert 'Your passwords do not match.'
