console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: JOEL L CHAULA NDEGE");
console.log("ID: 23311351010");
console.log("PROGRAM: [XX] - COMPUTER SCIENCE");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351010" + Date.now()).substring(0,
12));
console.log("=".repeat(55));
// var - function scoped (older way)
var oldWay = "I am declared with var";
console.log("var variable:", oldWay);
// let - block scoped (modern way)
let modernWay = "I am declared with let";
console.log("let variable:", modernWay);
// const - cannot be reassigned
const constantValue = "I cannot change";
console.log("const variable:", constantValue);
// Uncommenting below line would cause error:
// constantValue = "New value"; // TypeError: Assignment to constant
variable