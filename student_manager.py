class StudentRecord:
    def __init__(self, sid, name, marks):
        self.sid = sid
        self.name = name
        self.__marks = marks

    @property
    def marks(self):
        return self.__marks

    def update_marks(self, marks):
        if not 0 <= marks <= 100:
            raise ValueError("Marks must be from 0 to 100")
        self.__marks = marks

    def display(self):
        print(
            f"ID: {self.sid} | Name: {self.name} | "
            f"Marks: {self.marks}"
        )


class StudentManager:
    def __init__(self):
        self.students = {}

    def add_student(self):
        sid = input("Student ID: ").strip()

        if sid in self.students:
            print("ID already exists")
            return

        name = input("Name: ").strip()
        marks = float(input("Marks (0-100): "))

        if not name or not 0 <= marks <= 100:
            print("Invalid name or marks")
            return

        self.students[sid] = StudentRecord(sid, name, marks)
        print("Student added")

    def view_students(self):
        if not self.students:
            print("No records")

        for student in self.students.values():
            student.display()

    def search_student(self):
        key = input("Enter ID or name: ").strip().lower()

        matches = [
            s for s in self.students.values()
            if s.sid.lower() == key or s.name.lower() == key
        ]

        for student in matches:
            student.display()

        if not matches:
            print("Student not found")

    def run(self):
        while True:
            print("\n1 Add 2 View 3 Search 4 Exit")
            choice = input("Choose: ").strip()

            try:
                if choice == "1":
                    self.add_student()
                elif choice == "2":
                    self.view_students()
                elif choice == "3":
                    self.search_student()
                elif choice == "4":
                    print("Goodbye")
                    break
                else:
                    print("Choose 1, 2, 3, or 4")

            except ValueError as error:
                print("Invalid input:", error)


if __name__ == "__main__":
    StudentManager().run()
