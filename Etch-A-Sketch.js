// Gives function to the clear button to clear grid of filled squares
const clearButton = () => {
    let square = document.getElementsByClassName("square");
    let clrButton = document.querySelector(".Clear-button");
    clrButton.addEventListener("click", () => {
        for(let i =0; i < square.length; i++){
                square[i].style.backgroundColor = ""
            };
        }
    )
}

// Generates copies of a square and appends to the grid on screen (needs to recieve length of side)
const squares = (size, square) => {
    // Select the grid and square on the page 
    let grid = document.querySelector(".grid");

    square.style.width = `${(1/size) * 100}%`;
    square.style.height = `${(1/size) * 100}%`;

    // Loop through and clone the template then appends the clone to the grid
    for(j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
            let newClone = square.cloneNode(true);
            newClone.addEventListener("mouseenter", (e) => {e.target.style.backgroundColor = "black"});
            grid.appendChild(newClone);
        }
    }
}

// Get value from slider id="Input-range"
const sliderInput = () => {
    let sliderValue = document.getElementById("Input-range").value;
    let square = document.querySelector(".grid .square");
    let cloneSquare = square.cloneNode(true)
    console.log(sliderValue)
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";

    squares(sliderValue, cloneSquare);
}

(() => {
    // Add event to slider
    let sliderEvent = document.getElementById("Input-range");
    sliderEvent.addEventListener("input", sliderInput);

    // 
    sliderInput();
    clearButton();
})
();