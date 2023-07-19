//Grid Creation
const height = 48;
const width = height;
const border = 2;

const divGrid = document.querySelector('div.grid');
const divSquares = document.querySelectorAll('div.squares')

divGrid.style.borderWidth = `${border}px`;
divGrid.style.height = `${(height + 2 * border) * 16}px`;
divGrid.style.width = `${(height + 2 * border) * 16}px`;

for (let i = 1; i <= 256; i++) {
    const divSquares = document.createElement('div');
    
    divSquares.style.height = `${height}px`;
    divSquares.style.width = divSquares.style.height; 
    divSquares.style.borderWidth = `${border}px`;
    divSquares.classList.add('squares');
    
    divGrid.appendChild(divSquares); 
}

//Etch-a-Sketch

