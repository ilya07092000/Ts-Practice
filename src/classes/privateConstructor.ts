class Singleton {
	private static instance: Singleton;
	public someInfo: string;

	private constructor(someInfo: string) {
		this.someInfo = someInfo;
	}

	static getInstance(someInfo?: string): Singleton {
		if (!this.instance && typeof someInfo === 'string') {
			this.instance = new Singleton(someInfo);
		}

		return this.instance;
	}
}

let myInstance = Singleton.getInstance('1');
myInstance = Singleton.getInstance('2');
myInstance = Singleton.getInstance('3');
myInstance = Singleton.getInstance('4');

console.log('myInstance', myInstance);
