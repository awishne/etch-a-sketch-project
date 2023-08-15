const container = document.getElementById('container');
const newGridButton = document.getElementById('newGrid');

newGridButton.addEventListener('click', function(){
    const gridSize = prompt('Enter the number of squares per side for the new grid', '16');
    if (gridSize !==null && !isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        container.innerHTML = ''; // Remove exisiting grid
        createGrid(gridSize); // Create new grid  
    } else {
        alert ('Invalid input. Please enter a number between 1 and 100.');
    }
    
});

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.className = 'grid-div';
            div.addEventListener('mouseover', function(){
                div.style.backgroundColor = 'black';
            });
            container.appendChild(div);
        }
    }
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.className = 'grid-div';
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}

createGrid(16); 