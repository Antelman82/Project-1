console.log("script connected")

//Get Elements
//Create Aphabet Elements - done
//Create Guess Elements - done
//Show lives - done
//"Animate" picture - done


/*Game functions
    - click letter button - done
    - update button style - done
    - check letter guess against solution - done
    - Update picture based on accurate guess - done
*/

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const words = ['zany', 'respect', 'suck', 'spoil', 'fast', 'wait', 'flock', 'spicy', 'devilish', 'slippery', 'mammoth', 'chase', 'scribble', 'store', 'roasted', 'drop', 'goofy', 'permit', 'macabre', 'parsimonious']

let lives = 10
const livesLeft = document.querySelector('.lives-left')

// console.log(Math.floor(Math.random()*words.length))

let randomWord = function() {
    console.log('selecting random word')
    return words[Math.floor(Math.random()*words.length)]
}

//This is the activitity after letter button is clicked
function setButtonAtt () {
    // console.log(`You clicked ${this.innerHTML}`)
    this.setAttribute("style", "cursor: not-allowed; background: #555555; opacity: 0.6;")
    // console.log(this)
    // console.log(this.innerHTML)
    this.removeEventListener('click', setButtonAtt)
    // checkLetter(this)
    checkLetter(this.innerHTML)
}
let letters = document.querySelector('#letter-buttons')

//Create Aphabet list in button container
let buttons = function () {
    myButtons = document.querySelector('.button-container')
    letters = document.querySelector('#letter-buttons')
    for (let i=0; i<alphabet.length; i++){
        list = document.createElement('li')
        list.classList.add('button')
        list.innerHTML = alphabet[i]
        letters.appendChild(list)

    }
    //setup listeners for each letter button
    letterList = document.querySelectorAll('#letter-buttons li')
    letterList.forEach(letter => {
        letter.addEventListener('click', setButtonAtt)
        })
}
buttons()

function removeEvent() {
    letter.removeEventListener('click', event => {
        console.log(`removed listener for ${letter.innerHTML}`)
        false
    })
}

const userWord = document.querySelector('.input')
let word = ''
answerContainer = document.querySelector('#display-progress')
function answerButtons() {
    if (userWord.value !== '') {
        word = userWord.value
        userWord.value = ''
    } else {
        word = randomWord
    }
    answerContainer.innerHTML = ''
    for (let i = 0; i < word.length; i++) {
        answerList = document.createElement('li')
        answerList.classList.add('answer-button')
        // wordLetter = word[i]
        wordLetter = '_'
        // console.log(wordLetter)
        answerList.innerHTML = wordLetter
        // console.log(answerList)
        answerContainer.appendChild(answerList)
    //   answerList.appendChild(list)
    }

}
//answerButtons()
const resetButton = document.querySelector('#reset-button')
let lettersArray = document.querySelectorAll('#letter-buttons li')
resetButton.addEventListener('click', resetGame)
function resetGame() {
    console.log('resetting game')
    word = ''               //reset input word
    gridSelector = 0        //reset hangman picture
    while (gameBoardContainer.hasChildNodes()){
        gameBoardContainer.removeChild(gameBoardContainer.firstChild)
    }
    setupGameBoard()

    lives = 10              //reset lives
    livesLeft.innerHTML = `You have ${lives} lives left`

    //Reset reset answer buttons
    while (answerContainer.hasChildNodes()){
        answerContainer.removeChild(answerContainer.firstChild)
    }
    //Reset each alphabet letter button
    lettersArray.forEach(letter => {
        letter.setAttribute("style", "cursor: pointer; background: #eaa997; opacity: 1;")
        letter.addEventListener('click', setButtonAtt)
    })
}

const randomButton = document.querySelector('#random-button')

function randomWordButton() {
    console.log('selecting random word')
    randomWord = words[(Math.floor(Math.random()*words.length))]
    console.log(randomWord)
    answerButtons()
}

randomButton.addEventListener('click', randomWordButton)
gridSelector = 0
const gameBoardContainer = document.querySelector('.display-container')
let gameBoard = gameBoardContainer.querySelectorAll('div')
function checkLetter(letter) {
    //checks if letter clicked is contianed within the word.
    console.log("checking if letter in word")
    // console.log(letter)
    answerList = document.querySelectorAll('.answer-button')
    let indices = []
    // console.log(word.length)
    for(let i=0;i<word.length;i++){
        if(word[i] === letter.toLowerCase()) indices.push(i)
    }
    // console.log(indices) // prints the indices array of all the locations that contain the guessed letter.
    if (indices.length > 0){
        console.log('Good Guess')
        //should I pass the indices array to another function? or should I just push the update directly?
        // I think I could just do a loop through the array and update the innerHTML for each index matching the word index location with the letter variable.
        // console.log(answerList)
        for(let i=0;i<indices.length;i++){
            // console.log(indices)
            // console.log(answerList[indices[i]])
            // console.log(answerList)
            answerList[indices[i]].innerHTML = letter.toLowerCase()
            // console.log(answerList[i])
        }

    } else {
        console.log('Bad Guess')
        // console.log(lives)
        //subtract lives
        lives--
        // console.log(lives)
        livesLeft.innerHTML = `You have ${lives} lives left`
        // console.log(gridSelector)
        // console.log(gameBoardContainer)
        // console.log(gameBoardContainer.querySelector('.grid0'))
        // console.log(gameBoardContainer.querySelector(`.grid${gridSelector}`))
        gameBoardContainer.querySelector(`.grid${gridSelector}`).setAttribute('style', 'background: white;')
        gridSelector++
        // console.log(gridSelector)
    }
}
//need a condition to check
const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', answerButtons)

function setupGameBoard() {
    //add divs to <div class='display-container center'> container to match the number of lives
    for (let i=0;i<=10;i++){
        lifeBlock = document.createElement('div')
        lifeBlock.classList.add(`grid${i}`)
        gameBoardContainer.appendChild(lifeBlock)
    }
}
setupGameBoard()

