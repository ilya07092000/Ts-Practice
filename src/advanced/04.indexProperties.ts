// { [id]: 'error' } (obj with dynamic props)
type ErrorContainer = {
	[prop: string]: string;
};

const testObj: ErrorContainer = {
	email: 'email error msg',
	name: 'name error msg',
};
