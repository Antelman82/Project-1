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

let words = ['zany', 'respect', 'suck', 'spoil', 'fast', 'wait', 'flock', 'spicy', 'devilish', 'slippery', 'mammoth', 'chase', 'scribble', 'store', 'roasted', 'drop', 'goofy', 'permit', 'macabre', 'parsimonious']

console.log(Math.floor(Math.random()*words.length))

let randomWord = function() {
    return words[Math.floor(Math.random()*words.length)]
}

console.log(randomWord)