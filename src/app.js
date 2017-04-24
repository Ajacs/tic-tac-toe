import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//@components
import Board from './components/board/board';
import GameDetails from './components/gameDetails/gameDetails';
import './styles/base.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tilesState: [0,0,0,0,0,0,0,0,0],
            currentUser: 'X'
        };
        this.handleOnResetClicked = this.handleOnResetClicked.bind(this);
        this.handleOnNewGameClicked = this.handleOnNewGameClicked.bind(this);
        this.handleUpdateTileState = this.handleUpdateTileState.bind(this);
    }

    handleOnResetClicked() {
        const newState = Object.assign({}, this.state);
        const { tilesState } = newState;
        tilesState.forEach((tile, index) => {
            tilesState[index] = 0
        });
        this.setState(newState);
    }

    handleOnNewGameClicked() {

    }

    handleUpdateTileState(tileIndex) {
        const newState = Object.assign({}, this.state);
        const { tilesState } = newState;
        tilesState.forEach( (tile, index) => {
            if(index === tileIndex) {
                tilesState[index] = 'X';
            }
        });
        this.setState(newState);
    }

    render() {
        console.log("state => ", this.state);
        const { tilesState } = this.state;
        return (
                <div className="main">
                    <div className="main__header">
                        <h1 className="main__header--title">TtToe</h1>
                        <button className="main__button main__button--secondary" onClick={this.handleOnResetClicked}>Reset Game</button>
                        <button className="main__button main__button--primary">New Game</button>
                    </div>
                    <Board tiles={tilesState} handleUpdateTileState={this.handleUpdateTileState} />
                    <GameDetails />
                </div>
            )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
module.exports = App;
