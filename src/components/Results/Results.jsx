import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
    render() {
        const winnerEmoji = this.props.emojis.reduce((prev, current) => prev.vote > current.vote ? prev : current, {});
        return (
            <div className="emoji-winner">
                <p className="winner__title">
                    Переможець:
                </p>
                <div className="winner__img">
                    {String.fromCodePoint(winnerEmoji.id)}
                </div>
                <p className="winner__vote">
                    Кількість голосів: {winnerEmoji.vote}
                </p>
            </div>
        );
    }
}

export default Results;