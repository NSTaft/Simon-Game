// NEEDED 
//RANDOM INCREMENTING COMPUTER CHOICE, STORED IN ARRAY
// START BUTTON WITH PLAY GAME FUNCTION AS ARGUMENT

// Player's sequence array
let playerChoice = [];
// Computer's sequence array
let computerChoice = ["red", "blue", "red", "green"];
let colorChoices = ["red", "green", "blue", "purple", "orange"]

//Call and declare the elements from HTML and CSS page
let tiles = document.querySelectorAll(".tile");
console.log(tiles);
let h1 = document.querySelectorAll(".h1")


function computerSequence() {
    // Generate random number from tiles
    const randomTile = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    console.log(randomTile);
    // Insert random number into sequence
    computerChoice.push(randomTile);
    console.log(computerChoice);
    let index = 0;
    // Grab computerchoice at index 0, change background for blink
    document.getElementById(computerChoice[0]).style.background = "white";
    // Create blink "animation"
    let blink = setInterval(() => {
        // Grab first index
        let myTile = document.getElementById(computerChoice[index]);
        // Grab NEXT index
        let myNextTile = document.getElementById(computerChoice[index + 1])
        // Style background, set equal to the id, which was changed to color value
        myTile.style.background = myTile.id;
        // Move to next index
        index++;
        // Conditional to know when to exit function or move 
        if (index === computerChoice.length) {
            clearInterval(blink);
        } else {
            myNextTile.style.background = "white";    
           }
    }, 1000)
}

// function playerSequence() {
//     for (const tile of tiles) {
//         tile.addEventListener("click", function(){
//             console.log(tile);
//         })
//     }
// }

function playGame () {
    computerSequence();
//     playerSequence();
}
setTimeout(playGame, 3000);
