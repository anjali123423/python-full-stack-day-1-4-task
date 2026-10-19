n = int(input("Enter a non-negative number: "))

if n < 0:
    print("Factorial is not defined for negative numbers")
else:
    result = 1

    for i in range(1, n + 1):
        result *= i

    print("Factorial:", result)
