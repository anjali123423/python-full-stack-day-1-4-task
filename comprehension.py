marks = [45, 82, 91, 67, 38]

passed = [m for m in marks if m >= 40]

squared = [m * m for m in marks]

marks_by_student = {
    "Asha": 88,
    "Rahul": 74,
    "Neha": 91
}

passed_students = {
    name: mark
    for name, mark in marks_by_student.items()
    if mark >= 40
}

print(passed)
print(squared)
print(passed_students)
