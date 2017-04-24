import React, { Component } from 'react';

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
        this.setState({tileClicked: true });
    }

    render() {
        const { tileClicked } = this.state;
        const marker = tileClicked ? <span className="tile__marker">X</span> : '';
        return (
            <div className="tile" onClick={this.handleOnClick}>
                {marker}
            </div>
        )
    }
}

module.exports = Tile;