const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('select');
const resultBtn = document.querySelector('.count');
const error = document.querySelector('.error');
const info = document.querySelector('.info');
const finalCost = document.querySelector('.cost');


const counting = () => {
	const newPrice = parseInt(price.value);
	const newPeople = parseInt(people.value);
	const selectedTip = parseFloat(tip.options[tip.selectedIndex].value);
	const result = (newPrice + newPrice * selectedTip) / newPeople;
	resultMsg(result);
};

const resultMsg = (result) => {
	info.style.display = 'block';
	finalCost.textContent = result.toFixed(2);
};

const validate = () => {
	if (
		price.value == '' ||
		people.value == '' ||
		tip.options[tip.selectedIndex].value == '0'
	) {
		errorMsg();
		info.style.display = 'none';
	} else {
		error.textContent = '';
		counting();
		clearAll();
	}
};
const clearAll = () => {
	tip.value = 0;
	price.value = '';
	people.value = '';
	console.log(tip.options[tip.selectedIndex].value);
};

const errorMsg = () => {
	error.textContent = 'Uzupełnij wszystkie Pola!';
};

resultBtn.addEventListener('click', validate);
