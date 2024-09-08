import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        return (
            <>
                {this.props.type === 'primary' ? <h1>{this.props.text}</h1> : <h2>{this.props.text}</h2>}
            </>
        );
    }
}

export default Title;