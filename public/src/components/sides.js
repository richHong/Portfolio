import React, { Component } from 'react';
import SingleSide           from './singleSide';

class Sides extends Component {
  render() {
    return (
      <div id='sides' className='slide'>
        <a className="up" href="#slide3"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
        <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="down" href="#aboutme"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        <h1>Side Projects</h1>
        <br/>
          <SingleSide 
          sideImage='../../assets/socketrps.png'
          sideName='Socket Rock Paper Scissors'
          description='Interactive two player game of rock paper scissors'
          techStack={['Socket.io', 'Express', 'Node','JQuery','Bootstrap']}
          href='https://socketrps.herokuapp.com/'/>
          <SingleSide 
          sideImage='../../assets/spotify.png'
          sideName='Spotify Babay'
          description='Responsive app to search your favorite artist'
          techStack={['Spotify','Express','Node','JQuery']}
          href='https://spotifybabay.herokuapp.com/'/>
          <SingleSide 
          sideImage='../../assets/pokemon.png'
          sideName='Pokemon Jukebox'
          description='Play your favorite Pokemon sounds'
          techStack={['PokeAPI','Soundcloud','Express','Node','React']}
          href='https://pokemonjukebox.herokuapp.com/'/>
      </div>
    );
  }
};
export default Sides;