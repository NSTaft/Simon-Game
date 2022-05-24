// NEEDED 
//RANDOM INCREMENTING COMPUTER CHOICE, STORED IN ARRAY
// START BUTTON WITH PLAY GAME FUNCTION AS ARGUMENT

// Player's sequence array
const player = {
    currentChoice: [],
}
// Computer's sequence array
const computer = {
    currentChoice: [],
}
// Determines whose turn
let currentTurn = computer;

//Call and declare the elements from HTML and CSS page
let tiles = document.querySelectorAll(".tile");
console.log(tiles);
let h1 = document.querySelectorAll(".h1")


function computerSequence(){
    // Generate random number from tiles
    const randomTile = Math.floor(Math.random() * tiles.length);
    console.log(randomTile);
    // Insert random number into sequence
    computer.currentChoice.push(randomTile);
    console.log(computer.currentChoice)
    for (let tile of computer.currentChoice) {
        // through each iteration, blink by referencing css class
        // tile at index takes new class for a blink?
        // tile.classList.add("blink") 
    }
  }


function playerSequence() {
    for (const tile of tiles) {
        tile.addEventListener("click", function(){
            console.log(tile);
        })
    }
}




function playGame () {
    currentTurn = computer;
    computerSequence();
    playerSequence();
}
setTimeout(playGame, 3000);
