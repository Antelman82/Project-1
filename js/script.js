console.log("script connected")

//Get Elements
//Create Aphabet Elements - done
//Create Guess Elements - done
//Show lives - done
//"Animate" picture


/*Game functions
    - click letter button
    - update button style
    - check letter guess against solution
    - Update picture based on accurate guess



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
    this.setAttribute("style", "cursor:ds not-allowed; background: #555555; opacity: 0.6;")
    // console.log(this)
    // console.log(this.innerHTML)
    this.removeEventListener('click', setButtonAtt)
    // checkLetter(this)
    checkLetter(this.innerHTML)
}

//Create Aphabet list in button container
let buttons = function () {
    myButtons = document.querySelector('.button-container')
    letters = document.querySelector('#letter-buttons')
    for (let i=0; i<alphabet.length; i++){
        // letters.id = 'alphabet'
        list = document.createElement('li')
        // list.id = 'letter'
        list.classList.add('button')
        list.innerHTML = alphabet[i]
        letters.appendChild(list)

    }
    //setup listeners for each letter button
    letterList = document.querySelectorAll('#letter-buttons li')
    letterList.forEach(letter => {
        letter.addEventListener('click', setButtonAtt)
            // letter.setAttribute("style", ""   background: #555555;
            //     color: black;
            //     opacity: 0.6;)
            // letter.classList.add('clicked')
        })
    
    // letterList.forEach(event => {
    //     letter.addEventListener('click', function(){
    //         console.log(this)
    //         console.log(`you clicked ${this.innerText}`)
    //     })
    // })
}

buttons()

function removeEvent() {
    letter.removeEventListener('click', event => {
        console.log(`removed listener for ${letter.innerHTML}`)
        false
    })
}

let word = ''
function answerButtons() {
    //This is where the buttons for the answer will be displayed
    //when the correct letter button is clicked, it will send a signal to flip the answer card from a blank space to the correct corresponding letter for the word.
    // need a check for user word input first.
    const userWord = document.querySelector('.input')

    if (userWord.value !== '') {
        // console.log(userWord.value)
        word = userWord.value
        // console.log(word)
    } else {
        // console.log(randomWord)
        word = randomWord
        // console.log(word)
    }

    answerContainer = document.querySelector('#display-progress')
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

resetButton.addEventListener('click', resetGame)
function resetGame() {
    console.log('resetting game')
    /*Things that need reset
        - input word
        - guesses
        - random word
        - lives left
        - hangman picture
    */
}

//eventlistener for each button. 
// each button needs to check if the letter is in the word, if so, then desplay that letter, if not, then update lives -1



const randomButton = document.querySelector('#random-button')

function randomWordButton() {
    console.log('selecting random word')
    randomWord = words[(Math.floor(Math.random()*words.length))]
    console.log(randomWord)
    answerButtons()
    //words[Math.floor(Math.random()*words.length)]
}

randomButton.addEventListener('click', randomWordButton)

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
            console.log(indices)
            console.log(answerList[indices[i]])
            // console.log(answerList)
            answerList[indices[i]].innerHTML = letter.toLowerCase()
            console.log(answerList[i])
        }

    } else {
        console.log('Bad Guess')
        //subtract lives
        lives--
        livesLeft.innerHTML = `You have ${lives} lives left`

    }

}
//need a condition to check

function submitButton() {

}
const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', submitButton)