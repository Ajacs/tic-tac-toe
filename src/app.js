import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//@components
import Board from './components/board/board.js';

import './styles/base.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.initialState = [0,0,0,0,0,0,0,0,0];
    }

    render() {

            return (
                <div>
                    <h1>Tic - Tac - Toe</h1>
                    <Board tiles={this.initialState} />
                </div>
            )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
module.exports = App;
