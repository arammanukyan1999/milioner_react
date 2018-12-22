import React from 'react';

export default ({onViewChange}) => (
    <div className='game-over'>
        <h3>Game Over</h3>
        <button onClick={() => onViewChange('login')}>New Game</button>
        <button onClick = { () => onViewChange('game')}>Rettry</button>
    </div>
)