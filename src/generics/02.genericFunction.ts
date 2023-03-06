function merge<T, U>(objA: T, objB: U) {
	return Object.assign({}, objA, objB);
}

const mergedObjs = merge({ name: 'Ilya' }, { age: 22 });
mergedObjs.age;

const mergedObjs2 = merge<{ name: string }, { age: number }>(
	{ name: 'Ilya' },
	{ age: 22 }
);
mergedObjs2.age;

// Type constraints

function mergeObjects<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign({}, objA, objB);
}

const mergedObjs3 = mergeObjects({ name: 'Ilya' }, { age: 22 });
mergedObjs3.name;

//

type Lengthy = {
	length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	const descriptionText = element?.length
		? `Got ${element.length} elements`
		: 'Got No Value...';

	return [element, descriptionText];
}
// console.log(countAndDescribe({ name: 'Ilya' })); // does not work because obj do not have length prop
countAndDescribe('some string');
countAndDescribe(['string1', 'string2']);
countAndDescribe('');

export {};
