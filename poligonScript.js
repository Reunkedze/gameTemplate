var game = document.querySelector('.game');
var chooseUnits = game.querySelector('.choose-units');
var playground = game.querySelector('.playground');
var units = chooseUnits.querySelectorAll('.unit');
var unitChoosenClass = 'field';

for (var i = 0; i <= 399; i++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add('field');
    playground.appendChild(cell);
}

var cells = playground.querySelectorAll('.cell');

var addCellClickHandler = function(cellElement) {
    cellElement.addEventListener('click', function () {
        for (var j = 0; j < cells.length; j++) {
            cells[j].classList.remove('active');
        }
        cellElement.classList.remove(cellElement.classList[cellElement.classList.length - 1]);
        cellElement.classList.add(unitChoosenClass);
        cellElement.classList.add('active');
    });
}

for (var i = 0; i < cells.length; i++) {
    addCellClickHandler(cells[i]);
}

var addUnitClickHandler = function(cellElement) {
    cellElement.addEventListener('click', function () {
        for (var j = 0; j < units.length; j++) {
            units[j].classList.remove('active');
        }
        unitChoosenClass = cellElement.classList[cellElement.classList.length - 1];
        cellElement.classList.add('active');
    });
}

for (var i = 0; i < units.length; i++) {
    addUnitClickHandler(units[i]);
}
