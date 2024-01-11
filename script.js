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
let settbutton = document.getElementById("settbutton");
let modal = document.getElementsByClassName("modal")[0]
let single = document.getElementById("one")
let wordchoice = document.getElementById("wordchoice")
let wordmodal = document.getElementsByClassName("wordmodal")[0]
let multi = document.getElementById("multi")
let modalok = document.getElementById("modalok")
let wordinput = document.getElementById("wordinput")
let singlemode = true

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
    userInput.select()
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
        console.log("you guessed it");
    if (cypher.innerHTML == secretWord){
        hints.innerHTML = "you win!";
        hints.style.color = "green";
    }
    }
    else {
        console.log("no, try again");
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
    if (singlemode){
        secretWord = words[Math.floor(Math.random()*(words.length))];
        startgame()
    }
    else{
        wordmodal.style.opacity = 1
        wordmodal.style.pointerEvents = "auto"
        wordinput.value = ""
    }
   event.preventDefault()
}


single.onclick = function(event){
    secretWord = words[Math.floor(Math.random()*(words.length))];
    startgame()
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
    event.preventDefault();
    document.getElementById("title").innerHTML = "snowman"
    document.title = "snowman"
    singlemode = true
}


function startgame(){
    userInput.value = ""
    letters = [];
    letterlist.innerHTML = "";
    console.log(userInput.value);
    newgameButton.disabled = false;
    okButton.disabled = false
    cypher.innerHTML = "*".repeat(secretWord.length);
    imageNumber = 7 
    img.src = "snowman" + imageNumber + ".jpg";
    hints.innerHTML = 'write down a letter and press the button "ok"';
    hints.style.color = "#47868f";
}

settbutton.onclick = function(event){
    console.log("setting");
    event.preventDefault()
    modal.style.opacity = 1
    modal.style.transform = " translate(-50%, -50%) scale(1)"
    modal.style.pointerEvents = "auto"
}

multi.onclick = function(event){
    console.log("1")
    event.preventDefault()
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
    wordmodal.style.opacity = 1
    wordmodal.style.pointerEvents = "auto"
    document.getElementById("title").innerHTML = "snowman - multiplayer!"
    document.title = "snowman - multiplayer!"
    singlemode = false


}

modalok.onclick = function(event){
    event.preventDefault()
    wordmodal.style.opacity = 0
    wordmodal.style.pointerEvents = "none"
    secretWord = wordinput.value
    startgame()
    console.log(secretWord)
}


modal.onclick = function(){
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
}
modal.children[0].onclick = function(event){
    event.stopPropagation()
}

// single onclick bug