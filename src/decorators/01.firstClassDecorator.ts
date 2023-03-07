// capital starting character is not necessary
// function Logger(constructor: Function) {
// 	console.log('Logging...');
// 	console.log(constructor);
// }

// decorator factory
// with this approach we can use arguments
function Logger(logString: string) {
	return function (constructor: Function) {
		console.log('Logging... ', logString);
		console.log(constructor);
	};
}

@Logger('Logging Person')
class Person {
	name = 'Ilya';

	constructor() {
		console.log('creating person object....');
	}
}

const person = new Person();
console.log(person);

export {};
