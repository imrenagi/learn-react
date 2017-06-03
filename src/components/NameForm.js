import React from 'react';
import { Button, Image, Header } from 'semantic-ui-react'

import 'bootstrap/dist/css/bootstrap.css';

export default class NameForm extends React.Component {

  constructor() {
    super();
    this.state = {
      value : 'Testing'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value : e.target.value})
  }

  handleSubmit(e) {
    alert('the value is ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
