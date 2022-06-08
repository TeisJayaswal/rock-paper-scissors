/* first we create a function in which we want to pass in an array */ 
function computerPlay() {  

    /* we create an array that has the options that we want to give the computer which are rock, paper and scissors */ 
   var choices = [
       "rock", 
       "paper", 
       "scissors"
    ]; 

   /* to select one of our choices at random, we need to generate a random number at one of our indices which are 0, 1, and 2. To do this, we can generate a random decimal between 0 inclusive and 1 inclusive with the Math.random() function. We can multiply this number by the length of our array to give us a number between 0 and 3. We need this to be an integer so we use the Math.floor function to round DOWN to the nearest integer. It is important that the floor function rounds down because in this case any number between 2 and 3, like 2.65 will always be rounded down to 2 which is what we want. We don't want an index of 3) */ 

   let random = Math.floor(Math.random() * choices.length); 

   /* now we have a random number between 0, 1, and 2 which coorespond to our indices in the array. Now we want to return the cooresponding element of our array at the index we got. We will need this variable later so let's define this as the computerSelection*/ 

   return choices[random];

} 

let computerSelection = computerPlay(); 

console.log(computerSelection) 

    /* we need to get input from our player. They need to type either 'rock', 'paper' or 'scissors' */ 

function playerPlay() {
    
    var input = prompt("Type either 'rock', 'paper' or 'scissors'"); 

    /* by converting to lowercase, this will make sure that whatever the user types will not be case sensitive */ 

    return input.toLowerCase();  
}

let playerSelection = playerPlay(); 

console.log(playerSelection); 


/* now I have two variables, I've got computerSelection and playerSelection. I need to create a function that compares the two variables and prints out whether the user wins or loses depending on what they pick. We also need to return something like 'you didn't pick rock, paper, or scissors' if they type something different */ 

function playRound(playerSelection, computerSelection) {  

   switch (true) { 


    case (playerSelection === "rock") && (computerSelection === "rock"):
        return "Tie!";
        break; 

    case (playerSelection === "rock" && computerSelection === "paper"):
        return "You lose! Paper beats rock!";
        break; 

    case (playerSelection === "rock" && computerSelection === "scissors"): 
        return "You win! Rock beats scissors!";
        break; 

    case (playerSelection === "scissors" && computerSelection === "rock"):
        return "You lose! Rock beats scissors!";
        break; 

    case (playerSelection === "scissors" && computerSelection === "paper"): 
        return "You win! Scissors beats paper!";
        break; 
    
    case (playerSelection === "scissors" && computerSelection === "scissors"):
        return "Tie!";
        break;  

    case (playerSelection === "paper" && computerSelection === "rock"):
        return "You win! Paper beats rock!";
        break;  

    case (playerSelection === "paper" && computerSelection === "paper"):
        return "Tie!";
        break; 

    case (playerSelection === "paper" && computerSelection === "scissors"): 
        return "You lose! Scissors beats paper!";
        break; 

    default:
        return "You must not have entered rock, paper or scissors";  
    }

}    

console.log(playRound(playerSelection, computerSelection))

/* Our playround function is now working properly. Now we need to play the games multiple times as a series of 5 games to see who won the most 

we could approach this by creating two counters, but ultimately, we can simplify and use one. because we know at the end, if the user's number of victories is greater than or equal to 3, then they won. otherwise, they got 2 or less victories which means they lost. So really, we can just keep track of the amount of user wins to figure out who has won the series in the end. */ 

/* we will create a new function called game where we call our previous function playRound to play a 5 round game and keep score */ 

/*function game(playRound(playerSelection, computerSelection)) { */

/* to play 5 times, we will use a for loop that iterates through playRound 5 times */ 

    for(let i = 1; i < 6; i++) {

        /* the console log statement below checks to see if our for loop is working...it is...in our console log we are seeing Round 1, Round 2, etc. */ 

        console.log("Round " + i);
        /* we create a counter for user wins that starts at zero and we will add one each time the user wins */ 

        userWins = 0; 

        /* the issue right now is that it is using the same value each time for the statement below. we need to find a way so that the value resets and it runs through the above multiple times. 
        To do this, I think we might have to call each of our functions again i.e. computerPlay, playerPlay and playRound*/ 

        computerPlay(); 
        playerPlay(); 
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
    }



/* 


need to build a function computerPlay

function computerPlay
    When the game is started
        Computer returns either 'rock', 'paper' or 'scissors' 
    let the computer's selection be assigned the variable name 'computerSelection' 

now we need to build a single round of the game that pits the computer against the user 

function singleRound
    Get user input of 'rock', 'paper' or 'scissors' 
    convert the users input to a new variable that converts the text to lowercase so that their input is case sensitive 

    Assign the new variable the name playerSelection 

Now we compare iterations of playerSelection and computerSelection to see who has won 

    if the computerSelection is 'rock' and the playerSelection is 'paper' 
        return 'Congrats! Paper beats rock'
    if the computerSelection is 'rock' and the playerSelection is 'scissors' 
        return 'You lose! Rock beats scissors' 
    if the computerSelection is 'paper' and the playerselection is 'rock' 
        return 'You lose! Paper beats rock!' 
    if the computerSelection is 'paper' and the playerSelection is 'scissors'
        return 'You win! Scissors beats paper!' 
    if the computerSelection is 'scissors' and the playerSelection is 'Rock'
        return 'You win! Rock beats scissors' 
    if the computerSelection is 'scissors' and the playerSelection is 'Paper' 
        return 'You lose! Scissors beats paper!' */ 
