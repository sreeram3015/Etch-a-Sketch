// Get the container element with the id 'sketch-grid'
const container = document.getElementById('sketch-grid');

// Initialize the gridSize as 16
let gridSize = 16;

// Call the createGrid function with the initial gridSize
createGrid(gridSize);

// Function to create the grid based on the specified size
function createGrid(size) {
    // Loop through to create 'size * size' number of div elements
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div'); // Create a div element
        div.addEventListener('mouseover', changeColor); // Add a mouseover event listener to the div
        container.appendChild(div); // Append the div to the container
    }
    // Set the grid template columns and rows based on the size
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// Function to change the background color of the hovered div to white
function changeColor(e) {
    e.target.style.backgroundColor = '#fff';
}

// Function to reset the grid
function resetGrid() {
    container.innerHTML = ''; // Clear the content of the container
    gridSize = prompt('Choose a new grid size (1-64):'); // Prompt the user to choose a new grid size
    gridSize = Math.min(Math.max(gridSize, 1), 64); // Limit the gridSize to be between 1 and 64
    createGrid(gridSize); // Recreate the grid with the new gridSize
}
