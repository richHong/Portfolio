import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutme" className="slide" name="aboutme">
        <a className="up" href="#sides"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
        <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="down" href="#skills"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        <h1>About Me</h1>
        <p>Hello I am a software engineer.</p>
      </div>
    );
  }
}
export default AboutMe;