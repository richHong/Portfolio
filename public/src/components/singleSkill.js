import React, { Component }      from 'react';
import { Image }                 from 'react-bootstrap';

class SingleSkill extends Component {
  render() {
    return (
      <div className='skill-icon'>
        <img className='skill-image' src={ this.props.skillIcon } />
        <h4>{ this.props.skillName }</h4>
      </div>
    );
  };
};
export default SingleSkill;