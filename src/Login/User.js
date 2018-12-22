import React from 'react';

export default ({ user }) => (
    <li className="user">
        <span>{ user.nickName }</span>
        <span>{ user.score }</span>
    </li>
)