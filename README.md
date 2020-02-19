README.md


I think I'm going to do my project using the hangman game.

x As a user I should be able to enter my own word or phrase
x As a user I should be able to see all the available alphabet letters
x As a user I should see the letters guess change so I know what was guessed and left to guess
x As a user I can click a button and generate a word for me to guess
x As a user I should start the game with 10 lives.

Bronze Level:
x Basic count return of bad guesses and set limit to how many tries
x Basic buttons
x Instructions: Use the alphabet below to guess the word
X Need a way to check if the final word is completed, or lives drops to zero for game over.

Silver Level:
x Cool Picture
x insert grid over image to slowly fill each grid block to match background color, so slowly remove the picture. grid should be a 5x5 to start. 
x User input their own word or phrase

Gold Level:
x Words to guess could be pulled from a list
- Words list could come from an api database - in progress 2/19/2020
- Filter random words by category 
- click a button to offer hints, but they count against the player
- grid over image could be changed so max starting lives could be increased for an easy mode, or decreased for a hard mode
- Random Cool Picture

possible api to use var api = 'https://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
---- I submitted request for api key for wordnik on 2/19/2020. waiting for confirmation email.
https://www.wordnik.com/users/edit



or maybe this one https://rapidapi.com/blog/directory/setgetgo-random-word/
setgetgo on rapidapi is not free, it requres creditcard info.

Pirou font type for buttons


'Circular Badge Shape.svg' set this image to background of buttons

Header, word guess and enter word fonts are 'Lilita One'

dropdown category and random word font is 'Montserrat Light'

<!-- <img src='images/Circular Badge Shape2.svg'/>  -->

bug1 - When user enters a sentence or a phrase, it only picks up the first word. - resolved.

**** Found when playing with my kids ****
    but2 - When user enter's a capital letter, it doesn't fill when that letter button is picked. I was able to reproduce.

    bug3 - when user submits a new word before clicking reset, buttons and lives don't reset. I was able to reproduce. - resolved, added call to the reset function as the first step of the submit function


Necessary Deliverables
Your submission must include all of the following:

- A hosted copy of your game, built by you, hosted on Github Pages
- Your HTML/CSS should pass the HTML5 Validator and CSS Validator
- A git repository hosted on Github with frequent commits dating back to the very beginning of the project
- A link to your hosted project in the URL section of your Github repo
- A readme.md file, including
    - Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
    - Follow this mini-lesson on writing documentation for your project
    - Sample project readmes:
        - https://github.com/reemharbi/BloodApp
        - https://github.com/AlkhaldiAzzam/Project1-Tic-Tac-Toe