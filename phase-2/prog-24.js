console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: JOEL L CHAULA NDEGE");
console.log("ID: 23311351010");
console.log("PROGRAM: [XX] - Function parameters and default values");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351010" + Date.now()).substring(0,
12));
console.log("=".repeat(55));
// Program 24: Function parameters and default values
// Default parameters (ES6+)
function greet(name = "Guest", greeting = "Hello") {
 console.log(`${greeting}, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
greet("Bob", "Hi"); // Hi, Bob!
greet(undefined, "Welcome"); // Welcome, Guest!
// Rest parameters (...)
function sum(...numbers) {
 let total = 0;
 for (let num of numbers) {
 total += num;
 }
 return total;
}
console.log("Sum of 1,2,3:", sum(1, 2, 3));
console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// Arguments object (older way)
function oldStyleSum() {
 let total = 0;
 for (let i = 0; i < arguments.length; i++) {
 total += arguments[i];
 }
 return total;
}
console.log("Old style sum:", oldStyleSum(1, 2, 3, 4));