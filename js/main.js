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

	drawListValuesMobile = () => {
		const drawLiForListMobile = (li, displayedAttributeName, value) => {
			let eachAttribute = document.createElement('div');
			eachAttribute.innerHTML = `<strong>${displayedAttributeName}: </strong>${value}`;
			li.appendChild(eachAttribute);
		};
		this.tableValuesContainer.innerHTML = '';
		let list = document.createElement('ul');

		this.values.forEach((value) => {
			let li = document.createElement('li');
			drawLiForListMobile(li, 'Name: ', value.name);
			drawLiForListMobile(li, 'Calories: ', value.calories);
			drawLiForListMobile(li, 'Fat: ', value.fat);
			drawLiForListMobile(li, 'Carbs: ', value.carbs);
			list.appendChild(li);
		});

		this.tableValuesContainer.appendChild(list);
	};

	drawTableValuesDesktop = () => {
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

	drawValues = (isDesktop) => {
		if (isDesktop) {
			this.drawTableValuesDesktop();
		} else {
			this.drawListValuesMobile();
		}
	};

	init = () => {
		//takes boolean at start from this.desktopViewport
		this.drawValues(this.desktopViewport.matches);
		//next listens if screen resolutions has been changed:
		this.desktopViewport.addListener((isDesktopUpdated) => {
			this.drawValues(isDesktopUpdated.matches);
		});
	};
}

document.addEventListener('DOMContentLoaded', () => new TableRWD('.app--values'));
