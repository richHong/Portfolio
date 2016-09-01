import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Slide                from './slide';
import Footer               from './footer';
import Navigation           from './navigation';
import Front                from './front';

class App extends Component {
  render() {
    return (
      <div>
      
        <Navigation/>

        <Front />

         <Slide 
          id='slide1'
          href='https://hackerhabitatredux.herokuapp.com/'
          title='Hacker Habitat'
          description='Full stack web application used to quickly search and contact community-generated hacker houses'
          techStack={['Node', 'React', 'Express', 'Redux', 'MongoDB','Google Maps API', 'Sendgrid API']}
          image='../assets/hackerhabitat.png'
          picSide='picLeft' />

        <Slide 
          id='slide2'
          href='https://artisanalapp.herokuapp.com/#/'
          title='Artisanal'
          description='Full stack web application designed to help users search for delicious recipes'
          techStack={['MongoDB', 'Express','Angular', 'Node' ]}
          image='../assets/artisinal.png'
          picSide='picRight' />

        <Slide 
          id='slide3'
          href='https://feastlyapp.herokuapp.com/#/home'
          title='Feast.ly'
          description='Full stack web application for businesses and users to list and review artisan foods shops and restaurants'
          techStack={['MongoDB', 'Express','Angular', 'Node','Yummly API']}
          image='../assets/feastly.png'
          picSide='picLeft' />

        <Footer />

      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    example: state.example
  }
}
export default connect(mapStateToProps)(App);