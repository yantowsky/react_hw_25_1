import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render() {
        return (
            <div className="buttons__wrapper">
                <button className='button-results' onClick={this.props.handleShowResults}>{this.props.textResults}</button>
                <button className='button-reset' onClick={this.props.handleResetVotes}>{this.props.textReset}</button>
            </div>
        );
    }
}

export default Buttons;