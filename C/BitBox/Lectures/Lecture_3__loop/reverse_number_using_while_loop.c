#include <stdio.h>

int main() {
	int number, last_number, reverse_number = 0;

	printf("Enter a number: ");
	scanf("%d", &number);

	while(number) {
		last_number = number % 10;
		reverse_number = reverse_number * 10 + last_number;
		number = number / 10;
	}

	printf("The reverse number is: %d \n", reverse_number);
	return 0;
}