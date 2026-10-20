def read_marks():
    while True:
        try:
            marks = float(input("Enter marks (0-100): "))

            if not 0 <= marks <= 100:
                raise ValueError("Marks must be between 0 and 100")

            return marks

        except ValueError as error:
            print("Please enter valid marks:", error)


marks = read_marks()
print("Accepted marks:", marks)
