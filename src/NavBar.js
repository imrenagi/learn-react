import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

// import 'bootstrap/dist/css/bootstrap-theme.css';

export default class NavigationBar extends React.Component {

  selectButton(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (
      <Nav bsStyle="pills" activeKey={1} onSelect={this.selectButton}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    );
  }
};
