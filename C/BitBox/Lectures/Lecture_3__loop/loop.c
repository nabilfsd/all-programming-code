// there are 3 kinds of loop in C programming
	// 1. while loop
	// 2. do while loop
	// 3. for loop

#include <stdio.h>
int main() {
	// while loop
	printf("--------------------\n");
	printf("%s\n", "While Loop");
	printf("--------------------\n");
	int i = 1;
	while(i <= 10){
		printf("%d.%s\n", i, "Amar Sonar Bangla");
		i++;
	}

	// do while loop
	printf("--------------------\n");
	printf("%s\n", "Do While Loop");
	printf("--------------------\n");
	i = 1;
	do {
		printf("%d.%s\n", i, "Amar Sonar Bangla");
		i++;	
	} while(i <= 10);

	// for loop
	printf("--------------------\n");
	printf("%s\n", "For Loop");
	printf("--------------------\n");
	for (i = 1; i <= 10; i++) {
		printf("%d.%s\n", i, "Amar Sonar Bangla");
	}

	return 0;
}
