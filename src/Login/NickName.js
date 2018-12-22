import React, { Component } from 'react';
import './login.css';


export default class NickName extends Component {
    state = {
        nickName: '',
        hasError: false
    }

    handleInputChange = (e) => {
        this.setState({
            nickName: e.target.value
        });
    }

    confirm = () => {
        if (!this.state.nickName || this.state.nickName.length < 2) {
            this.setState({
                hasError: true
            });
            return;
        }
        this.props.changeView('game');
    }
    handleKey = (e) => {
        if (e.keyCode == 13) {
            if (!this.state.nickName || this.state.nickName.length < 2) {
                this.setState({
                    hasError: true
                });
                return;
            }
            this.props.changeView('game');
        }}
    render() {
        return (
            <div className="nick-name">
                <input className='input'
                     onKeyUp={this.handleKey}
                    onChange={this.handleInputChange}
                    value={this.state.nickName}
                    placeholder="Input your nickname">
                </input>
                {this.state.hasError && <span className="error">Invalid nickname</span>}
                <button  className='button' onClick={this.confirm}>Confirm</button>
            </div>
        );
    }
}