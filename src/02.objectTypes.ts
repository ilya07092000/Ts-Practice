// object - built in type in ts
const person: object = {
	name: 'Ilya',
	age: 22,
};
console.log('person', person);

const person1: {
	name: string;
	age: number;
} = {
	name: 'Ilya',
	age: 22,
};
console.log(person1.age);

// NESTED OBJECTS
type productType = {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
};

const productInstance: productType = {
	id: '1',
	price: 123,
	tags: ['tag1', 'tag2'],
	details: {
		title: 'Title',
		description: 'description',
	},
};
