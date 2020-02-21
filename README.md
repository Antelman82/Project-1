filename: README.md
# Hangman
## Project #1: Build a Game with HTML, CSS and JavaScript

link to project requirements: [https://git.generalassemb.ly/jdr-0127/project-1](https://git.generalassemb.ly/jdr-0127/project-1)

---
## Primary Files

- **README.md**
- **index.html**
- **styles.css**
- **script.js**
---

## Screenshots
- Wireframe
<p align="center">
<img src='https://github.com/Antelman82/Project-1/blob/master/Hangmanish%20Layout.png' width=400 align='center'>
</p>

> created using [https://www.canva.com/create-a-design](https://www.canva.com/create-a-design)
---

## Assets Used
<p align="center">
<img src="https://github.com/Antelman82/Project-1/blob/master/images/Line_Arrow_With_Tail.svg" width=400 align=center>
</p>
<p align="center">
<img src="https://github.com/Antelman82/Project-1/blob/master/images/sb21_series_mounted_snowblower.jpg" width=400 align=center>
</p>
<p align='center'>
<a href='https://random-word-api.herokuapp.com/'>herokuapp random-word-api (words.json)</a>
</p>
---

## User Stories
1. As a user I should be able to enter my own word or phrase✔
1. As a user I should be able to see all the available alphabet letters✔
1. As a user I should see the letters guess change so I know what was guessed and left to guess✔
1. As a user I can click a button and generate a word for me to guess✔
1. As a user I should start the game with 10 lives✔
---

## Bronze Level:
- Basic count return of bad guesses and set limit to how many tries✔
- Basic buttons✔
- Instructions: Use the alphabet below to guess the word✔
- Need a way to check if the final word is completed, or lives drops to zero for game over.✔

## Silver Level:
- Cool Picture✔
- insert grid over image to slowly fill each grid block to match background color, so slowly remove the picture. grid should be a 5x5 to start.✔
- User input their own word or phrase✔
- User input submitted by clicking submit✔
- User input submitted by hitting enter key✔

## Gold Level:
- Words to guess could be pulled from a list✔
- Random Word list will reference a json file with an array of 178187 words.✔
- Words list could come from an api database - in progress 2/19/2020
  > possible api to use var api = like wordnik 
  Update: I submitted request for api key for wordnik on 2/19/2020. waiting for confirmation email.
  https://www.wordnik.com/users/edit
  or maybe this one https://rapidapi.com/blog/directory/setgetgo-random-word/
  setgetgo on rapidapi is not free, it requres creditcard info.
  > - Filter random words by category 
  > - click a button to offer hints, but they count against the player
- grid over image could be changed so max starting lives could be increased for an easy mode, or decreased for a hard mode
- Random Cool Picture
- Timer-based scoring
- track scores accross games (event if the page is reloaded)
---

### Fonts and formatting
- Pirou font type for buttons
- 'Circular Badge Shape.svg' set this image to background of buttons
- Header, word guess and enter word fonts are 'Lilita One'
- Dropdown category and random word font is 'Montserrat Light'
---

## Necessary Deliverables
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
---

## Bugs
> 1. bug1 - When user enters a sentence or a phrase, it only picks up the first word. ✔

**Found when playing with my kids**
> 1. bug2 - When user enter's a capital letter, it doesn't fill when that letter button is picked. I was able to reproduce.✔
> 1. bug3 - when user submits a new word before clicking reset, buttons and lives don't reset. I was able to reproduce. Added call to the reset function as the first step of the submit function✔ 
> 1. bug4 - When entering a phrase, the program doesn't handle spaces. It is waiting for user to enter a space. spaces should automatically be entered.✔
> 1. bug5 - When last correct letter is guessed, the confirm window pops up, before the last letter is updated in the answer. Removed the confirm button pop up. ended up creating a div that would swap locations with the picture background, and then apply red or green depending on losing or winning.✔ 

---
## Technologies Used:
- **Command Line**: used for interacting with the computer, navigating the filesystem.
- **Source Control**: used for interaction, management and upload changes on code to Git repository
- **canva.com**: used for building the wireframe
- **Visual Studio Code**: used for coding with Html, CSS, JQuery and JavaScript
- **Google Chrome Web Browser**: used for launching the website
- **Google Chrome Developer Tools**: used to debug and solve problems in the code
- **jquery**: used to access the words.json file
- **google fonts api**: to reference font libraries

## Installation:
All you need is:
- **Web Browser**
- **Internet Connectivity**
- **JavaScript support**
- **Command Line**: Practice interacting with the computer and navigating the filesystem from the command line.
- **Source Control**: git repository to store changes to code to manage and interact with versioning
- **Responsive Web Design**: Making web applications work better with mobile device sizes
---
