const valueStr = document.querySelector(".value__counter");
const incrementButton = document.querySelector(".js_increment");
const decrementButton = document.querySelector(".js_decrement");
const resetButton = document.querySelector(".js_reset")

let counterFirst = 0;

incrementButton.addEventListener('click', function(){
    counterFirst++;
    valueStr.innerText = counterFirst;
})

decrementButton.addEventListener("click",function(){
    counterFirst--;
    valueStr.innerText = counterFirst;
})

resetButton.addEventListener("click",function(){
    valueStr.innerText = 0;
    counterFirst = 0;
})



const rockPlayer = document.querySelector(".js_rock");
const paperPlayer = document.querySelector(".js_paper");
const nozPlayer = document.querySelector(".js_noz");
const playerChoise = document.querySelector(".js_resultRockPaper");
const botChoose = document.querySelector(".js_bot_choise")
const gameRules = ["Камень", "Ножницы", "Бумага"];
const gameResult = document.querySelector(".js_gameResult");

rockPlayer.addEventListener('click', function(){
    playerChoise.innerText = "Камень";
    botChoosing();
})

paperPlayer.addEventListener("click", function(){
    playerChoise.innerText = "Бумага";
    botChoosing();
})

nozPlayer.addEventListener("click", function(){
    playerChoise.innerText = "Ножницы";
    botChoosing();
})

function botChoosing () {
    setTimeout(function() {
        botChoose.innerText = gameRules[getRandomInt()];
        whoWin()
    } ,1000)
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function whoWin() {
    if (playerChoise.innerText == botChoose.innerText){
        gameResult.innerText = "Ничья";
    } else if (((playerChoise.innerText == "Бумага") && (botChoose.innerText == "Камень")) || 
    ((playerChoise.innerText == "Камень") && (botChoose.innerText == "Ножницы")) ||
    ((playerChoise.innerText == "Ножницы") && (botChoose.innerText == "Бумага"))) {
        gameResult.innerText = "ТЫ ПОБЕДИЛ!";
    } else {
        gameResult.innerText = "Победил бот.";
    }
}
