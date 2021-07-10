const btn = document.getElementById("button");
//this element will be used to show messages to user
const pUserMessage = document.getElementById("message");
let timer = 0;

//adding event listener to button to start/reset the game
btn.addEventListener("click", () => {
    //getting the value of sec from user
    timer = document.getElementById("time").value;
    if (!timer) {
        pUserMessage.innerHTML = "Set timer to start the game";
    } else {
        //button will work both to start game and reset game
        if (btn.value === "Reset game") {
            resetGame();
        } else {
            startGame(timer);
        }
    }
});

//variables to hold key press count
let countS = 0;
let countL = 0;
const pCountS = document.getElementById("countS");
const pCountL = document.getElementById("countL");
//this varible holds funciton to count
const countKeyPress = (event) => {
    if (event.key === "s") {
        countS++;
        pCountS.innerHTML = countS;
    }
    if (event.key === "l") {
        countL++;
        pCountL.innerHTML = countL;
    }
}

//this variable will be used to hold countdown interval to show to user
let countDown;
//this variable will be used to hold Timeout to end Game
let endGame;

//on start game set the Event listner and count,end game after timeout
function startGame(timer) {
    //set button to reset
    btn.value = "Reset game";
    //activate players Name animation and count
    renderPlayersActions();
    //activate countdown message
    renderCountDown(timer);
    //activate event to listen to key press
    document.addEventListener("keyup", countKeyPress);
    //set timer to end game
    endGame = setTimeout(finishGame, timer * 1000)
}

function renderPlayersActions() {
    const playersName = document.querySelectorAll("h2");
    playersName.forEach(title => title.classList.add("rotateText"));
    pCountS.innerHTML = countS;
    pCountL.innerHTML = countL;
}

function renderCountDown(timer) {
    let miliSecLeft = timer * 100;

    countDown = setInterval(() => {
        miliSecLeft--;
        pUserMessage.innerHTML = `${Math.round(miliSecLeft / 100)}:${(miliSecLeft % 100 === 0) ? "00" : miliSecLeft % 100}`;
        if (miliSecLeft <= 0) {
            clearInterval(countDown);
        }
    }, 10);
}

function finishGame() {
    //stop listening to events
    document.removeEventListener("keyup", countKeyPress);
    //figure out winner and adding confetti
    let winner;
    if (countS > countL) {
        winner = "playerS";
        pUserMessage.innerHTML = "Player S wins!"
    } else if (countS < countL) {
        winner = "playerL";
        pUserMessage.innerHTML = "Player L wins!"
    } else {
        winner = "bothPlayers"
        pUserMessage.innerHTML = "It`s a draw!"
    }
    addConfetti(winner);
}

function addConfetti(winner) {
    const winnerDiv = document.getElementById(winner);
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "confetti");
    winnerDiv.insertBefore(canvas, winnerDiv.firstChild);
    //setting confetti options
    const confettiSettings = { target: "confetti", size: 2 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function resetGame() {
    document.removeEventListener("keyup", countKeyPress);

    clearPlayesrActions();

    clearTimeout(endGame);

    clearInterval(countDown);

    clearConfetti();

    btn.value = "Start game!";
    pUserMessage.innerHTML = "Enter time and start the game!";

    countS = 0;
    countL = 0;
    pCountS.innerHTML = countS;
    pCountL.innerHTML = countL;
    document.getElementById("time").value = "";
}

function clearPlayesrActions() {
    const playersName = document.querySelectorAll("h2");
    playersName.forEach(title => title.classList.remove("rotateText"));
}

function clearConfetti() {
    const canvas = document.getElementById("confetti");
    //in case game was reset before end canvas=null, so no need to remove
    if (canvas !== null) { canvas.remove(); }
}

