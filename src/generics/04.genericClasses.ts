class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		const itemIndex = this.data.indexOf(item);

		if (itemIndex >= 0) {
			this.data.splice(itemIndex, 1);
		}
	}

	getItems() {
		return [...this.data];
	}
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('string');
stringStorage.addItem('string2');
stringStorage.addItem('string3');
// stringStorage.addItem(1); // does not work

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);

// in this case(with objects) remove item feature does not work beacause objects are referrenced data types
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'Ilya' });
objStorage.addItem({ name: 'Max' });
objStorage.removeItem({ name: 'Ilya' });
console.log(objStorage.getItems());

export {};
