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

function WithTemplate(template: string, hookId: string) {
	return function (_: Function) {
		const element = document.querySelector(hookId);
		const person = new Person();

		if (element) {
			element.innerHTML = template;
			element.innerHTML += person.name;
		}
	};
}

@Logger('Logging Person')
@WithTemplate('<p>Some paragraph to render</p>', '#render-app')
class Person {
	name = 'Ilya';

	constructor() {
		console.log('creating person object....');
	}
}

const person = new Person();
console.log(person);

export {};
