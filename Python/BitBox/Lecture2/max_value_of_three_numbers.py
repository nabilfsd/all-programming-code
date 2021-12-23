# find the max value among 3 numbers

number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))
number3 = int(input("Enter Number3: "))

if (number1 > number2 and number1 > number3):
    print("Number1:%d is Greater than Number2:%d & Number3:%d" %
          (number1, number2, number3))
elif(number2 > number1 and number2 > number3):
    print("Number2:%d is Greater than Number1:%d & Number3:%d" %
          (number2, number1, number3))
else:
    print("Number3:%d is Greater than Number1:%d & Number2:%d" %
          (number3, number1, number2))
