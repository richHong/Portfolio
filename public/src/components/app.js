import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>

        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Projects</a></li>
        </ul>

        <div id="title" className="slide header">
          <h1>Richard Hong</h1>
        </div>

        <div id="slide1" className="slide">
          <div className="title">
            <h1>Hacker Habitat</h1>
            <p>Echo park occupy +1 austin church-key freegan. Franzen drinking vinegar organic intelligentsia kogi schlitz twee, iPhone authentic helvetica actually. Bicycle rights cardigan tacos, ugh occupy PBR&B ethical sustainable bespoke. Irony selfies viral, keffiyeh keytar helvetica four loko sartorial. Pork belly flexitarian whatever flannel food truck, pickled chicharrones quinoa PBR&B iPhone. Pickled thundercats YOLO four loko readymade helvetica. Readymade viral venmo irony chambray.</p>
          </div>
          <img className="picLeft" src="../assets/hackerhabitat.png" />
        </div>

        <div id="slide2" className="slide">
          <div className="title">
            <h1>Artisinal</h1>
            <p>Gluten-free pabst pug, biodiesel kombucha tousled raw denim hoodie crucifix trust fund seitan. Single-origin coffee jean shorts pop-up tilde, irony knausgaard aesthetic man bun portland brooklyn truffaut kale chips shoreditch migas. Selvage lo-fi fanny pack fap. Man bun kogi crucifix, brooklyn cred franzen sartorial pinterest wolf keffiyeh fap. Pork belly master cleanse fingerstache butcher freegan. Mixtape XOXO sriracha kickstarter. Pinterest master cleanse deep v, poutine put a bird on it pork belly vegan banh mi intelligentsia mustache street art fanny pack chartreuse jean shorts bespoke.</p>
          </div>
          <img className="picRight" src="../assets/artisinal.png" />
        </div>

        <div id="slide3" className="slide">
          <div className="title">
            <h1>Feast.ly</h1>
            <p>Jean shorts intelligentsia next level mixtape everyday carry, humblebrag cardigan master cleanse. Forage tacos sartorial hammock, disrupt four dollar toast heirloom pug beard actually. Fanny pack literally art party mumblecore, viral flannel direct trade tofu squid wayfarers meh whatever bitters helvetica. Squid flannel helvetica shabby chic tilde meh. Lo-fi pickled tilde schlitz scenester. Pug street art messenger bag, photo booth typewriter swag fanny pack cronut tacos blog put a bird on it try-hard. Kogi tilde selfies farm-to-table flexitarian, small batch shoreditch asymmetrical craft beer hashtag selvage wayfarers pour-over 90's.</p>
          </div>
          <img className="picLeft" src="../assets/feastly.png" />
        </div>

        <div id="slide4" className="slide">
          <div className="title">
            <h1></h1>
            <p></p>
          </div>
          <img className="picRight" src="" />
        </div>

        <div id="slide5" className="slide">
          <div className="title">
            <h1></h1>
            <p></p>
          </div>
          <img className="picLeft" src="" />
        </div>

        <div className="header">
          <footer className="footer-distributed">
            <div className="footer-left">
              <h3>Portfolio</h3>
              <p className="footer-company-name">Richard Hong &copy; 2016</p>
              <div className="footer-icons">
                <a href="http://linkedin.com/in/richhong"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-angellist"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>
                <a href="#"><i className="fa fa-th-large"></i></a>
              </div>
            </div>
            <div className="footer-right">
              <h3>Contact Me</h3>
              <form>
                <input type="text" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message"></textarea>
                <button>Send</button>
              </form>
            </div>
          </footer>
        </div>

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