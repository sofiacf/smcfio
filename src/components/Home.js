import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <table><tbody><tr>
        <td style={{width: '60%'}}>
            <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
            <p>I'm currently open for developer roles in Boston.'</p>
            <p>You can find my resume, portfolio, and other stuff here. If you like what you see, <a className="email" href="mailto:sofia@smcf.io">send me an email</a>!</p>
            <p>-Sofia</p>
      </td>
      <td>
          <p>
          Specialties:
          </p>
          <ul>
            <li>JavaScript, HTML/CSS, React</li>
            <li>TypeScript, PHP, MySQL</li>
            <li>Aurora, MariaDB, LAMP</li>
            <li>AWS, Python, Git, Arduino</li>
          </ul>
      </td>
      </tr></tbody></table>
      </div>
    );
  }
}

export default Home;
