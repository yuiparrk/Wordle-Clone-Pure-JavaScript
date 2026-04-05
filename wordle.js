var height = 6; //guesses
var width = 5; //len of word
var row = 0;
var col = 0;

var gameOver = false;

function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

var word;

window.onload = function(){
    word = getRandomWord();
    intialize();
    console.log(word)

}

function intialize() {
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (gameOver) return;
    if ("KeyA" <= e.code && e.code <= "KeyZ"){
        if (col < width) {
            let currtile = document.getElementById(row.toString() + "-" + col.toString());
            if (currtile.innerText == "") {
                currtile.innerText = e.code[3]; //index 3 bc we just want the "A" from "KeyA"
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currtile = document.getElementById(row.toString() + "-" + col.toString());
        currtile.innerText = "";
    }

    else if (e.code == "Enter") {
        if (col == width) {
            let guess = getCurrentWord()
            if (!isValidWord(guess)) {
                alert("Not a valid word");
                return;
            }
            update();
            row += 1;
            col = 0;
        }
        else {
            alert("need 5 letters");
        }
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
})

function getCurrentWord() {
    let guess = "";
    for (let c = 0; c < width; c++) {
        let currtile = document.getElementById(row.toString() + "-" + c.toString());
        guess += currtile.innerText;
    }
    return guess;
}

function isValidWord(word) {
    return words.includes(word);
}

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currtile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currtile.innerText;

        if (word[c] == letter) {
            currtile.classList.add("correct");
            correct += 1
        }
        else if (word.includes(letter)) {
            currtile.classList.add("present");
        } else {
            currtile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
            if (row == 0) {
                document.getElementById("answer").innerText = `You won in ${row + 1} guess!`;
            }
            else {
                document.getElementById("answer").innerText = `You won in ${row + 1} guesses!`;
            }
        }
    }
}