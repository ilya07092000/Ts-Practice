// readonly
// private
// protected
// public

class Department {
	name: string;
	protected employees: string[] = [];

	constructor(name: string) {
		this.name = name;
	}

	describe() {
		console.log('Department ' + this.name);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('accountions');

accounting.addEmployee('test1');
accounting.addEmployee('test2');

// SHORTHAND INITIALIZATION
class Test {
	constructor(public name: string, private employees: string[]) {
		this.employees = employees;
		this.name = name;
	}
}
