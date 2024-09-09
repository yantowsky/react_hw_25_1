import React, { Component } from 'react';
import { EMOJIS } from './base_emojis';
import Title from "./components/Title/Title";
import Emojis from './components/Emojis/Emojis';
import Buttons from './components/Buttons/Buttons';
import Results from './components/Results/Results';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emojis: EMOJIS,
            showResults: false,
            presenceVote: false,
        }
        this.handleVoteEmoji = this.handleVoteEmoji.bind(this);
        this.handleResetVotes = this.handleResetVotes.bind(this);
        this.handleShowResults = this.handleShowResults.bind(this);
    }

    handleVoteEmoji = (id) => {
        this.setState(prevState => ({
            emojis: prevState.emojis.map(emoji => emoji.id === id ?
                { ...emoji, vote: emoji.vote + 1 } : emoji),
            showResults: false,
            presenceVote: true,
        }));
    }

    handleResetVotes = () => {
        this.setState(prevState => ({
            emojis: prevState.emojis.map(emoji => ({ ...emoji, vote: emoji.vote = 0 })),
            showResults: false,
            presenceVote: false,
        }))
    }
    
    handleShowResults = () => {
        this.setState({ showResults: true });
    }

    render() {
        const { emojis, showResults, presenceVote } = this.state;
        localStorage.setItem('emojis_vote', JSON.stringify(emojis));

        return (
            <>
                <div className='emojis-vote'>
                    <Title type='primary' text='Голосування за найкращий смайлик' />
                    <Emojis emojis={emojis} handleVoteEmoji={this.handleVoteEmoji} />
                </div>
                {presenceVote && <Buttons textResults='Show Results' textReset='Reset Votes'
                    handleResetVotes={this.handleResetVotes} handleShowResults={this.handleShowResults} />}
                {showResults && (
                    <div className='emojis-vote-results'>
                        <Title type='secondary' text='Результати голосування:' />
                        <Results emojis={emojis} />
                    </div>
                )}
            </>
        );
    }
}

export default App;