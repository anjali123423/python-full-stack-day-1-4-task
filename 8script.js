
console.log("Day 8 - JavaScript Fundamentals");

// 1. Variables and Data Types
let name = "Anjali";
let age = 22;
const isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

// 2. Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 3. Conditional Statement
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 4. Loop - Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5. Function - Basic Calculations
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Sum:", add(10, 20));
console.log("Product:", multiply(4, 5));

// 6. Array Operations
let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");
console.log("Fruits:", fruits);

fruits.pop();
console.log("After removing:", fruits);

console.log("First fruit:", fruits[0]);

// 7. Object and Object Properties
let student = {
    name: "Anjali",
    age: 22,
    course: "MCA"
};

console.log("Student name:", student.name);
console.log("Student age:", student.age);

// Update object property
student.age = 23;

console.log("Updated student:", student);

// 8. Problem Solving - Find Largest Number
function findLargest(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}

console.log("Largest number:", findLargest(10, 25, 15));

// 9. Problem Solving - Factorial
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log("Factorial:", factorial(5));
