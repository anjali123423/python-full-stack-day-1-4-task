
let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Amit", marks: 65 }
];

// DOM manipulation
const studentList = document.getElementById("studentList");
const statistics = document.getElementById("statistics");
const studentForm = document.getElementById("studentForm");
const searchInput = document.getElementById("search");

// Arrow function and array map method
const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 75) return "A";
    if (marks >= 60) return "B";
    return "C";
};

// Display students
function displayStudents(data) {
    studentList.innerHTML = "";

    data.map(({ name, marks }) => {
        const grade = getGrade(marks);

        const studentDiv = document.createElement("div");
        studentDiv.className = "student";

        studentDiv.innerHTML = `
            <strong>${name}</strong>
            <p>Marks: ${marks}</p>
            <p>Grade: ${grade}</p>
        `;

        studentList.appendChild(studentDiv);
    });

    updateStatistics(data);
}

// Array reduce method
function updateStatistics(data) {
    const total = data.reduce(
        (sum, student) => sum + student.marks, 0
    );

    const average = data.length ? total / data.length : 0;

    const passed = data.filter(
        student => student.marks >= 40
    ).length;

    statistics.innerHTML = `
        Total Students: ${data.length}<br>
        Average Marks: ${average.toFixed(2)}<br>
        Passed Students: ${passed}
    `;
}

// Event handling: form submission
studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const marks = Number(document.getElementById("studentMarks").value);

    if (marks < 0 || marks > 100 || name === "") {
        alert("Enter valid student details");
        return;
    }

    // Spread operator
    students = [...students, { name, marks }];

    studentForm.reset();
    displayStudents(students);
});

// Event handling: search
searchInput.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();

    // Array filter method
    const filteredStudents = students.filter(
        student => student.name.toLowerCase().includes(searchText)
    );

    displayStudents(filteredStudents);
});

// Promise and async/await
const loadMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Student data loaded successfully!");
        }, 1000);
    });
};

async function showMessage() {
    const message = await loadMessage();
    console.log(message);
}

// Fetch API basics
async function fetchExample() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log("Sample API data:", data);
    } catch (error) {
        console.log("API error:", error);
    }
}

// Rest operator
const showStudentNames = (...names) => {
    console.log("Student names:", names);
};

showStudentNames("Rahul", "Priya", "Amit");

// Initial display
displayStudents(students);
showMessage();
fetchExample();
