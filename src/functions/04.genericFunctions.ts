function firstElement<Type>(arr: Type[]): Type | undefined {
	return arr[0];
}

firstElement([1, '12', null]); // TYPE will be number | string | null | undefined

const number = firstElement([1, 2, 3]);
const string = firstElement(['1', '2', '3']);

const twoGenericsInFunc = <T, K>(first: T, second: K): [T, K] => {
	return [first, second];
};

const numberAndStrin = twoGenericsInFunc(1, 'str'); // [number, string]

export {};
