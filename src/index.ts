// ALL TYPES IN TS

const nullVar: null = null;

const undefinedVar: undefined = undefined;

const boolean: boolean = true;

const string: string = 'string';

const num: number = 1001;

const arr1: string[] = ['str1', 'str2'];
const arr2: [string, number] = ['str', 123]; // exact two values and exact types TUPLES
const arr3: (string | number)[] = [1, 2, 'str'];

function test() {}
const funcVar: Function = test;

// ENUM
enum Roles {
	ADMIN,
	USER,
}

enum TestEnum {
	TEST1 = 100,
	TEST2 = 200,
}
TestEnum.TEST1;
