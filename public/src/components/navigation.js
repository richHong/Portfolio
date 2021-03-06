import React, { Component }                     from 'react';
import { Nav, NavItem, NavDropdown, MenuItem }  from 'react-bootstrap';
import Modal                                    from 'react-modal';
import PDF                                      from 'react-pdfjs';

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : '8%',
    left              : '25%',
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    width             : '50%'           
  },
  content : {
    position                   : 'absolute',
    top                        : 0,
    left                       : 0,
    right                      : 0,
    bottom                     : 0,
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '1vh',
    outline                    : 'none',
    padding                    : '2vh',

  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state={modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div id="home">
        <Nav bsStyle="tabs" activeKey="1" >
          <NavItem eventKey="1" disabled>Portfolio</NavItem>
          <NavItem eventKey="2" onClick={this.openModal}>Resume</NavItem>
          <NavDropdown eventKey="3" title="Main Projects" id="nav-dropdown">
            <MenuItem eventKey="3.1" href="#slide1">Hacker Habitat</MenuItem>
            <MenuItem eventKey="3.2" href="#slide2">Artisanal</MenuItem>
            <MenuItem eventKey="3.3" href="#slide3">Feast.ly</MenuItem>
          </NavDropdown>
          <NavItem eventKey="4" href="#sides">Side Projects</NavItem>
          <NavItem eventKey="5" href="#aboutme">About Me</NavItem>
          <NavItem eventKey="6" href="#skills">Skills</NavItem>
          <NavItem eventKey="7" href="#contact">Contact</NavItem>
          <NavItem eventKey="8" href="http://linkedin.com/in/richhong" target="_blank" >
            <i className="fa fa-linkedin"></i>
          </NavItem>
          <NavItem eventKey="9" href="https://angel.co/richard-hong-5" target="_blank">
            <i className="fa fa-angellist"></i>
          </NavItem>
          <NavItem eventKey="10" href="https://github.com/richHong" target="_blank">
            <i className="fa fa-github"></i>
          </NavItem>
          <NavItem eventKey="11" href="http://richhong.github.io/" target="_blank">
            <i className="fa fa-book"></i>
          </NavItem>
        </Nav>
         <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          style={ modalStyles }
          >
          <div style={{ 'text-align':'center'}}>
            <a style={{ 'float':'left' }} href="../../assets/resume.pdf" download><i className="fa fa-download" aria-hidden="true" /> Download   </a>
            <a href="https://www.visualcv.com/richhong" target="_blank"><i className="fa fa-folder-open" aria-hidden="true" /> Open </a>
            <a style={{ 'float':'right'}} onClick={this.closeModal}>Close <i className="fa fa-times-circle" aria-hidden="true" /></a>

          </div>
          <div>
            <PDF file="../../assets/resume.pdf" />
          </div>
        </Modal>
      </div>
    );
  }
};
export default Navigation;