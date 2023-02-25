function testFunc(num: number) {
	return num;
}

function functWithCb(n1: number, n2: number, cb: (p1: number) => number): void {
	const result = n1 + n2;
	console.log('CB: ', cb(result));
}

functWithCb(1, 2, testFunc);

// cb: (p1: number) => number // "cb" should be a function with one number param and return number
