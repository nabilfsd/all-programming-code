#include <stdio.h>

int main() {
	int number, i, sum = 0;

	printf("Enter the last number of the series: ");
	scanf("%d", &number);

	for (i = 1; i <= number; i++) {
		sum += i;
	}

	printf("The summation of the series is: %d \n", sum);
}