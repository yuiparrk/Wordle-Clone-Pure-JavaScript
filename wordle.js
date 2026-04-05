var height = 6; //guesses
var width = 5; //len of word
var row = 0;
var col = 0;

var gameOver = false;
var word = "SQUID";

window.onload = function(){
    intialize();
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
        update();
        row += 1;
        col = 0;
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
})

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
        }
    }
}