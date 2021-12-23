# find the number is positive or negative or zero.

number = int(input("Enter a number: "))

if (number > 0):
    print("%d is Positive Number." % (number))
elif (number < 0):
    print("%d is Negative Number." % (number))
else:
    print("Number is Zero.")
