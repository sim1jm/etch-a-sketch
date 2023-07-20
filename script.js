let sidePerSquare = 16;
createGrid(sidePerSquare);

// new grid maker
const button = document.querySelector('button');
button.addEventListener('click', () => makeNewGrid());

function makeNewGrid() { 
    sidePerSquare = prompt('How many squares should there be per side?');
    console.log(sidePerSquare);
    if (sidePerSquare <= 100 && sidePerSquare >= 1) {
        divSquares = Array.from(document.querySelectorAll('div.square')); //Why did I have to declare this again for it to change the grid rather than add?
        divSquares.forEach(square => square.remove());
        createGrid(sidePerSquare);
    } else if (sidePerSquare === null || sidePerSquare === '') {
        return;
    } else if (sidePerSquare > 100 || sidePerSquare < 1) {
        alert('ERROR! You can only have a maximum of 100 squares and a minimum of 1 square.');
    }
};

// main grid creator
function createGrid(sideNumber) {
    const divGrid = document.querySelector('div.grid');
    const squareSize = (800 / sideNumber - 2); 

    for (let i = 1; i <= sideNumber ** 2; i++) {
        const divSquare = document.createElement('div');
        
        divSquare.style.height = `${squareSize}px`;
        divSquare.style.width = divSquare.style.height; 
        divSquare.style.borderWidth = '1px';
        divSquare.classList.add('square');
    
        divGrid.appendChild(divSquare); 
    }

    const divSquares = Array.from(document.querySelectorAll('div.square'));

    divSquares.forEach(square => square.addEventListener('mouseover', changeBGColor));
}

// color changer
function changeBGColor() {
    this.style.backgroundColor = 'black';
}



