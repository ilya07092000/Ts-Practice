// The keyof operator takes an object type and produces a string or numeric literal union of its keys.

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return `Value ${obj[key]}`;
}

extractAndConvert({ name: 'Ilya' }, 'name');

export {};
