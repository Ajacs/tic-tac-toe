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
        const {tileIndex, handleUpdateTileState} = this.props;
        handleUpdateTileState(tileIndex);
    }

    render() {
        const {tileClicked} = this.state;
        const { tile } = this.props;
        console.log("tile => ", tile);
        const marker = tile != 0 ? <span className="tile__marker">{tile}</span> : '';
        return (
            <div className="tile" onClick={this.handleOnClick}>
                {marker}
            </div>
        )
    }
}

Tile.propTypes = {
    tile: PropTypes.any,
    tileIndex: PropTypes.number,
    handleUpdateTileState: PropTypes.func
};

module.exports = Tile;
