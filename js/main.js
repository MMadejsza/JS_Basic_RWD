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
		thead.innerHTML = `<tr><th>Name</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Carbs</th></tr>`;

		let tbody = document.createElement('tbody');
		this.values.forEach((value) => {
			let row = document.createElement('tr');
			row.innerHTML = `<td>${value.name}</td>
            <td>${value.calories}</td>
            <td>${value.fat}</td>
            <td>${value.carbs}</td>`;
			tbody.appendChild(row);
		});

		table.appendChild(thead);
		table.appendChild(tbody);
		this.tableValuesContainer.appendChild(table);
	};

	init = () => {
		this.drawTableValues();
	};
}

document.addEventListener('DOMContentLoaded', () => new TableRWD('.app--values'));
