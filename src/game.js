import React from 'react';
import Board from './Board';
import NavigationBar from './NavBar';
import AsyncGettingStartedExample from './components/AsyncMap';

import './index.css';

export default class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <NavigationBar />
        </div>
        <div className="row">
          <AsyncGettingStartedExample />
        </div>
        <div className="row">
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div></div>
              <ol></ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
