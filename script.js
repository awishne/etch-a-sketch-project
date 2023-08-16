const container = document.getElementById('container');
const newGridButton = document.getElementById('newGrid');

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(color, interactions) {
    const match = color.match(/rgb\((\d+), (\d+), (\d+)\)/);
    const r = Math.floor(match[1] * (1 - interactions * 0.1));
    const g = Math.floor(match[2] * (1 - interactions * 0.1));
    const b = Math.floor(match[3] * (1 - interactions * 0.1));
    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.className = 'grid-div';
        div.addEventListener('mouseover', function() {
            const interactions = div.getAttribute('data-interactions') || 0;
            const newInteractions = parseInt(interactions) + 1;
            if (newInteractions === 1) {
                div.style.backgroundColor = randomRGB();
            } else {
                const color = div.style.backgroundColor;
                div.style.backgroundColor = darkenColor(color, newInteractions);
            }
            div.setAttribute('data-interactions', newInteractions);
        });
        container.appendChild(div);
    }
}

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
            div.addEventListener('mouseover', function() {
                const interactions = div.getAttribute('data-interactions') || 0;
                const newInteractions = parseInt(interactions) + 1;
                if (newInteractions === 1) {
                    div.style.backgroundColor = randomRGB();
                } else {
                    const color = div.style.backgroundColor;
                    div.style.backgroundColor = darkenColor(color, newInteractions);
                }
                div.setAttribute('data-interactions', newInteractions);
            });
            container.appendChild(div);
        }
    }
}

createGrid(16); 