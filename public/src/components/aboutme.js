import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutme" className="slide" name="aboutme">
        <a className="up" href="#sides"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
        <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="down" href="#skills"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        <h1>About Me</h1>
        <br />
        <p>I am a software engineer that is thrilled about building applications because I am able to break down a huge goal into manageable steps.  My applications are reflections of what I am as a software engineer. They start from a humble beginning and with each iteration become better. I built a web application called Hacker Habitat that models this idea. I started with a simple app that created listings for homes and it grew into a full stack application that uses Google Maps and the Sendgrid API. I am currently a Hacker in Residence teaching and mentoring new students Javascript and object oriented programming.</p>
      </div>
    );
  }
}
export default AboutMe;