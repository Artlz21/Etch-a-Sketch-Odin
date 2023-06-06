const squares = () => {
    let grid = document.querySelector(".grid");
    let square = document.querySelector(".grid .square");
    grid.removeChild(square);
    for(j = 0; j < 16; j++){
        for(let i = 0; i < 16; i++){
            let newClone = square.cloneNode(true);
            newClone.addEventListener("mouseenter", (e) => {e.target.style.backgroundColor = "black"});
            grid.appendChild(newClone);

            // if((i % 2) == 1)
            // {
            //     newClone.style.backgroundColor = "lightcoral"
            // }
        }
    }
    
}

(() => {
    squares();
})
();