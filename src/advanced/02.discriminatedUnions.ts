// pattern to implementing type guards easier

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	switch (animal.type) {
		case 'bird':
			console.log('animal.type', animal.flyingSpeed);
			break;
		case 'horse':
			console.log('animal.type', animal.runningSpeed);
			break;
	}
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 5 });

export {};
