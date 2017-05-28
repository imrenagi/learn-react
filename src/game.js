import React from 'react';
import Board from './Board';
import NavigationBar from './NavBar';
import './index.css';

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>

    );
  }
}
