README.md


I think I'm going to do my project using the hangman game.

- As a user I should be able to enter my own word or phrase
- As a user I should be able to see all the available alphabet letters
- As a user I should see the letters guess change so I know what was guessed and left to guess
- As a user I should see how many wins and how many losses
- As a user I can click a button and generate a word for me to guess
- As a user I should start the game with 10 lives.

Bronze Level:
- Basic count return of bad guesses and set limit to how many tries
- Basic buttons
- Instructions: Use the alphabet below to guess the word
- Need a way to check if the final word is completed, or lives drops to zero for game over.

Silver Level:
- Cool Picture
- Basic Scoring
- insert grid over image to slowly fill each grid block to match background color, so slowly remove the picture. grid should be a 5x5 to start. 
- User input their own word

Gold Level:
- Words to guess could be pulled from a list
- Words list could come from an api database
- Filter random words by category
- click a button to offer hints, but they count against the player
- grid over image could be changed so max starting lives could be increased for an easy mode, or decreased for a hard mode

possible api to use var api = 'https://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';


or maybe this one https://rapidapi.com/blog/directory/setgetgo-random-word/

Pirou font type for buttons


'Circular Badge Shape.svg' set this image to background of buttons

Header, word guess and enter word fonts are 'Lilita One'

dropdown category and random word font is 'Montserrat Light'

<!-- <img src='images/Circular Badge Shape2.svg'/>  -->

bug1 - When user enters a sentence or a phrase, it only picks up the first word. 
