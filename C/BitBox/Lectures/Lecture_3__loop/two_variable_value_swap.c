#include <stdio.h>

int main() {
	int number1, number2;

	printf("Enter Number 1: ");
	scanf("%d", &number1);

	printf("Enter Number 2: ");
	scanf("%d", &number2);

	printf("Numbers before swap: Number1=%d | Number2=%d \n", number1, number2);
	number1 = number1 + number2;
	number2 = number1 - number2;
	number1 = number1 - number2;
	printf("Numbers after swap: Number1=%d | Number2=%d \n", number1, number2);

	return 0;
}