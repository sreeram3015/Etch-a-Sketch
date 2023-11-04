document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');

    function createGrid(size) {
        container.innerHTML = '';
        container.style.setProperty("--grid-size", size);

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }

    function resetGrid() {
        let squaresPerSide = prompt("Enter the number of squares per side for the new grid: ");

        if (squaresPerSide !== null && squaresPerSide !== "" && squaresPerSide !== "0" && !isNaN(squaresPerSide)) {
            squaresPerSide = parseInt(squaresPerSide);
            createGrid(squaresPerSide);
        }
    }

    createGrid(16);

    container.addEventListener("mouseover", function(e) {
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "black";
        }
    });

    container.addEventListener("mouseout", function(e) {
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "";
        }
    });

    const resetButton = document.getElementById("newGrid");
    resetButton.addEventListener("click", resetGrid);
});
