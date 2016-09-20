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
          sideName='Socket RPS'
          description='Interactive two player game of rock paper scissors'
          techStack={['Socket.io', 'Express', 'Node','JQuery','Bootstrap']}
          github='https://github.com/richHong/socketrps'
          href='https://socketrps.herokuapp.com/'/>
          <SingleSide 
          sideImage='../../assets/spotify.png'
          sideName='Spotify Babay'
          description='Responsive app to search your favorite artist'
          techStack={['Spotify','Express','Node','JQuery','Bootstrap','Underscore']}
          github='https://github.com/richHong/spotify'
          href='https://spotifybabay.herokuapp.com/'/>
          <SingleSide 
          sideImage='../../assets/pokemon.png'
          sideName='Pokemon Jukebox'
          description='Add your favorite Pokemon and listen to their signature sounds'
          techStack={['PokeAPI','Soundcloud','Express','Node','React']}
          github='https://github.com/richHong/pokemon-jukebox'
          href='https://pokemonjukebox.herokuapp.com/'/>
          <SingleSide
          sideImage='../../assets/openemis.png'
          sideName='OpenEMIS'
          description='Set up web server for OpenEMIS installation for Justice Rising'
          techStack={['AWS EC2, Ubuntu, Apache, MySQL, PHP']}
          github='https://github.com/richHong/openEMIS'
          href='http://ec2-54-153-17-27.us-west-1.compute.amazonaws.com/openemis-school/' />
      </div>
    );
  }
};
export default Sides;