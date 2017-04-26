import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
//@components
import Scoreboard from '../scoreboard/scoreboard';
//@utilities
import GameStateHelper from '../../utilities/gameStateHelper';
const { COMPUTER_PLAYER } = require('../../constants');


class GameDetails extends Component {


    render() {
        const { tilesState, player, gameRunning } = this.props;
        const winner = GameStateHelper.checkWin(tilesState, !player);
        const isTie = !winner && GameStateHelper.checkFullBoard(tilesState);
        let winnerMessage;
        if(isTie) {
            winnerMessage = <h1>{`Its a tie`}</h1>;
        } else if(winner) {
            winnerMessage = <h1>{`The winner is the computer`}</h1>;
        } else {
            winnerMessage = null;
        }
        const gameRunningMessage = gameRunning ? 'Game runnning' : 'To start playing, please click New Game';
        return (
            <div className="scoreboard">
                <h1>{gameRunningMessage}</h1>
                {winnerMessage}
                <Scoreboard></Scoreboard>
            </div>
        )
    }
}

GameDetails.propTypes = {
    tilesState: PropTypes.array,
    player: PropTypes.bool,
    gameRunning: PropTypes.bool
};

module.exports = GameDetails;
