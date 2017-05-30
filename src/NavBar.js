import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button} from 'react-bootstrap'

// import 'bootstrap/dist/css/bootstrap-theme.css';

export default class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery : '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  selectButton(selectedKey) {
    alert('selected ' + selectedKey);
  }

  handleChange(obj) {
    this.setState({searchQuery: obj.target.value});
  }

  handleSearchClick() {
    alert(this.state.searchQuery);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Vessel Dashboard</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Map</NavItem>
            <NavItem eventKey={2} href="#">Directory</NavItem>
            <NavItem eventKey={3} href="#">Predicition</NavItem>
          </Nav>

          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" onChange={this.handleChange} />
            </FormGroup>
            {' '}
            <Button className="btn-primary" type="submit" onClick={this.handleSearchClick} >Search</Button>
          </Navbar.Form>

        </Navbar.Collapse>
      </Navbar>
    );
  }
};
