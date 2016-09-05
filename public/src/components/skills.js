import React, { Component } from 'react';
import { Tooltip }          from 'react-bootstrap';
import SingleSkill          from './singleSkill';

class Skills extends Component {
  render() {
    return (
      <div id='skills' className='slide' name='skills'>
        <a className="up" href="#aboutme"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
        <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="down" href="#contact"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        <h1>Skills</h1>
        <SingleSkill skillIcon='../../assets/icons/angular.png' skillName='Angular'/>
        <SingleSkill skillIcon='../../assets/icons/backbone.png' skillName='Backbone'/>
        <SingleSkill skillIcon='../../assets/icons/bootstrap.png' skillName='Bootstrap'/>
        <SingleSkill skillIcon='../../assets/icons/css3.png' skillName='CSS3'/>
        <SingleSkill skillIcon='../../assets/icons/expressjs.png' skillName='Express'/>
        <SingleSkill skillIcon='../../assets/icons/github.png' skillName='Github'/>
        <SingleSkill skillIcon='../../assets/icons/heroku.png' skillName='Heroku'/>
        <SingleSkill skillIcon='../../assets/icons/html5.png' skillName='HTML5'/>
        <SingleSkill skillIcon='../../assets/icons/jquery.png' skillName='JQuery'/>
        <SingleSkill skillIcon='../../assets/icons/js.png' skillName='Javascript'/>
        <SingleSkill skillIcon='../../assets/icons/mocha.png' skillName='Mocha'/>
        <SingleSkill skillIcon='../../assets/icons/mongodb.png' skillName='MongoDB'/>
        <SingleSkill skillIcon='../../assets/icons/mysql.png' skillName='MySQL'/>
        <SingleSkill skillIcon='../../assets/icons/node.png' skillName='Node'/>
        <SingleSkill skillIcon='../../assets/icons/react.png' skillName='React'/>
        <SingleSkill skillIcon='../../assets/icons/redux.png' skillName='Redux'/>
        <SingleSkill skillIcon='../../assets/icons/socketio.png' skillName='Socket.io'/>
        <SingleSkill skillIcon='../../assets/icons/underscore.png' skillName='Underscore'/>
      </div>
    );
  }
}
export default Skills;