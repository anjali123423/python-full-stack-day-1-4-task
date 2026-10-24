n = int(input("Enter a number: "))

sign = -1 if n < 0 else 1

digits = str(abs(n))[::-1]

print("Reversed:", sign * int(digits))
