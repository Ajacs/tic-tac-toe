import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import "./tile.scss";


class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tileClicked: false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const {tileIndex, handleUpdateTileState, tile, gameRunning} = this.props;
        if(tile === 0 && gameRunning) {
            handleUpdateTileState(tileIndex);
        }
    }

    render() {
        const {tileClicked} = this.state;
        const { tile } = this.props;
        let mark = tile;
        if(tile === 1) {
            mark = "X"
        } else if( tile === -1) {
            mark = "O"
        }
        const marker = tile !== 0 ? <span className="tile__marker">{mark}</span> : '';
        return (
            <div className="tile" onClick={this.handleOnClick} disabled={tile !== 0}>
                {marker}
            </div>
        )
    }
}

Tile.propTypes = {
    tile: PropTypes.any,
    tileIndex: PropTypes.number,
    handleUpdateTileState: PropTypes.func,
    gameRunning: PropTypes.bool
};

module.exports = Tile;
