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
let firstName = "John";
let lastName = "Doe";
let age = 25;
// Method 1: Concatenation with +
let fullName1 = firstName + " " + lastName;
console.log("Concatenation:", fullName1);
// Method 2: Template Literals (ES6+) - Preferred
let fullName2 = `${firstName} ${lastName} is ${age} years old`;
console.log("Template Literal:", fullName2);
// String methods
let text = "JavaScript Programming";
console.log("Length:", text.length); // 22
console.log("Uppercase:", text.toUpperCase()); // JAVASCRIPT
PROGRAMMING
console.log("Lowercase:", text.toLowerCase()); // javascript
programming
console.log("Substring:", text.substring(0, 10)); // JavaScript
console.log("Includes 'Script':", text.includes("Script")); // true
console.log("Character at index 5:", text.charAt(5)); // c