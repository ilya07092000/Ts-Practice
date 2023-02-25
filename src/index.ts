// ALL TYPES IN TS

const nullVar: null = null;

const undefinedVar: undefined = undefined;

const boolean: boolean = true;

const string: string = 'string';

const num: number = 1001;

const arr1: string[] = ['str1', 'str2'];
const arr2: [string, number] = ['str', 123]; // exact two values and exact types TUPLES
const arr3: (string | number)[] = [1, 2, 'str'];

// FUNCTION ------

function test() {}
const funcVar: Function = test; // funcVar can store all functions

let functionType: (
	param1: number,
	param2: number
) => number; /* defined variable "functionType" 
which can store ONLY functions which takes two params (number, number) and return the number */

// ENUM ------
enum Roles {
	ADMIN,
	USER,
}

enum TestEnum {
	TEST1 = 100,
	TEST2 = 200,
}
TestEnum.TEST1;
