// NEEDED 
//RANDOM INCREMENTING COMPUTER CHOICE, STORED IN ARRAY
// START BUTTON WITH PLAY GAME FUNCTION AS ARGUMENT

// Player's sequence array
let playerChoice = [];
// Computer's sequence array
let computerChoice = [];
let colorChoices = ["red", "green", "blue", "purple", "orange"]
let roundCount = document.getElementById("roundCount");
let round = 2;

//Call and declare the elements from HTML and CSS page
let tiles = document.querySelectorAll(".tile");
// console.log(tiles);

// Iterates through tiles, add click, calls playerSequence
for (const tile of tiles) {
    tile.addEventListener("click", playerSequence);
    }

function computerSequence() {
    // Generate random number from tiles
    const randomTile = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    // console.log(randomTile);
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
           // IF Tile == next tile, color change from tile-white-tile
        if (myTile === myNextTile) {
            myTile.style.background = myTile.id;
        }
    }, 1000)
}

function playerSequence(e) {
    playerChoice.push(e.target.id);
    console.log(playerChoice);
            for (let i = 0; i < playerChoice.length; i++) {
                console.log(i)
                if(playerChoice[i] !== computerChoice[i]){
                    alert("You lose");
                    computerChoice = [];
                    playerChoice = [];
                    roundCount.innerHTML = "Round " + 1;
                    round = 2;
                    console.log(computerChoice, playerChoice)
                    return;
                } else if(playerChoice.length === computerChoice.length) {
                    // alert("Round passed");
                    playerChoice = [];
                    roundCount.innerHTML = "Round " + round++;
                    computerSequence();
                }
                }
            }



// Start button
document.getElementById("button").addEventListener("click", computerSequence)

