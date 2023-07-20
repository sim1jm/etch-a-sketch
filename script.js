// Grid Creation
const height = 48;
const border = 1;

const divGrid = document.querySelector('div.grid');

divGrid.style.borderWidth = `${border}px`;
divGrid.style.height = `${(height + 2 * border) * 16}px`; // should be constant
divGrid.style.width = divGrid.style.height;


for (let i = 1; i <= 16 ** 2; i++) {
    const divSquares = document.createElement('div');
    
    divSquares.style.height = `${height}px`;
    divSquares.style.width = divSquares.style.height; 
    divSquares.style.borderWidth = `${border}px`;
    divSquares.classList.add('squares');

    divGrid.appendChild(divSquares); 
}

// Etch-a-Sketch
const divSquares = Array.from(document.querySelectorAll('div.squares'));
divSquares.forEach(square => square.addEventListener('mouseover', changeBGColor));

function changeBGColor() {
    this.style.backgroundColor = 'blue';
}





