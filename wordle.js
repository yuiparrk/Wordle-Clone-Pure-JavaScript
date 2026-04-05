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
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ"){
        if (col < width) {
            let currtile = document.getElementById(row.toString() + "-" + col.toString());
            if (currtile.innerText = "") {
                currtile.innerText = e.code[3]; //index 3 bc we just want the "A" from "KeyA"
            }
        }
    }
})