import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

export default class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value : null,
    };
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
};



// export default Game;
