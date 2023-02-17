class TableRWD {
	constructor(tableValuesContainer) {
		this.values = [
			{name: 'Ananas', calories: 33, fat: 0, carbs: 11.8},
			{name: 'Jabłko', calories: 57, fat: 0.7, carbs: 12.1},
			{name: 'Pomarańcza', calories: 51, fat: 0.2, carbs: 11.3},
			{name: 'Wiśnie', calories: 67, fat: 0.4, carbs: 14.6},
		];
		this.tableValuesContainer = document.querySelector(`${tableValuesContainer}`);
		this.desktopViewport = window.matchMedia('screen and (min-width: 500px)');
		this.init();
	}

	drawTableValues = () => {
		this.tableValuesContainer.innerHTML = '';
		let table = document.createElement('table');
		let thead = document.createElement('thead');
		thead.innerHTML = `
        <th>Name</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Carbs</th>
        `;
		table.appendChild(thead);

		this.tableValuesContainer.appendChild(table);
	};

	init = () => {
		this.drawTableValues();
	};
}

const values = [
	{name: 'Ananas', calories: 33, fat: 0, carbs: 11.8},
	{name: 'Jabłko', calories: 57, fat: 0.7, carbs: 12.1},
	{name: 'Pomarańcza', calories: 51, fat: 0.2, carbs: 11.3},
	{name: 'Wiśnie', calories: 67, fat: 0.4, carbs: 14.6},
];

const tableValuesContainer = document.querySelector('.app--values');

const desktopViewport = window.matchMedia('screen and (min-width: 500px)');

const drawTableValues = () => {
	tableValuesContainer.innerHTML = '';
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	thead.innerHTML = `
    <th>Name</th>
    <th>Calories</th>
    <th>Fat</th>
    <th>Carbs1</th>
    `;
	table.appendChild(thead);

	tableValuesContainer.appendChild(table);
};

drawTableValues();
document.addEventListener('DOMContentLoaded', () => new TableRWD('.app--values'));
