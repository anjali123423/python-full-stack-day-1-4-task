
console.log("===== DAY 8: JAVASCRIPT FUNDAMENTALS =====");

// 1. Variables and Data Types
let name = "Anjali";
let age = 22;
let course = "MCA";
let student = true;

console.log("\n1. VARIABLES AND DATA TYPES");
console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);
console.log("Student:", student);

// 2. Arithmetic Operators
console.log("\n2. ARITHMETIC OPERATORS");

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// 3. Conditional Statements
console.log("\n3. CONDITIONAL STATEMENTS");

let marks = 85;

console.log("Marks:", marks);

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 50) {
    console.log("Grade: B");
} else {
    console.log("Grade: Fail");
}

// 4. For Loop
console.log("\n4. FOR LOOP");

for (let i = 1; i <= 10; i++) {
    console.log("Number:", i);
}

// 5. While Loop
console.log("\n5. WHILE LOOP");

let count = 1;

while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// 6. Functions
console.log("\n6. FUNCTIONS");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));
console.log("Multiplication:", multiply(20, 10));

// 7. Array Operations
console.log("\n7. ARRAY OPERATIONS");

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:", fruits);

fruits.push("Grapes");
console.log("After Adding:", fruits);

fruits.pop();
console.log("After Removing:", fruits);

console.log("First Fruit:", fruits[0]);
console.log("Total Fruits:", fruits.length);

// 8. Object Operations
console.log("\n8. OBJECT OPERATIONS");

let studentDetails = {
    name: "Anjali",
    age: 22,
    course: "MCA",
    city: "Pune"
};

console.log("Name:", studentDetails.name);
console.log("Age:", studentDetails.age);
console.log("Course:", studentDetails.course);
console.log("City:", studentDetails.city);

studentDetails.age = 23;
console.log("Updated Age:", studentDetails.age);

// 9. Find Largest Number
console.log("\n9. FIND LARGEST NUMBER");

function findLargest(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}

console.log("Numbers: 15, 40, 25");
console.log("Largest Number:", findLargest(15, 40, 25));

// 10. Factorial
console.log("\n10. FACTORIAL");

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 6:", factorial(6));

// 11. Even and Odd Numbers
console.log("\n11. EVEN AND ODD NUMBERS");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "is Even");
    } else {
        console.log(i, "is Odd");
    }
}

// 12. Multiplication Table
console.log("\n12. MULTIPLICATION TABLE OF 5");

for (let i = 1; i <= 10; i++) {
    console.log("5 x", i, "=", 5 * i);
}

// 13. Sum of Numbers
console.log("\n13. SUM OF NUMBERS FROM 1 TO 10");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Total Sum:", sum);

// 14. Reverse a String
console.log("\n14. REVERSE A STRING");

let word = "JavaScript";
let reversed = word.split("").reverse().join("");

console.log("Original Word:", word);
console.log("Reversed Word:", reversed);

console.log("\n===== ALL PROGRAMS COMPLETED =====");
