import React, { Component } from 'react';
import PropTypes from 'prop-types';

//@components
import Tile from '../tile/tile';

import "./board.scss";

class Board extends Component {


    render() {
        const { tiles } = this.props;
        const tileElements = tiles.map( (tile, index) => {
            return (
                <Tile key={index}></Tile>
            )
        });
        console.log("tileElements => ", tileElements);
        return(
            <div className="board">
                {tileElements}
            </div>
        )
    }
}

Board.propTypes = {
    tiles: PropTypes.array
};

module.exports = Board;
