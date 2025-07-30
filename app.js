const p1 = document.getElementById("dice1");
const p2 = document.getElementById("dice2");
const message = document.getElementById("result");


function rollDice(){

    p1.classList.remove("animate__shakeX");
    p2.classList.remove("animate__shakeX");


    void p1.offsetWidth;
    void p2.offsetWidth;

    p1.classList.add("animate__shakeX");
    p2.classList.add("animate__shakeX");

    // Change images after animation completes 
    setTimeout(() => {
        let dice1 = Math.floor(Math.random() * 6 + 1);
        let dice2 = Math.floor(Math.random() * 6 + 1);

        p1.src = `/static/Dice${dice1}.png`;
        p2.src = `/static/Dice${dice2}.png`;

        let result = "DRAW";
        if (dice1 > dice2) result = `A Wins! <i class="fa-solid fa-trophy"></i>`;
        else if (dice2 > dice1) result = `<i class="fa-solid fa-trophy"></i> B Wins!`;

        message.innerHTML = result;
    }, 500); 

}

