const container = document.getElementById('sketch-grid');
let gridSize = 16;
createGrid(gridSize);

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function changeColor(e) {
    e.target.style.backgroundColor = '#fff';
}

function resetGrid() {
    container.innerHTML = '';
    gridSize = prompt('Choose a new grid size (1-64):');
    gridSize = Math.min(Math.max(gridSize, 1), 64);
    createGrid(gridSize);
}