const {
    COMPUTER_PLAYER,
    USER_PLAYER,
    WIN_OPTIONS,
    USER_VALUE,
    COMPUTER_VALUE
} = require('../constants');

const checkWin = (board, player) => {

    let value = player == USER_PLAYER ? USER_VALUE : COMPUTER_VALUE;

    for(let x = 0;x < 8;x++)
    {
        var win = true;

        for(let y = 0;y < 3;y++)
        {
            if(board[WIN_OPTIONS[x][y]] != value)
            {
                win = false;
                break;
            }
        }

        if(win)
            return true;
    }

    return false;
};


const checkFullBoard = (board) => {
    for(let x = 0; x < 9; x++) {
        if(board[x] === 0) {
            return false;
        }
    }
    return true;
};

const updateBoardState = (newBoard, player, tilePosition) => {
    if(player === USER_PLAYER) {
        newBoard[tilePosition] = USER_VALUE;
    } else {
        const depth = 0;
        const computerMovement = searchForBestMove(newBoard,depth, player);
        newBoard[computerMovement.index] = COMPUTER_VALUE;
    }
    const nextPlayer = nextTurn(player);
    return [newBoard, nextPlayer];
};




const searchForBestMove = (board, depth, player) => {

    if(checkWin(board, !player)) {
        return -10 + depth;
    }

    if(checkFullBoard(board)) {
        return 0;
    }

    const value = player === USER_PLAYER ? USER_VALUE : COMPUTER_VALUE;
    let max = -Infinity;
    let index = 0;

    for(let x = 0; x < board.length; x++ ) {
        if(board[x] === 0) {
            const newBoard = board.slice();
            newBoard[x] = value;

            const moveval = -searchForBestMove(newBoard, depth + 1, !player);

            if(moveval > max) {
                max = moveval;
                index = x;
            }
        }
    }

    if(depth === 0) {
        return {"index": index};
    }
    return max;
};



const nextTurn = (player) => {
    return player === COMPUTER_PLAYER ? USER_PLAYER : COMPUTER_PLAYER;
};

const resetTilesState = (tilesState) => {
     tilesState.forEach((tile, index) => {
        tilesState[index] = 0
    });
     return tilesState;
};

module.exports = {
    nextTurn,
    updateBoardState,
    checkWin,
    resetTilesState
};
