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

const tiitleValue = document.querySelector(".js_tittle");
const postValue = document.querySelector(".post__input");
const approvePost = document.querySelector(".send__post");
const blogColumn = document.querySelector(".blog__column");
const defaultLetter = document.querySelector(".empty__letter");
const blogArr = [];
let counter = 0;

tiitleValue.addEventListener("click", function(){
    tiitleValue.value = "";
})

postValue.addEventListener("click", function(){
    postValue.value = "";
})

approvePost.addEventListener("click", function(){
    if ((tiitleValue.value === "") || (postValue.value === "")) {
        
        return alert("Поля ввода не должны быть пустыми");
    }

    if ((postValue.value == "Введите текст заметки") || (tiitleValue.value == "Введите заголовок")) {
        return alert("Ну введи хоть что то свое -_-");
    }

    blogArr.push(tiitleValue.value);
    blogArr.push(postValue.value);

    clearDefault();
    blogPostingNews();

    postValue.value = "Введите текст заметки";
    tiitleValue.value = "Введите заголовок";
})

function clearDefault() {
    defaultLetter.innerText = "";
}

function blogPostingNews(){
    blogColumn.innerHTML += `<h3 class="blog__h3"> ${blogArr[counter]} </h3>`;
    blogColumn.innerHTML += `<div class="blog__div"> ${blogArr[counter+1]} </div>`;
    counter += 2;
}




const tikitaka = document.querySelector(".tikitaka")
let counterTikitaka = 0;
const mapWinner = [[1,2,3]]

for (let i=0; i<9;i++) {
    tikitaka.innerHTML += `<div class="${i} tikitaka__pole"> - </div>`;
}

let pole = document.querySelectorAll(".tikitaka__pole");

pole.forEach((elem) => {
    elem.addEventListener("click", function(){
        elem.innerHTML = "X";
        counterTikitaka++;
    })
})
