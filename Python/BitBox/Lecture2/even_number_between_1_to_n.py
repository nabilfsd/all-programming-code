# find the even number between 1 no N.

number = int(input("Enter the value of N: "))

for i in range(1, number + 1):
    if (i % 2 == 0):
        print("%d is Even Number." % (i))
