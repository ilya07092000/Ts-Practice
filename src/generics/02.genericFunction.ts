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

export {};
