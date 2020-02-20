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
    - Return Win or Lose - done
*/

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//Reference words.json file for list of words.
$.getJSON('words.json', function(json) {
    words = json
})

// const words = ['zany', 'respect', 'suck', 'spoil', 'fast', 'wait', 'flock', 'spicy', 'devilish', 'slippery', 'mammoth', 'chase', 'scribble', 'store', 'roasted', 'drop', 'goofy', 'permit', 'macabre', 'parsimonious']

let lives = 10
const livesLeft = document.querySelector('.lives-left')

let randomWord = function() {
    console.log('selecting random word')
    return words[Math.floor(Math.random()*words.length)].toLowerCase() //tolowercase added to resolve bug2
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
const answerContainer = document.querySelector('#display-progress')
let answerLetters = ''
//generate the buttons that display the word being guessed
function answerButtons() {
    resetGame()             //this was added to address bug3
    //checks if the input word has been filled or not
    if (userWord.value !== '') {
        word = userWord.value.toLowerCase() //tolowercase added to resolve bug2
        userWord.value = ''
    } else {
        word = randomWord
    }
    answerContainer.innerHTML = '' //sets the container text to blank string
    //takes either a random word or user input word and creates blanks for each letter in the word.
    for (let i = 0; i < word.length; i++) {
        answerList = document.createElement('li')
        answerList.classList.add('answer-button')
        if (word[i] === ' ') {
            wordLetter = ' '
        } else {
            wordLetter = '_'
        }
        answerList.innerHTML = wordLetter
        answerContainer.appendChild(answerList)
    }
    answerLetters = answerContainer.querySelectorAll('li')
}

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
    setupGameBoard()        //reset the game board
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
    gameBoardResult.style.display = 'none'
    gameBoardContainer.style.display = 'grid'
}

//generate random word from the words array
const randomButton = document.querySelector('#random-button')
function randomWordButton() {
    console.log('selecting random word')
    randomWord = words[(Math.floor(Math.random()*words.length))]
    answerButtons()
}

randomButton.addEventListener('click', randomWordButton)
gridSelector = 0
const gameBoardContainer = document.querySelector('.display-container')
let gameBoard = gameBoardContainer.querySelectorAll('div')
const gameBoardResult = document.querySelector('.hide')

//checks if guessed letter is within the word
function checkLetter(letter) {
    console.log("checking if letter in word")
    answerList = document.querySelectorAll('.answer-button')
    let indices = []
    //determines if the guessed letter is in the word
    for(let i=0;i<word.length;i++){
        if(word[i] === letter.toLowerCase()) indices.push(i)
    }
    //if there is a value returned above, it will fill in the answer location with the correct letter.
    if (indices.length > 0){                //if there is something in the indices array, that means the letter guess is good
        console.log('Good Guess')
        console.log(`indices.length= ${indices.length}`)
        for(let i=0;i<indices.length;i++){
            answerList[indices[i]].innerHTML = letter.toLowerCase() //this sets the correct blank line with the guessed letter
            console.log(`answerList[indices[i]]=`)
            console.log(answerList[indices[i]])
        }
        //check if word is solved after every correct guess
        if (!checkWin()) {
            console.log('You Won!!!')
            gameBoardResult.style.display = 'block'
            gameBoardResult.innerHTML = `You Won!<br><br>To play again, click the Reset button.`
            gameBoardResult.style.backgroundColor = 'rgba(99,188,126)'
            gameBoardContainer.style.display = 'none'
        }

    } else {
        console.log('Bad Guess')
        //subtract lives
        lives--
        //update lives left
        livesLeft.innerHTML = `You have ${lives} lives left`
        //update grid overlay to white for one box
        gameBoardContainer.querySelector(`.grid${gridSelector}`).setAttribute('style', 'background: white;')
        //update grid selector value to index to the next box
        gridSelector++
        //check if 0 lives left to stop the game after every incorrect guess
        if (lives === 0) {
            console.log('You Lost!!!')
            gameBoardResult.style.display = 'block'
            gameBoardResult.innerHTML = `You lost!<br>The correct answer was:<br><br>"${word}"<br><br>To play again, click the Reset button.`
            gameBoardResult.style.backgroundColor = 'rgba(241,143,109)'
            gameBoardContainer.style.display = 'none'
        }
    }
}
//allows user to enter word and submit their own words
const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', answerButtons)

//allows user to enter word and submit using the enter key
userWord.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        event.preventDefault()
        answerButtons()
    }
})


//Sets up the grid that covers the image
function setupGameBoard() {
    //add divs to <div class='display-container center'> container to match the number of lives
    for (let i=0;i<=10;i++){
        lifeBlock = document.createElement('div')
        lifeBlock.classList.add(`grid${i}`)
        gameBoardContainer.appendChild(lifeBlock)
    }
}
setupGameBoard()

// Checks if all blanks have been replaced with a guessed letter
function checkWin(){
    newArray = []       //temp array scoped to this function only
    //create a new list of quessed letters
    for (i=0;i<answerLetters.length;i++){
        newArray.push(answerLetters[i].innerHTML)
    }
    //returns true if there are any blanks in the answer 
    return newArray.some(item => {
        return item === '_'
    })
}


// function randomWordAPI() {
//     axios({
//         url: "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=YOURAPIKEY",
//         method: "GET"
//     })
//     .then(response => {

//     })
//     .catch(error => {
//         console.log(error)
//     })
// }
