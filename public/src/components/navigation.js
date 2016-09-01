import React, { Component }                     from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem }  from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div className='fixed-navbar'>
        <Nav bsStyle="tabs" activeKey="1" >
          <NavItem eventKey="1" disabled>Portfolio</NavItem>
          <NavItem eventKey="2" href='#aboutme'>About Me</NavItem>
          <NavItem eventKey="3" href='#skills'>Skills</NavItem>
          <NavItem eventKey="4" href='#resume'>Resume</NavItem>
          <NavDropdown eventKey="5" title="Projects" id="nav-dropdown">
            <MenuItem eventKey="5.1" href='#slide1'>Hacker Habitat</MenuItem>
            <MenuItem eventKey="5.2" href='#slide2'>Artisanal</MenuItem>
            <MenuItem eventKey="5.3" href='#slide3'>Feast.ly</MenuItem>
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
      </div>
    );
  }
};
export default Navigation;