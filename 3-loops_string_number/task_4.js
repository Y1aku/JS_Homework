/*
Написать программу, которая видоизменяет принимаемое слово (переменная со словом) шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
Направление шифрования задается переменной offset, которая может быть +1 и -1.
Например let str = 'AbC'; let offset = -1, result = 'ZaB'; Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
*/

const acceptedWord = "Патрик";
const offset = -1;
const kitsLength = 33;
const lowercaseLettersKit = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const uppercaseLettersKit = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

let outputWord = "";

for (let i = 0; i < acceptedWord.length; i++) {

	let searchLetter = acceptedWord[i];
	let indexOfWordInKit = 0;
	let newIndex = 0;

	if (offset === 1) {

		if (uppercaseLettersKit.includes(searchLetter)) {
			// console.log(searchLetter);
			indexOfWordInKit = uppercaseLettersKit.indexOf(searchLetter);
			// console.log(indexOfWordInKit);
			newIndex = (indexOfWordInKit + offset) % kitsLength;
			outputWord += uppercaseLettersKit[newIndex];
			// console.log(outputWord);
		} else if (lowercaseLettersKit.includes(searchLetter)) {
			// console.log(searchLetter);
			indexOfWordInKit = lowercaseLettersKit.indexOf(searchLetter);
			newIndex = (indexOfWordInKit + offset) % kitsLength;
			outputWord += lowercaseLettersKit[newIndex];
			// console.log(outputWord);
		}

	} else if (offset === -1) {
		if (uppercaseLettersKit.includes(searchLetter)) {
			// console.log(searchLetter);
			indexOfWordInKit = uppercaseLettersKit.indexOf(searchLetter);
			// console.log(indexOfWordInKit);
			newIndex = (indexOfWordInKit + offset);
			if (newIndex < 0) newIndex += kitsLength;
			outputWord += uppercaseLettersKit[newIndex];
			// console.log(outputWord);
		} else if (lowercaseLettersKit.includes(searchLetter)) {
			// console.log(searchLetter);
			indexOfWordInKit = lowercaseLettersKit.indexOf(searchLetter);
			newIndex = (indexOfWordInKit + offset);
			if (newIndex < 0) newIndex += kitsLength;
			outputWord += lowercaseLettersKit[newIndex];
			// console.log(outputWord);
		}
	} else {
		console.log("Variable offset has non-valid value");
	}
}

console.log("\n" + outputWord);