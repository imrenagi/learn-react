import React from 'react';
import { Button, Image, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../static/css/index.css';
import './../static/css/colors.css';


export default class ImageHeader extends React.Component {

  render() {
    return (
      <div className="row header-bg">
        <div className="header-content align-items-center">
          <h1>Now Every House Can Be A Restaurant!</h1>
          <Button className="orange" content="See More Detail"/>
        </div>
      </div>

    );
  }
}
