//! find the maximum number among the given values.
//! let a =120;
//! let b=30;
//!let c=10;

//!--->if else conditon
// let a = parseFloat(prompt("Enter the value of a:"));
// let b = parseFloat(prompt("Enter the value of b:"));
// let c = parseFloat(prompt("Enter the value of c:"));

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     console.log("Invalid number");
// } else if (a === b && b === c) {
//     console.log("All the values are equal");
// } else if (a > b && a > c) {
//     console.log("a is the greater number");
// } else if (b > a && b > c) {
//     console.log("b is the greater number");
// } else if (c > a && c > b) {
//     console.log("c is the greater number");
// } else {
//     console.log("There is no maximum value.");
// }

//!--->switch case
// let a = parseFloat(prompt("Enter the value of a:"));
// let b = parseFloat(prompt("Enter the value of b:"));
// let c = parseFloat(prompt("Enter the value of c:"));

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     alert("Invalid numbers");
// } else {
//     // Using switch-case for different conditions
//     switch (true) {
//         case (a === b && b === c):
//             alert("All the values are equal");
//             break;
//         case (a > b && a > c):
//             alert("a is the greater number");
//             break;
//         case (b > a && b > c):
//             alert("b is the greater number");
//             break;
//         case (c > a && c > b):
//             alert("c is the greater number");
//             break;
//         default:
//             alert("There is no maximum value");
//             break;
//     }
// }