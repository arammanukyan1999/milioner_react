import React, { Component } from 'react';
import List from './List';
import Nickname from './NickName';
import './login.css';

const users = [
    {
        nickName: 'Aram',
        score: 10
    },
    {
        nickName: 'Sona',
        score: 10
    },
    {
        nickName: 'Dmitri',
        score: 10
    }
]

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <Nickname changeView={this.props.onViewChange}/>
                <List users={users}/>
            </div>
        );
    }
}
