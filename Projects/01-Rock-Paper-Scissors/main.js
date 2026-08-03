// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.
  
const gameChoices = ["rock", "paper", "scissors"];

function playGame() {
    const userChoice = prompt("Enter your choice: (rock, paper, or scissors):").toLowerCase();
    //validation
    if (!gameChoices.includes(userChoice)){
        console.log("Invalid choice!");
        //askPlayAgain();
        return;
    }

    const randomIndex = Math.floor(Math.random() * gameChoices.length);
    const computerChoice = gameChoices[randomIndex];

    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else if (userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "scissors" && computerChoice === "paper" ||
            userChoice === "paper" && computerChoice === "rock")   {
            console.log("You win!");
    } 
    else {
       console.log("Computer wins!");
    }

    askPlayAgain();
}
playGame();


function askPlayAgain(){
        const askPlay = prompt("Do you want play again?").toLowerCase();
        if (askPlay === "yes") {
            playGame();
        } else {
            console.log("Thanks for playing!");
        }
}   
    
