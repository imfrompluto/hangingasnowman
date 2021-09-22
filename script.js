import {words} from "./words.js";
let cypher = document.querySelector("#cypher");
let okButton = document.querySelector('#okButton');
let newgameButton = document.querySelector("#newgameButton");
let img = document.querySelector("#hello");
let imageNumber = 7;
let hints = document.querySelector('#hints')
let letters = [];
let letterlist = document.querySelector("#letterlist")
let userInput = document.getElementById('userInput');
// let words = ["deposit",
//     "iron",
//     "salmon",
//     "information",
//     "fast",
//     "safe",
//     "radical",
//     "inspire",
//     "colorful",
//     "rumor",
//     "length",
//     "introduction",
//     "partner",
//     "separate",
//     "introduction",
//     "partner",
//     "separate",
//     "birthday",
//     "governor",
//     "enjoy",
//     "pyramid",
//     "jurisdiction",
//     "conference",
//     "conversation",
//     "coach",
//     "pneumonoultramicroscopicsilicovolcanoconiosis",
    

    // ]
let secretWord = words[Math.floor(Math.random()*(words.length))];
console.log(words[4][2]);
cypher.innerHTML = "*".repeat(secretWord.length);

okButton.onclick = function (event) {
    event.preventDefault();
    let letter = userInput.value;
    // letterlist.innerHTML = letter
    if (!letters.includes(letter)){
        letters.push(letter);
        letterlist.innerHTML = letters;
        
    }
    if (secretWord.includes(letter)) {
        let newCypher = ""; 
        // for is a cycle. i is a letter number in a secret word. "i<secretWord.length"-while i is less than secretWord.length the cycle works.
        for (let i = 0; i<secretWord.length; i++){
           if(secretWord[i] == letter){
               console.log(letter);
            newCypher = newCypher + letter;   
           } else{
               newCypher = newCypher + cypher.innerHTML[i];
                 }
            // console.log(secretWord[i]);
        } console.log(newCypher);
        cypher.innerHTML=newCypher;
        console.log("you guessed it >:)");
    if (cypher.innerHTML == secretWord){
        hints.innerHTML = "you win!";
        hints.style.color = "green";
    }
    }
    else {
        console.log("no, try again >>>:(");
        imageNumber = imageNumber-1;
        img.src = "snowman" + imageNumber + ".jpg";
        if(imageNumber == 0){
            okButton.disabled = true;
           hints.innerHTML = "you lose, the secret word was "+secretWord;
           hints.style.color = "red"; 
        }
    }
}
newgameButton.onclick = function (event) {
    event.preventDefault();
    console.log(userInput.value);
    newgameButton.disabled = false;
    okButton.disabled = false
    secretWord = words[Math.floor(Math.random()*(words.length))];
    cypher.innerHTML = "*".repeat(secretWord.length);
    imageNumber = 7 
    img.src = "snowman" + imageNumber + ".jpg";
    hints.innerHTML = 'write down a letter and press the button "ok"';
    hints.style.color = "#47868f";
    letters = [];
}



