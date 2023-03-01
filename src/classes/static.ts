class SomeClass {
	static myValue = Math.random();

	someMethod() {
		console.log(SomeClass.myValue);
	}

	static stasticMethod() {
		console.log(this.myValue);
	}
}

const instance = new SomeClass();
const instance2 = new SomeClass();

instance.someMethod();
instance2.someMethod();
SomeClass.stasticMethod();
SomeClass.stasticMethod();

export {};
