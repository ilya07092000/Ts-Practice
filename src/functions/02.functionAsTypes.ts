function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(data: string) {
	console.log(data);
}

let combineValues: Function;
combineValues = add;
combineValues = printResult;

console.log('combineValues', combineValues(10, 15));

// ------ HOW TO SAVE FUNCTION AS TYPE

let functionType: (param1: number, param2: number) => number;

functionType = add;
// functionType = printResult; // does not work beacause of not match the type

export {};
