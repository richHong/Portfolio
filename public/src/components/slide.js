import React, { Component } from 'react';

class Slide extends Component {
  render(){
    return (
      <div id={ this.props.id } className="slide" name={ this.props.href }>
          <div className="title">
            <h1>{ this.props.title }</h1>
            <br />
            <p>{ this.props.description }</p>
            <br />
            <span className='techStack'>{this.props.techStack.join(' • ')}</span>
            <br /><br/>
            <a href={ this.props.href }>Live</a> | <a href={ this.props.github }>Github</a>
          </div>
        <a href={ this.props.href }>
          <img className={ this.props.picSide } src={ this.props.image } />
        </a>


      </div>
    )
  }
};
export default Slide;