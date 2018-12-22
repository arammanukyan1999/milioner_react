import React, { Component } from 'react';
import Login from './Login';
import Game from './Game';
import GameOver from './GameOver'
import './App.css';

class App extends Component {
  state = {
    view: 'login',
  }

  changeView = (view) => {
    this.setState({
      view
    });
  }
  render() {
    const { view } = this.state;
    return (
      <div className="app">
        {view === 'login' && <Login onViewChange={this.changeView}/>}
        {view === 'game' &&  <Game onViewChange={this.changeView} variants={this.state.variants} />}
        {view === 'gameOver' && <GameOver onViewChange={this.changeView }/>}
        
      </div>
    );
  }
}

export default App;
