import React, { Component }                     from 'react';
import { Nav, NavBar, NavItem, NavDropdown, MenuItem }  from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" >
        <NavItem eventKey="1" disabled>Portfolio</NavItem>
        <NavItem eventKey="2" href='#aboutme'>About Me</NavItem>
        <NavItem eventKey="3" href='#skills'>Skills</NavItem>
        <NavDropdown eventKey="4" title="Projects" id="nav-dropdown">
          <MenuItem eventKey="4.1" href='#slide1'>Hacker Habitat</MenuItem>
          <MenuItem eventKey="4.2" href='#slide2'>Artisanal</MenuItem>
          <MenuItem eventKey="4.3" href='#slide3'>Feast.ly</MenuItem>
        </NavDropdown>
        <NavItem href="http://linkedin.com/in/richhong" target="_blank" >
          <i className="fa fa-linkedin"></i>
        </NavItem>
        <NavItem href="https://angel.co/richard-hong-5" target="_blank">
          <i className="fa fa-angellist"></i>
        </NavItem>
        <NavItem href="https://github.com/richHong" target="_blank">
          <i className="fa fa-github"></i>
        </NavItem>
        <NavItem href="http://richhong.github.io/" target="_blank">
          <i className="fa fa-th-large"></i>
        </NavItem>
      </Nav>
    );
  }
};
export default Navigation;