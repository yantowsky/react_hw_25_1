import React, { Component } from 'react';
import './Emojis.css';

class Emojis extends Component {
    render() {
        return (
            <div className="emojis__wrapper">
                {this.props.emojis.map(({ id, vote }) => (
                    <div key={id} className="emojis__item">
                        <div onClick={() => this.props.handleVoteEmoji(id)} className="emojis__img">
                            {String.fromCodePoint(id)}
                        </div>
                        <div className="emojis__vote" style={{ opacity: vote ? 1 : 0 }}>
                            {vote}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Emojis;