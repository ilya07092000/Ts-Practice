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

class ITDepartment extends Department {
	public admins: string[];

	constructor(name: string, admins: string[]) {
		super(name);
		this.admins = admins;
	}
}

class AccountingDepartment extends Department {
	private reports: string[];
	private lastReport: string;

	constructor(name: string, reports: string[]) {
		super(name);
		this.reports = reports;
		this.lastReport = reports[0];
	}

	// @override
	addEmployee(employee: string): void {
		if (employee !== 'Ilya') {
			this.employees.push(employee);
		}
	}

	addReport(report: string) {
		this.reports.push(report);
		this.lastReport = report;
	}

	get mostRecentReport() {
		return this.lastReport;
	}

	set mostRecentReport(name: string) {
		this.addReport(name);
	}
}

const itDpartment = new ITDepartment('it department', ['Ilya']);
const accountingDepartment = new AccountingDepartment('it department', []);
accountingDepartment.addReport('some report');

console.log('accountingDepartment', accountingDepartment.mostRecentReport);
accountingDepartment.mostRecentReport = 'new report';
console.log(accountingDepartment.mostRecentReport);

const accounting = new Department('accountions');

accounting.addEmployee('test1');
accounting.addEmployee('test2');

export {};
