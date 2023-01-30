let fields = [];
let gameover = false;
let turns = 0; 
let winsPlayer1 = 0; 
let winsPlayer2 = 0; 
currentShape = 'cross'

//adds array keyword
function fillShape(id) {
    if (!gameover) {
        if (!fields[id]) { // checks if field is empty, when true ---> 
            turns++; 
            if (currentShape === 'cross') {

                turnPlayer1();
                fields[id] = 'cross';
                currentShape = 'circle';
            }
            else {
                turnPlayer2();
                fields[id] = 'circle';
                currentShape = 'cross';
            }
            playerMove();
        }

        else {
            document.getElementById('note-section').innerHTML = '<span class="note-bg"> Dieses Feld ist bereits besetzt! </span>';
        }
    }
}

function turnPlayer1() {
    document.getElementById('turn-cross').innerHTML = '';
    document.getElementById('player2').classList.add('inactive');
    document.getElementById('player1').classList.remove('inactive');
    document.getElementById('turn-circle').innerHTML = 'Your Turn!';
    document.getElementById('note-section').innerHTML = '';
}

function turnPlayer2() {
    document.getElementById('turn-cross').innerHTML = 'Your Turn!';
    document.getElementById('player1').classList.add('inactive');
    document.getElementById('player2').classList.remove('inactive');
    document.getElementById('turn-circle').innerHTML = '';
    document.getElementById('note-section').innerHTML = '';
}


// fills td with img 
function playerMove() {
    for (i = 0; i < fields.length; i++) {
        if (fields[i] === 'cross') {
            document.getElementById(`cross-${i}`).style = "display:flex";
        }

        else if (fields[i] === 'circle') {
            document.getElementById(`circle-${i}`).style = "display:flex";
        }
        else {

        }
    }
    checkWin();
}


function checkWin() {

    let winner;
    //horizontalen 
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById(`${winner}-0`).classList.add('scale');
        document.getElementById(`${winner}-1`).classList.add('scale');
        document.getElementById(`${winner}-2`).classList.add('scale');
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById(`${winner}-3`).classList.add('scale');
        document.getElementById(`${winner}-4`).classList.add('scale');
        document.getElementById(`${winner}-5`).classList.add('scale');
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById(`${winner}-6`).classList.add('scale');
        document.getElementById(`${winner}-7`).classList.add('scale');
        document.getElementById(`${winner}-8`).classList.add('scale');
    }
    // senkrechten 
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById(`${winner}-0`).classList.add('scale');
        document.getElementById(`${winner}-3`).classList.add('scale');
        document.getElementById(`${winner}-6`).classList.add('scale');
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById(`${winner}-1`).classList.add('scale');
        document.getElementById(`${winner}-4`).classList.add('scale');
        document.getElementById(`${winner}-7`).classList.add('scale');
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById(`${winner}-2`).classList.add('scale');
        document.getElementById(`${winner}-5`).classList.add('scale');
        document.getElementById(`${winner}-8`).classList.add('scale');
    }

    // schrägen

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById(`${winner}-0`).classList.add('scale');
        document.getElementById(`${winner}-4`).classList.add('scale');
        document.getElementById(`${winner}-8`).classList.add('scale');
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById(`${winner}-2`).classList.add('scale');
        document.getElementById(`${winner}-4`).classList.add('scale');
        document.getElementById(`${winner}-6`).classList.add('scale');
    }

    if (turns === 9) {
        restartBtn(); 
        document.getElementById('turn-cross').innerHTML = 'Draw!';
        document.getElementById('turn-circle').innerHTML = 'Draw!';
        document.getElementById('player1').classList.remove('inactive');
        document.getElementById('player2').classList.remove('inactive');
    }

    if (winner) {
        gameover = true;
        restartBtn();
        if (winner === 'cross') {
            document.getElementById('win-display').innerHTML = `Player 2 hat gewonnen!`;
            document.getElementById('player2-img').classList.add('hithere');
            document.getElementById('turn-cross').innerHTML = 'Winner!';
            document.getElementById('turn-circle').innerHTML = 'Loser!';
            document.getElementById('player1').classList.add('inactive');
            document.getElementById('player2').classList.remove('inactive');
            winsPlayer2++; 
            document.getElementById('points-player2').innerHTML = `<img src="img/gabel-und-messer-im-kreuz (2).png">&nbsp;&nbsp;=  ${winsPlayer2}`; 

        }

        else {
            document.getElementById('win-display').innerHTML = `Player 1 hat gewonnen!`;
            document.getElementById('player1-img').classList.add('bounce2');
            document.getElementById('turn-circle').innerHTML = 'Winner!';
            document.getElementById('turn-cross').innerHTML = 'Loser!';
            document.getElementById('player2').classList.add('inactive');
            document.getElementById('player1').classList.remove('inactive');
            winsPlayer1++; 
            document.getElementById('points-player1').innerHTML = `<img src="img/donut.png">&nbsp;&nbsp;=  ${winsPlayer1}`; 
        }
    }

    else {
  
    }
}


function restartBtn() {
    document.getElementById('restart-btn').style = "display:flex"
}

function restartGame() {
    fields = []; 
    gameover = false;
    
    for (i = 0; i < 9; i++) {
            document.getElementById(`cross-${i}`).style = "display:none";
            document.getElementById(`circle-${i}`).style = "display:none";
            document.getElementById(`cross-${i}`).classList.remove('scale');
            document.getElementById(`circle-${i}`).classList.remove('scale');
}

    document.getElementById('player2-img').classList.remove('hithere');
    document.getElementById('player1-img').classList.remove('bounce2');
    document.getElementById('win-display').innerHTML = ''; 
    document.getElementById('restart-btn').style = "display:none"
    document.getElementById('turn-circle').innerHTML = '';
    document.getElementById('turn-cross').innerHTML = '';
    turns = 0; 
}



//responsive functions 
let responsive = window.matchMedia("(max-width:800px)")

function movePlayer2up() {
    if (responsive.matches) {
        document.getElementById('player2').innerHTML = ''; 
        document.getElementById('responsive-player2-position').innerHTML = `
        <div id="player2">
            <img src="img/gabel-und-messer-im-kreuz (2).png" id="player2-img">
            <p> Player 2 </p>
            <p id="turn-cross" style="min-height: 30px"> Your turn! </p>
         </div>
        `; 
    }

}




//