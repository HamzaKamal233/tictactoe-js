
var cells = document.getElementsByClassName('yessir');

var moves = 0;

for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "-";
    cells[i].addEventListener('click', function(event){
        var cell = event.path[0];
        if (isPLayer1Turn) {
            cell.style.color = "blue";
        }
        else {
            cell.style.color = "red";
        }
        cell.setAttribute('disabled', 'disabled');
        moves++;
        if (isPLayer1Turn) {
            cell.innerText = player1;
            isPLayer1Turn = false;
            checkBoard();
        }
        else {
            cell.innerText = player2;
            isPLayer1Turn = true;
            checkBoard();
        }
    });
} 

reset.addEventListener('click', function(){
    window.location.reload(true);
});

const player1 = "X";
const player2 = "O";

var isPLayer1Turn = true;

var frame = document.getElementById('frame');
var gif = document.createElement('img');
gif.setAttribute('src', 'confetti.gif');

var player1Won = document.createElement('h1');
player1Won.innerText = "X has Won!!";

var player2Won = document.createElement('h1');
player2Won.innerText = "O has Won!!";

var draw = document.createElement('h1');
draw.innerText = "Draw!!";

function checkBoard() { 
    if ((cell1.innerText === cell2.innerText && cell1.innerText === cell3.innerText && cell1.innerText === "X") || (cell1.innerText === cell2.innerText && cell1.innerText === cell3.innerText && cell1.innerText === "O")) {
        disableAll();
        whoWon(cell1.innerText);
        frame.append(gif);
    }
    else if ((cell4.innerText === cell5.innerText && cell4.innerText === cell6.innerText && cell4.innerText === "X") || (cell4.innerText === cell5.innerText && cell4.innerText === cell6.innerText && cell4.innerText === "O")) {
        disableAll();
        whoWon(cell4.innerText);
        frame.append(gif);
    }
    else if ((cell7.innerText === cell8.innerText && cell7.innerText == cell9.innerText && cell7.innerText === "X") || (cell7.innerText === cell8.innerText && cell7.innerText == cell9.innerText && cell7.innerText === "O")) {
        disableAll();
        whoWon(cell7.innerText);
        frame.append(gif);
    }
    else if ((cell1.innerText === cell4.innerText && cell1.innerText == cell7.innerText && cell1.innerText === "X") || (cell1.innerText === cell4.innerText && cell1.innerText == cell7.innerText && cell1.innerText === "O")) {
        disableAll();
        whoWon(cell1.innerText);
        frame.append(gif);
    }
    else if ((cell2.innerText === cell5.innerText && cell2.innerText === cell8.innerText && cell2.innerText === "X") || (cell2.innerText === cell5.innerText && cell2.innerText === cell8.innerText && cell2.innerText === "O")) {
        disableAll();
        whoWon(cell2.innerText);
        frame.append(gif);
    }
    else if ((cell3.innerText === cell6.innerText && cell3.innerText === cell9.innerText && cell3.innerText === "X") || (cell3.innerText === cell6.innerText && cell3.innerText === cell9.innerText && cell3.innerText === "O")) {
        disableAll();
        whoWon(cell3.innerText);
        frame.append(gif);
    }
    else if ((cell1.innerText === cell5.innerText && cell1.innerText === cell9.innerText && cell1.innerText === "X") || (cell1.innerText === cell5.innerText && cell1.innerText === cell9.innerText && cell1.innerText === "X")) {
        disableAll();
        whoWon(cell1.innerText);
        frame.append(gif);
    }
    else if ((cell3.innerText === cell5.innerText && cell3.innerText === cell7.innerText && cell3.innerText === "X") || (cell3.innerText === cell5.innerText && cell3.innerText === cell7.innerText && cell3.innerText === "O")) {
        disableAll();
        whoWon(cell3.innerText);
        frame.append(gif);
    }
    else if (moves === 9) {
        frame.append(draw);
    }
}

function whoWon(letter) {
    if (letter === "X") {
        frame.append(player1Won);
    }
    else if (letter === "O") {
        frame.append(player2Won);
    }
}

function disableAll() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute('disabled', 'disabled');
    }
}