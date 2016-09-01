import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <div className="header">
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>Portfolio</h3>
            <p className="footer-company-name">Richard Hong &copy; 2016</p>
            <div className="footer-icons">
              <a href="http://linkedin.com/in/richhong" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="https://angel.co/richard-hong-5" target="_blank"><i className="fa fa-angellist"></i></a>
              <a href="https://github.com/richHong" target="_blank"><i className="fa fa-github"></i></a>
              <a href="http://richhong.github.io/" target="_blank"><i className="fa fa-th-large"></i></a>
            </div>
          </div>
          <div className="footer-right">
            <h3>Contact Me</h3>
            <form>
              <input type="text" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button>Send</button>
            </form>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;