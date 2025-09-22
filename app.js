let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const genCompChoice = () => {
    const compChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return compChoices[randomNum];
}

const drwaGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#FFD166";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win ! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#86CD82";
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("Computer Wins!");
        msg.innerText = `You Lose ! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#E4572E";
    }
    console.log(`User: ${userScore} | Computer: ${computerScore}`);
}

const playGame = (userChoice) => {
    console.log("User choice =",userChoice);

    // Generate Computer Choice -> Modular
    const computerChoice = genCompChoice();
    console.log("Computer choice =",computerChoice);

    if (userChoice === computerChoice) {
        // Game Draw
        drwaGame();
    }else{
        let userWin = true ;

        if (userChoice === 'rock') {
            // Comp choice -> paper or scissors
            userWin = computerChoice === 'paper' ? false : true ;
        }else if(userChoice === 'paper'){
            // Comp choice -> rock or scissors
            userWin = computerChoice === 'scissors' ? false : true ; 
        }else{
            // user choice is scissors || comp choice -> rock or paper
            userWin = computerChoice ==='rock' ? false : true ;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach(choice => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        // console.log("Choice clicked",userChoice);
        playGame(userChoice);
    });
});