import React, { Component } from 'react';
import './Coin.css';
class Coin extends Component {
    static defaultProps = {
        side: false
    }
    render() {
        let src = this.props.side ? 'https://tinyurl.com/react-coin-heads-jpg' : 'https://tinyurl.com/react-coin-tails-jpg';
        return (
            <div className="Coin">
                <h1>Let's flip a coin!</h1>
                <img src={src} alt="" />
            </div>
        );
    }
}


export default Coin;