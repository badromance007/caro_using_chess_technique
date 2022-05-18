const START_FEN = 'XXXO38/95O/96/96/96/96/96/96/96/OOO93/96/96/96/96/95O x - - 0 1';
const EMPTY = 0
const X = 1
const O = 2
const OFFBOARD = 3

// square incoding
const A15 = 18, B15 = 19, C15 = 20, D15 = 21, E15 = 22, F15 = 23, G15 = 24, H15 = 25, I15 = 26, J15 = 27, K15 = 28, L15 = 29, M15 = 30, N15 = 31, O15 = 32, P15 = 33;
const A14 = 35, B14 = 36, C14 = 37, D14 = 38, E14 = 39, F14 = 40, G14 = 41, H14 = 42, I14 = 43, J14 = 44, K14 = 45, L14 = 46, M14 = 47, N14 = 48, O14 = 49, P14 = 50;
const A13 = 52, B13 = 53, C13 = 54, D13 = 55, E13 = 56, F13 = 57, G13 = 58, H13 = 59, I13 = 60, J13 = 61, K13 = 62, L13 = 63, M13 = 64, N13 = 65, O13 = 66, P13 = 67;
const A12 = 69, B12 = 70, C12 = 71, D12 = 72, E12 = 73, F12 = 74, G12 = 75, H12 = 76, I12 = 77, J12 = 78, K12 = 79, L12 = 80, M12 = 81, N12 = 82, O12 = 83, P12 = 84;
const A11 = 86, B11 = 87, C11 = 88, D11 = 89, E11 = 90, F11 = 91, G11 = 92, H11 = 93, I11 = 94, J11 = 95, K11 = 96, L11 = 97, M11 = 98, N11 = 99, O11 = 100, P11 = 101;
const A10 = 103, B10 = 104, C10 = 105, D10 = 106, E10 = 107, F10 = 108, G10 = 109, H10 = 110, I10 = 111, J10 = 112, K10 = 113, L10 = 114, M10 = 115, N10 = 116, O10 = 117, P10 = 118;
const A9 = 120, B9 = 121, C9 = 122, D9 = 123, E9 = 124, F9 = 125, G9 = 126, H9 = 127, I9 = 128, J9 = 129, K9 = 130, L9 = 131, M9 = 132, N9 = 133, O9 = 134, P9 = 135;
const A8 = 137, B8 = 138, C8 = 139, D8 = 140, E8 = 141, F8 = 142, G8 = 143, H8 = 144, I8 = 145, J8 = 146, K8 = 147, L8 = 148, M8 = 149, N8 = 150, O8 = 151, P8 = 152;
const A7 = 154, B7 = 155, C7 = 156, D7 = 157, E7 = 158, F7 = 159, G7 = 160, H7 = 161, I7 = 162, J7 = 163, K7 = 164, L7 = 165, M7 = 166, N7 = 167, O7 = 168, P7 = 169;
const A6 = 171, B6 = 172, C6 = 173, D6 = 174, E6 = 175, F6 = 176, G6 = 177, H6 = 178, I6 = 179, J6 = 180, K6 = 181, L6 = 182, M6 = 183, N6 = 184, O6 = 185, P6 = 186;
const A5 = 188, B5 = 189, C5 = 190, D5 = 191, E5 = 192, F5 = 193, G5 = 194, H5 = 195, I5 = 196, J5 = 197, K5 = 198, L5 = 199, M5 = 200, N5 = 201, O5 = 202, P5 = 203;
const A4 = 205, B4 = 206, C4 = 207, D4 = 208, E4 = 209, F4 = 210, G4 = 211, H4 = 212, I4 = 213, J4 = 214, K4 = 215, L4 = 216, M4 = 217, N4 = 218, O4 = 219, P4 = 220;
const A3 = 222, B3 = 223, C3 = 224, D3 = 225, E3 = 226, F3 = 227, G3 = 228, H3 = 229, I3 = 230, J3 = 231, K3 = 232, L3 = 233, M3 = 234, N3 = 235, O3 = 236, P3 = 237;
const A2 = 239, B2 = 240, C2 = 241, D2 = 242, E2 = 243, F2 = 244, G2 = 245, H2 = 246, I2 = 247, J2 = 248, K2 = 249, L2 = 250, M2 = 251, N2 = 252, O2 = 253, P2 = 254;
const A1 = 256, B1 = 257, C1 = 258, D1 = 259, E1 = 260, F1 = 261, G1 = 262, H1 = 263, I1 = 264, J1 = 265, K1 = 266, L1 = 267, M1 = 268, N1 = 269, O1 = 270, P1 = 271;

// coordinates encoding
const COORDINATES = [
    'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 
    'XXX', 'A15', 'B15', 'C15', 'D15', 'E15', 'F15', 'G15', 'H15', 'I15', 'J15', 'K15', 'L15', 'M15', 'N15', 'O15', 'XXX', 
    'XXX', 'A14', 'B14', 'C14', 'D14', 'E14', 'F14', 'G14', 'H14', 'I14', 'J14', 'K14', 'L14', 'M14', 'N14', 'O14', 'XXX', 
    'XXX', 'A13', 'B13', 'C13', 'D13', 'E13', 'F13', 'G13', 'H13', 'I13', 'J13', 'K13', 'L13', 'M13', 'N13', 'O13', 'XXX', 
    'XXX', 'A12', 'B12', 'C12', 'D12', 'E12', 'F12', 'G12', 'H12', 'I12', 'J12', 'K12', 'L12', 'M12', 'N12', 'O12', 'XXX', 
    'XXX', 'A11', 'B11', 'C11', 'D11', 'E11', 'F11', 'G11', 'H11', 'I11', 'J11', 'K11', 'L11', 'M11', 'N11', 'O11', 'XXX', 
    'XXX', 'A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10', 'K10', 'L10', 'M10', 'N10', 'O10', 'XXX', 
    'XXX', 'A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9', 'K9', 'L9', 'M9', 'N9', 'O9', 'XXX', 
    'XXX', 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'K8', 'L8', 'M8', 'N8', 'O8', 'XXX', 
    'XXX', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7', 'K7', 'L7', 'M7', 'N7', 'O7', 'XXX', 
    'XXX', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6', 'K6', 'L6', 'M6', 'N6', 'O6', 'XXX', 
    'XXX', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5', 'K5', 'L5', 'M5', 'N5', 'O5', 'XXX', 
    'XXX', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'K4', 'L4', 'M4', 'N4', 'O4', 'XXX', 
    'XXX', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'L3', 'M3', 'N3', 'O3', 'XXX', 
    'XXX', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'L2', 'M2', 'N2', 'O2', 'XXX', 
    'XXX', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'XXX', 
    'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX',
]

const PIECE_TO_CHAR = ['.', 'X', 'O'];
const CHAR_TO_PIECE = {
    'X': X,
    'O': O
}

// directions
const UP = -17;
const DOWN = +17;
const LEFT = -1;
const RIGHT = +1;

// check win offsets
// const ORTHOGONALS = [LEFT, RIGHT, UP, DOWN]; 
// const DIAGONALS = [UP + LEFT, DOWN + RIGHT, UP + RIGHT, DOWN + LEFT];
const VERTICAL_LINE = [UP, DOWN]; // vertical line
const HORIZONTAL_LINE = [LEFT, RIGHT]; // horizontal line
const BACKWARD_LINE = [UP + LEFT, DOWN + RIGHT] ; // \ (backward) diagonal line
const FOREWARD_LINE = [UP + RIGHT, DOWN + LEFT] ; // \ (foreward) diagonal line

// board array
var caroBoard = new Array(17 * 17);

// side to move
var side = X;

// reset board array & game state
function resetBoard() {
    for (let row = 0; row < 17; row++) {
        for (let columm = 0; columm < 17; columm++) {
            let square = row * 17 + columm;

            if (COORDINATES[square] != 'XXX') caroBoard[square] = EMPTY;
            else caroBoard[square] = OFFBOARD;
        }
    }

    // reset game state
    side = X;
}

function printBoard() {
    let boardString = '';
    for (let row = 0; row < 17; row++) {
        for (let column = 0; column < 17; column++) {
            let square = row * 17 + column;

            if (caroBoard[square] != OFFBOARD) {
                let index = 16 - row
                if (column == 1) boardString += (index > 9 ? `${index}  ` : `${index}   `);
                boardString += PIECE_TO_CHAR[caroBoard[square]] + ' ';
            };
        }

        if (row < 16) boardString +=  '\n';
    }
    boardString += '    A B C D E F G H I J K L M N O\n\n';
    boardString += '                                 side: ' + (side == X ? 'X' : 'O') + '\n';
    console.log(boardString);
}

function setBoard(fen) {
    resetBoard();

    let index = 0;

    for (let row = 0; row < 17; row++) {
        for (let column = 0; column < 17; column++) {
            let square = row * 17 + column;

            if (caroBoard[square] != OFFBOARD) {
                // parse pieces
                if (fen[index].charCodeAt() == 'X'.charCodeAt() || fen[index].charCodeAt() == 'O'.charCodeAt()) {
                    caroBoard[square] = CHAR_TO_PIECE[fen[index]];
                    index++;
                }

                // parse empty squares
                if (fen[index].charCodeAt() >= '0'.charCodeAt() && fen[index].charCodeAt() <= '9'.charCodeAt()) {
                    let offset = fen[index] - '0';
                    if (caroBoard[square] == EMPTY) column--;
                    column += offset;
                    index++;
                }

                if (fen[index] == '/') index++;
            }
        }
    }
    // parse side to move
    index++;
    side = (fen[index] == 'x') ? X : O;
}


setBoard(START_FEN);
printBoard();


/*

LOGIC

*/

function initBoard(rows, columns, initialValue) {
    var boardArray = [];
    for (let row = 0; row < rows; row++) {
        let boardRow = [];
        for (let column = 0; column < columns; column++) {
            boardRow[column] = initialValue;
        }
        boardArray[row] = boardRow;
    }
    return boardArray;
}

var Logic = function(player) {
    var gameSize = 5; // 5 in line
    var win = false;
    var cellsCount = 15;
    var board = initBoard(15, 15, 0);
    var maxPlayer = player || -1; // X = 1, O = -1
    const WIN = [
        [1, 1, 1, 1, 1], // X win
        [-1, -1, -1, -1, -1] // O win
    ];

    function findChildArrayInParentArray(parentArray, childArray) {
        let count;
        for (let i = 0; i <= parentArray.length - childArray.length; i++) {
            count = 0;
            for (let j = 0; j < childArray.length; j++) {
                if (parentArray[i + j] == childArray[j]) count++;
                else break;
            }
            if (count == childArray.length) return true;
        }
        return false;
    }

    function isThisDirectionWin(winArray, directionArray){
        for (let i = 0; i < winArray.length; i++) {
            if (findChildArrayInParentArray(directionArray, winArray[i])) return true;
        }
        return false;
    };

    function evaluateWinDirection(verticalLineArray, horizontalLineArray, backwardDiagonalLineArray, forwardDiagonalLineArray){ // 4 directions
        let winExist = false;
        let allDirections = [verticalLineArray, horizontalLineArray, backwardDiagonalLineArray, forwardDiagonalLineArray];
        for (let direction = 0; direction < allDirections.length; direction++) {
            if (isThisDirectionWin(WIN, allDirections[direction])) {
                winExist = true;
                break;
            }
        }
        return winExist;
    };


    var checkWin = function() {
        for (let row = 0; row < cellsCount; row++) {
            for (let column = 0; column < cellsCount; column++) {
                if (board[row][column] == 0) continue;
                let winExist = evaluateWinDirection(
                    getLineArray(board, board[row][column], row, column, 1, 0), // vertical line
                    getLineArray(board, board[row][column], row, column, 0, 1), // horizontal line
                    getLineArray(board, board[row][column], row, column, 1, 1), // \ (backward) diagonal line
                    getLineArray(board, board[row][column], row, column, 1, -1) // / (forward) diagonal line
                );
                if (winExist) win = true;
            }
        }
    };

    var getLineArray = function(board, currentPostion, row, column, dx, dy) {
        var lineArray = [currentPostion];
        for (let up = 1; up< gameSize; up++) { // check upward
            let upRow = row - dx * up;
            let upColumn = column - dy * up;
            if (upRow >= cellsCount || upColumn >= cellsCount || upRow < 0 || upColumn < 0) break;
            lineArray.unshift(board[upRow][upColumn]);
            if (board[upRow][upColumn] == -currentPostion) break;
        }
        for (let down = 1; down < gameSize; down++) { // check downward
            let downRow = row + dx * down;
            let downColumn = column + dy * down;
            if (downRow >= cellsCount || downColumn >= cellsCount || downRow < 0 || downColumn < 0) break;
            lineArray.push(board[downRow][downColumn]);
            if (board[downRow][downColumn] == -currentPostion) break;
        }
        return lineArray;
    };

    var getLogic = {};
    getLogic.winState = "";
    getLogic.makeMove = function(row, column, player) {
        var that = this;
        maxPlayer = player
        board[row][column] = maxPlayer;
        checkWin();
        if (win){
            that.winState = `${maxPlayer == 1 ? 'X' : 'O'} win`;
        }
    };
    return getLogic;
};



/*

MAIN

*/
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    var initLogic = new Logic();
    var logic = initLogic;
    var currentSide = 1; // player - O (-1), computer - X (1)
    var gameOver = false;

    if (currentSide == 1) {
        document.getElementById("message").textContent = "X turn";
    } else {
        document.getElementById("message").textContent = "O turn";
    }

    document.querySelectorAll('div.boardCol').forEach(boardColumn => {
        boardColumn.addEventListener('mousedown', handleMouseDown);
    })
    function handleMouseDown(e){
        if(gameOver) return "";
        var cell = e.currentTarget;
        if (cell.children[0].classList.contains("boardCellCircle")) return "";
        if (cell.children[0].classList.contains("boardCellCross")) return "";
        var indexes = cell.children[0].id.split("-");
        logic.makeMove(indexes[0],indexes[1], currentSide);
        cell.children[0].classList.add(getMoveClass());

        currentSide *= -1; // flip side
        if (currentSide == 1) {
            document.getElementById("message").textContent = "X turn";
        } else {
            document.getElementById("message").textContent = "O turn";
        }

        function getMoveClass(){
            if (currentSide === 1) {
                return "boardCellCross";
            }
            return "boardCellCircle";
        }
        if (logic.winState !== ""){
            let message = document.getElementById("message");
            message.textContent = logic.winState;
            gameOver = true;

            if (logic.winState === "you lost"){
                message.classList.add("looseState");
            }
        }
    }

    document.addEventListener('wheel', handleScale)
    function handleScale(e){
        var value = 100;
        var maxWidth = 700;
        var minValue = 300;
        var board = document.querySelector(".board");
        if ((e.deltaY < 0) && board.offsetWidth < maxWidth){ // scroll mouse up
            board.style.width = (board.offsetWidth + value) + 'px';
            board.style.height = (board.offsetHeight + value) + 'px';
        }
        if ((e.deltaY > 0) && board.offsetWidth > minValue){ // scroll mouse down
            board.style.width = (board.offsetWidth - value) + 'px';
            board.style.height = (board.offsetHeight - value) + 'px';
        }
    }

    document.getElementById("new-O").addEventListener("click", handleNewGame);
    document.getElementById("new-X").addEventListener("click", handleNewGame);
    function handleNewGame(e){
        e.stopPropagation()
        var index =  e.target.id.split("-")[1];

        document.querySelectorAll('.boardCell').forEach(cell => {
            cell.classList.remove('boardCellCross', 'boardCellCircle')
        })
        gameOver = false;
        document.getElementById("message").classList.remove("looseState");
        document.getElementById("message").textContent = "";
        if (index === "O"){
            logic = new Logic();
            currentSide = -1;
            document.getElementById("message").textContent = "O turn";
        }
        if (index === "X"){
            logic = new Logic(1);
            currentSide = 1;
            document.getElementById("message").textContent = "X turn";
        }
        document.getElementById("check").checked = false;
    }
});