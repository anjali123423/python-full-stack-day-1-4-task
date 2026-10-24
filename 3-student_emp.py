class Student:
    def __init__(self, student_id, name, marks):
        self.student_id = student_id
        self.name = name
        self.__marks = marks

    def get_marks(self):
        return self.__marks

    def update_marks(self, marks):
        if 0 <= marks <= 100:
            self.__marks = marks
        else:
            raise ValueError("Marks must be between 0 and 100")

    def display(self):
        print(
            f"Student: {self.student_id} | "
            f"{self.name} | Marks: {self.__marks}"
        )


class Employee:
    def __init__(self, employee_id, name, salary):
        self.employee_id = employee_id
        self.name = name
        self.salary = salary

    def display(self):
        print(
            f"Employee: {self.employee_id} | "
            f"{self.name} | Salary: {self.salary}"
        )


s1 = Student(101, "Asha", 87)
e1 = Employee(501, "Rahul", 35000)

s1.display()
e1.display()

s1.update_marks(92)
print("Updated marks:", s1.get_marks())
