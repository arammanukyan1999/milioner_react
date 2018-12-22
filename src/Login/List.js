import React from 'react';
import UserItem from './User';

export default ({ users }) => (
    <ul className="users-list">
        {users.map((user, ind) => <UserItem user={user} key={ind}/>)}
    </ul>
);