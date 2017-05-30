import React from 'react';
import { Button, Image, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../static/css/index.css';
import  './../static/css/colors.css';

export default class OrderStep extends React.Component {

  render() {
    return (
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Image src={this.props.img} className="img-responsive center-block step-thumbnail" />
            <h3 className="orange">{this.props.title}</h3>
            <p>{this.props.detail}</p>
          </div>
    );
  }
}
