const names: Array<string> = ['String1', 'String2'];

const promiseType: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('some value');
	}, 2000);
});

// data is a string because we specified it in Promise<string> generic type
promiseType.then((data) => {
	console.log(data);
});

export {};
