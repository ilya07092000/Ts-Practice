// There we tell that value can be HTMLInputElement
// const userInputElement = <HTMLInputElement>(
// 	document.querySelector('#user-input')!
// );

// OR

// There we tell that value can be HTMLInputElement
// const userInputElement = document.querySelector(
// 	'#user-input'
// ) as HTMLInputElement;

// OR

// There we set type to const
// const userInputElement: HTMLInputElement =
// 	document.querySelector('#user-input')!;
// userInputElement.value = 'Hi there!';

// There we tell that value can be HTMLInputElement
const userInputElement = document.querySelector('#user-input');
if (userInputElement) {
	(userInputElement as HTMLInputElement).value = 'Hi There!';
}
