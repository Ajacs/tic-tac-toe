import Board from '../components/board/board';
import React from 'react';
import ReactDOM from 'react-dom';


/*
tiles={tilesState}
player={currentPlayer}
handleUpdateTileState={this.handleUpdateTileState}
handleAIUpdate={this.handleAIUpdate}
gameRunning={gameRunning}
*/

const mockState = {
    tilesState: [0,0,0,0,0,0,0,0,0]
};

describe('TicTacToe', () => {
    it('Renders Board without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board tiles={mockState.tilesState} />, div);
    })
});