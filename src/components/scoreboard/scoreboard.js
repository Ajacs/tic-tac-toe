import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


import "./scoreboard.scss";

class Scoreboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1 className="scoreboard__header">Scoreboard</h1>
                <table >
                    {/*<tr>*/}
                        {/*<th>Computer</th>*/}
                        {/*<th>User</th>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                        {/*<td>0</td>*/}
                        {/*<td>1</td>*/}
                    {/*</tr>*/}
                </table>
            </div>
        )
    }
}

module.exports = Scoreboard;
