import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: null,
            flips: 0,
            heads: 0,
            tails: 0
        }
        this.handleFlipper = this.handleFlipper.bind(this);
    }

    handleFlipper() {
        this.setState(this.flipCoin);
    }

    flipCoin(currState) {
        let res = Math.floor(Math.random() * 2);
        let heads = res ? currState.heads + 1 : currState.heads;
        let tails = !res ? currState.tails + 1 : currState.tails;

        return { side: res, flips: heads + tails, heads: heads, tails: tails };
    }

    render() {
        return (
            <div>
                <Coin side={this.state.side} />
                <button onClick={this.handleFlipper}>Flip Me!</button>
                <div>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails</div>
            </div>
        );
    }
}

export default Flipper;