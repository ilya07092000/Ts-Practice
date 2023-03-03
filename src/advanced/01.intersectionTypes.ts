// WITH TYPESS =====

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Ilya',
	privileges: ['test'],
	startDate: new Date(),
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}

	return a + b;
}

type UnknownEmployee = Employee | Admin;

//Type Guard ======

function printEmployeeInfo(emp: UnknownEmployee) {
	console.log('Name: ', emp.name);

	if ('privileges' in emp) {
		console.log('Privileges: ', emp.privileges);
	}

	if ('startDate' in emp) {
		console.log('Privileges: ', emp.startDate);
	}
}

// WITH CLASSES =====

class Car {
	drive() {
		console.log('driving');
	}
}

class Truck extends Car {
	loadCargo(amount: number) {
		console.log('loading cargo: ', amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();

	if (vehicle instanceof Truck) {
		vehicle.loadCargo(100);
	}
}

// WITH INTERFACES =====

interface IAdmin {
	name: string;
	privileges: string[];
}

interface IEmployee {
	name: string;
	startDate: Date;
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

const e2: IElevatedEmployee = {
	name: 'Ilya',
	privileges: ['test'],
	startDate: new Date(),
};

export {};
