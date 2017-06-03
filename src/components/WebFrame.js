import React from 'react';
// import { Button, Image, Header } from 'semantic-ui-react'
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../static/css/index.css';

export default class WebFrame extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data : ''
  //   }
  //   // this.fetch = this.fetch.bind(this);
  // }
  //
  // componentDidMount() {
  //   axios.get(`https://bango29.com`)
  //     .then(res => {
  //       // const posts = res.data.data.children.map(obj => obj.data);
  //       this.setState({data: res.data });
  //       console.log(res);
  //     });
  // }

  render() {
    return (
      // <div>
      //     {this.state.data}
      // </div>
      <div className="col-lg-6">
          <iframe className="split" src={this.props.url}>
            <p>Your browser does not support iframes.</p>
          </iframe>

      </div>
    );
  }
}
