import React, { Component } from 'react';
import '../styles/Home.css';


class Home extends Component {
  render() {
    return (
      <div>
      <div className="welcome">
        <div className="about">
          <p>Thanks for visiting smcf.io.</p>
          <p>I'm currently open for developer roles in Boston.'</p>
          <p>Feel free to view my resume, portfolio, and other stuff here. If you like what you see, <a class="email" href="mailto:sofia@smcf.io">send me an email</a>!</p>
        </div>
        <div className="specialties">
          <p>My specialties:</p>
          <li>Javascript</li>
          <li>HTML/CSS</li>
          <li>PHP, MariaDB</li>
          <li>Google Apps Script</li>
        </div>
      </div>
      <p>-Sofia</p>
      </div>
    );
  }
}
export default Home;
