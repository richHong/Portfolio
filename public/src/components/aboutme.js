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
        <p>I am a software engineer that is passionate about building applications because I am able to break down a challenging goal into manageable steps.</p><br/>
        <p>I believe my applications are reflections of what I am as a software engineer. It starts from a humble beginning and with each iteration become better.</p><br/>
        <p>I built a web application called Hacker Habitat that models this idea. It started with a simple interface creating listings for homes and it grew into a full stack application with responsive maps and user messaging.</p><br/>
        <p>I am also a California registered pharmacist with a strong knowledge of prescription medications and community-based health care.</p><br/>
        <p>I am currently looking for a fulltime midlevel software engineering position or a per diem pharmacist position.</p>
      </div>
    );
  }
}
export default AboutMe;