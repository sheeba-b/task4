/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	if (typeof num !== 'number '
		isNaN(num)) {
		return -1;
	}
	///Your code Starts here 
	
	
	
	return num % 2 === 0;
	
	///Your code Ends here
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven('hello'));
console.log(isEven(NaN));