var numTries, theNumber

function getRandomNum(minNum, maxNum){
    const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    feedback.textContent = `Guess the random number between ${minNum} and ${maxNum}`
    return randomNum
}

function gameOver(text){
    let gameOverPrompt = document.querySelector("#overlay_gameOver")
    gameOverPrompt.classList.toggle('active')
    let gameDoneCont = document.querySelector("#gameDone")
    gameDoneCont.classList.toggle('active')

    document.querySelector("#gameResult").textContent = text
}

let gameMode = localStorage.getItem("mode")

const currentTry = document.querySelector("#currentTries")
const gameMode_ele = document.querySelector("#currentMode")
const feedback = document.querySelector("#feedback_p")

if (gameMode === "easyMode"){
    numTries = 10

    currentTry.textContent = `Tries: ${numTries}`
    gameMode_ele.textContent = "Game Mode: Easy"

    theNumber = getRandomNum(1,50)
}else {
    numTries = 5

    currentTry.textContent = `Tries: ${numTries}`
    gameMode_ele.textContent = "Game Mode: Hard"

    theNumber = getRandomNum(1,100)
}

const input_section = document.querySelector("#input-grid")
const buttons = input_section.getElementsByClassName("btn")
const display = input_section.querySelector("#inp_num")

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        display.innerText += event.target.innerHTML
    })
}

input_section.querySelector("#enter").addEventListener("click", ()=>{
    let userGuessNum = Number(display.innerText)
    
    if(numTries > 0){
        if(theNumber === userGuessNum){
            gameOver("You Win!")
        } else if(theNumber < userGuessNum){
            feedback.innerText = "Try Lower... :)"
        }else if(theNumber > userGuessNum){
            feedback.innerText = "Try Higher... :)"
        }
    
        display.innerText = ""
        numTries--
        currentTry.textContent = `Tries: ${numTries}`

        if(numTries === 0){
            gameOver("You Lose!")
        }

    }else{
        feedback.innerHTML = `You're running out of Tries, <br> You Lose!`
    }
    
})

document.querySelector("#retry_btn").addEventListener("click", ()=>{
    window.location.href = "index.html"
})

document.querySelector("#backToMenu").addEventListener("click", ()=>{
    window.location.href = "index.html"
})