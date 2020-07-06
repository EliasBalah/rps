const game = () => {
    let pScore = 0;
    let cScore = 0;
    //starting the game
    const startGame = () =>{
        const playbtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const score = document.querySelector('.score');
        playbtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            score.classList.remove('fadeOut')
            match.classList.remove('fadeOut');
        });


    };

    const playGame = () =>{
        const cOpts = ['Rock','Paper','Scissors'];
        const Options = document.querySelectorAll('.play-btn button');
        
        const hands = document.querySelectorAll('.play-hands img');
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = "";
            });
        });
        
        Options.forEach(option => {
            option.addEventListener('click',function(){   
            //compare hands 
            const nbr = Math.floor(Math.random()*3);
            const computerChoice = cOpts[nbr];
            const playerChoice = this.textContent;
            const playerHand = document.querySelector('.player-hand');
            const computerHand = document.querySelector('.computer-hand');
            updateImages('Rock', 'Rock');
            playerHand.style.animation = "shakePlayerHand 2s ease";
            computerHand.style.animation = "shakeComputerHand 2s ease";
            setTimeout(() => {
                compareHands(playerChoice, computerChoice);
                //update images
                updateImages(playerChoice,computerChoice);
                //update score
                updateScore();
            }, 2000);


            });
        });
    }
    const updateScore = () => {
        //update score
        playerScore = document.querySelector('.player-score p span');
        computerScore = document.querySelector('.computer-score p span');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const updateImages = (playerChoice,computerChoice) => {
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        playerHand.src = `${playerChoice}.png`;
        computerHand.src = `${computerChoice}.png`;

    }
    const compareHands = (playerChoice, computerChoice) =>{
        const labelMatch = document.querySelector('.winner h1');
        if(playerChoice === computerChoice){
            labelMatch.textContent = 'Draw';
            return;
        }
        if(playerChoice === 'Rock'){
            if(computerChoice === 'Scissors'){
                labelMatch.textContent = 'Player Wins';
                pScore++;

            }
            else{
                labelMatch.textContent = 'Computer Wins';
                cScore++;

            }
            return;
        }
        if(playerChoice === 'Paper'){
            if(computerChoice === 'Scissors'){
                labelMatch.textContent = 'Computer Wins';
                cScore++;
            }
            else{
                labelMatch.textContent = 'Player Wins';
                pScore++;

            }
            return;
        }
        if(playerChoice === 'Scissors'){
            if(computerChoice === 'Paper'){
                labelMatch.textContent = 'Player Wins';
                pScore++;
            }
            else{
                labelMatch.textContent = 'Computer Wins';
                cScore++;
            }
            return;
        };
    };
    const exitGame = () =>{
        const exitbtn = document.querySelector('.exit-btn');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const score = document.querySelector('.score');
        exitbtn.addEventListener('click', () =>{
            intro.classList.remove('fadeOut');
            score.classList.add('fadeOut')
            match.classList.add('fadeOut');
            cScore = 0;
            pScore = 0;
            updateScore();
            updateImages('Rock', 'Rock');
        });
    }
    const restartMatch = () =>{
        const resbtn = document.querySelector('.restart-btn');
        resbtn.addEventListener('click', () => {
            cScore = 0;
            pScore = 0;
            updateScore();
            updateImages('Rock', 'Rock');
        });
    }
    startGame();
    playGame();
    restartMatch();
    exitGame();

};
game();