import React, { Component } from 'react';
import  { PropTypes } from 'prop-types';

//@components
import Tile from '../tile/tile';

import "./board.scss";

class Board extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { tiles, handleUpdateTileState } = this.props;
        const tileElements = tiles.map( (tile, index) => {
            return (
                <Tile key={index} handleUpdateTileState={handleUpdateTileState} tileIndex={index} tile={tile} />
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
    handleUpdateTileState: PropTypes.func
};

module.exports = Board;
