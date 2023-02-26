let userInput: unknown;
let stringType: string = 'test';

userInput = 'some string';
// stringType = userInput; // does not work, event if userInout is also string type

if (typeof userInput === 'string') {
	stringType = userInput; // WORKS! // NEED TO CHECK TYPEOF AND THEN ASSIGN THE VALUE
}
