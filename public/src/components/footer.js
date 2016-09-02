import React, { Component } from 'react';

class Footer extends Component {
  sendEmail(e){
    e.preventDefault();

    let sender  = this.sender.value,
        message = this.message.value;

      fetch('/api/email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "personalizations": [
            {
              "to": [
                {
                  "email": "rich.hong@gmail.com"
                }
              ],
              "subject": "Portfolio Site Message"
            }
          ],
          "from": {
            "email": sender
          },
          "content": [
            {
              "type": "text/plain",
              "value": message
            }
          ]
        })
      })
      .then(res => {
        if(res.status === 202){
          alert("Your Message was Sent");
        } else {
          alert("Your Message Could Not Be Sent");
        }
      });
  }
  render(){
    return (
      <div id="contact"className="header">
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>Portfolio</h3>
            <p className="footer-company-name">Richard Hong &copy; 2016</p>
            <div className="footer-icons">
              <a href="http://linkedin.com/in/richhong" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="https://angel.co/richard-hong-5" target="_blank"><i className="fa fa-angellist"></i></a>
              <a href="https://github.com/richHong" target="_blank"><i className="fa fa-github"></i></a>
              <a href="http://richhong.github.io/" target="_blank"><i className="fa fa-th-large"></i></a>
            </div>
          </div>
          <div className="footer-right">
            <h3>Contact Me</h3>
            <form onSubmit={e => this.sendEmail(e)}>
              <input type="email" name="email" placeholder="Email" ref={ input => this.sender = input }required/>
              <textarea name="message" placeholder="Message" ref={ input => this.message = input }required></textarea>
              <button>Send</button>
            </form>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;