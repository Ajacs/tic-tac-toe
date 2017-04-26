import React, { Component } from 'react';
import  { PropTypes } from 'prop-types';

//@components
import Tile from '../tile/tile';

import GameStateHelper from '../../utilities/gameStateHelper';
const { USER_PLAYER, COMPUTER_PLAYER } = require('../../constants');
import "./board.scss";

class Board extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps.player === COMPUTER_PLAYER) {
            this.props.handleAIUpdate(GameStateHelper.updateBoardState(newProps.tiles, newProps.player));
        }
    }

    render() {
        const { tiles, handleUpdateTileState, gameRunning } = this.props;
        const tileElements = tiles.map( (tile, index) => {
            return (
                <Tile
                    key={index}
                    handleUpdateTileState={handleUpdateTileState}
                    tileIndex={index}
                    tile={tile}
                    gameRunning={gameRunning}
                />
            )
        });
        return(
            <div className="board">
                {tileElements}
            </div>
        )
    }
}

Board.propTypes = {
    tiles: PropTypes.array,
    handleUpdateTileState: PropTypes.func,
    player: PropTypes.bool,
    handleAIUpdate: PropTypes.func,
    gameRunning: PropTypes.bool
};

module.exports = Board;
