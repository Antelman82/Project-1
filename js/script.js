console.log("script connected")

//Get Elements
//Create Aphabet Elements
//Create Guess Elements
//Show lives
//"Animate" picture


/*Game functions
    - click letter button
    - update button style
    - check letter guess against solution
    - Update picture based on accurate guess



*/

let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let words = ['zany', 'respect', 'suck', 'spoil', 'fast', 'wait', 'flock', 'spicy', 'devilish', 'slippery', 'mammoth', 'chase', 'scribble', 'store', 'roasted', 'drop', 'goofy', 'permit', 'macabre', 'parsimonious']

console.log(Math.floor(Math.random()*words.length))

let randomWord = function() {
    words[Math.floor(Math.random()*words.length)]
}

console.log(randomWord)

//Create Aphabet list in button container
let buttons = function () {
    myButtons = document.querySelector('.button-container')
    letters = document.querySelector('#letter-buttons')
    for (let i=0; i<alphabet.length; i++){
        letters.id = 'alphabet'
        list = document.createElement('li')
        list.id = 'letter'
        list.classList.add('button')
        list.innerHTML = alphabet[i]
        letters.appendChild(list)

    }
    // for (let i = 0; i < alphabet.length; i++) {
    //   letters.id = 'alphabet'
    //   list = document.createElement('li')
    //   list.id = 'letter'
    //   list.innerHTML = alphabet[i]
    //   check()   // a function that checks the button list and sets some attributes like if the letter has been guess or not which in turn updates the color, etc of that button.
    //   myButtons.appendChild(letters)
    //   letters.appendChild(list)
    // }
  }

  buttons()