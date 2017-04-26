import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//@components
import Board from './components/board/board';
import GameDetails from './components/gameDetails/gameDetails';

//@utilities
import GameStateHelper from './utilities/gameStateHelper';

//@constants
const { USER_PLAYER, COMPUTER_PLAYER } = require('./constants');
import './styles/base.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tilesState: [0,0,0,0,0,0,0,0,0],
            gameRunning: false,
            currentPlayer: USER_PLAYER
        };
        this.handleOnResetClicked = this.handleOnResetClicked.bind(this);
        this.handleOnNewGameClicked = this.handleOnNewGameClicked.bind(this);
        this.handleUpdateTileState = this.handleUpdateTileState.bind(this);
        this.handleAIUpdate = this.handleAIUpdate.bind(this);
        this.handleNewGameClicked = this.handleNewGameClicked.bind(this);
    }

    handleNewGameClicked() {
        const newState = Object.assign({}, this.state);
        if(!this.state.gameRunning) {
            newState.gameRunning = true;
            newState.tilesState = GameStateHelper.resetTilesState(newState.tilesState);
            this.setState(newState);
        }
    }

    handleOnResetClicked() {
        const newState = Object.assign({}, this.state);
        newState.tilesState = GameStateHelper.resetTilesState(newState.tilesState);
        this.setState(newState);
    }

    handleOnNewGameClicked() {
        this.state({gameRunning: true});
    }

    handleAIUpdate(data) {
        const newState = Object.assign({}, this.state);
        newState.tilesState = data[0];
        newState.currentPlayer = data[1];
        newState.gameRunning = true;
        if(GameStateHelper.checkWin(newState.tilesState, !newState.currentPlayer)) {
            newState.gameRunning = false;
        }
        this.setState(newState);
    };


    handleUpdateTileState(tileIndex) {
        const { tilesState, currentPlayer } = this.state;
        const [ updatedBoard, newUser ] = GameStateHelper.updateBoardState(tilesState, currentPlayer, tileIndex);
        this.setState({
            tilesState: updatedBoard,
            currentPlayer: newUser
        });
    }

    render() {
        const { tilesState, currentPlayer, gameRunning } = this.state;
        return (
                <div className="main">
                    <div className="main__header">
                        <h1 className="main__header--title">TtToe</h1>
                        <button className="main__button main__button--secondary" onClick={this.handleOnResetClicked}>Reset Game</button>
                        <button className="main__button main__button--primary" onClick={this.handleNewGameClicked}>New Game</button>
                    </div>
                    <Board
                        tiles={tilesState}
                        player={currentPlayer}
                        handleUpdateTileState={this.handleUpdateTileState}
                        handleAIUpdate={this.handleAIUpdate}
                        gameRunning={gameRunning}
                    />
                    <GameDetails tilesState={tilesState} player={currentPlayer} gameRunning={gameRunning}/>
                </div>
            )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
module.exports = App;
