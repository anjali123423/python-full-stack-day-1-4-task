class Person:
    def __init__(self, name):
        self.name = name

    def role(self):
        return "Person"


class StudentPerson(Person):
    def __init__(self, name, course):
        super().__init__(name)
        self.course = course

    def role(self):
        return "Student"


class EmployeePerson(Person):
    def __init__(self, name, department):
        super().__init__(name)
        self.department = department

    def role(self):
        return "Employee"


people = [
    StudentPerson("Asha", "Python"),
    EmployeePerson("Rahul", "IT")
]

for person in people:
    print(person.name, person.role())
