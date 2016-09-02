import React, { Component } from 'react';
import { Tooltip }          from 'react-bootstrap';
import Single               from './singleSkill';


class Skills extends Component {
  render() {
    return (
      <div id='skills' className='slide' name='skills'>
        <a className="up" href="#aboutme"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
        <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="down" href="#contact"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        
        <h1>Skills</h1>
        <Single skillIcon='../../assets/icons/angular.png' skillName='Angular'/>
        <Single skillIcon='../../assets/icons/backbone.png' skillName='Backbone'/>
        <Single skillIcon='../../assets/icons/bootstrap.png' skillName='Bootstrap'/>
        <Single skillIcon='../../assets/icons/css3.png' skillName='CSS3'/>
        <Single skillIcon='../../assets/icons/expressjs.png' skillName='Express'/>
        <Single skillIcon='../../assets/icons/github.png' skillName='Github'/>
        <Single skillIcon='../../assets/icons/heroku.png' skillName='Heroku'/>
        <Single skillIcon='../../assets/icons/html5.png' skillName='HTML5'/>
        <Single skillIcon='../../assets/icons/jquery.png' skillName='JQuery'/>
        <Single skillIcon='../../assets/icons/js.png' skillName='Javascript'/>
        <Single skillIcon='../../assets/icons/mocha.png' skillName='Mocha'/>
        <Single skillIcon='../../assets/icons/mongodb.png' skillName='MongoDB'/>
        <Single skillIcon='../../assets/icons/mysql.png' skillName='MySQL'/>
        <Single skillIcon='../../assets/icons/node.png' skillName='Node'/>
        <Single skillIcon='../../assets/icons/react.png' skillName='React'/>
        <Single skillIcon='../../assets/icons/redux.png' skillName='Redux'/>
        <Single skillIcon='../../assets/icons/socketio.png' skillName='Socket.io'/>
        <Single skillIcon='../../assets/icons/underscore.png' skillName='Underscore'/>

      </div>
    );
  }
}
export default Skills;