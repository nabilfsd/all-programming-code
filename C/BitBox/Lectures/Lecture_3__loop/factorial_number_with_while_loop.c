#include <stdio.h>

int main()
{
	int number, factorial = 1;

	printf("Please enter a number: ");
	scanf("%d", &number);

	while(number > 0) {
		factorial = factorial * number;
		number--;
	}

	printf("The factorial of the given number is = %d\n", factorial);
	return 0;
}