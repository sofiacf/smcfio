import React, { Component } from 'react';
import '../styles/Resume.css';

class Experience extends Component {
  render() {
    return (
      <div>
        <b>{this.props.company}</b> {this.props.position}
        <br/>
        <span className="dates">{this.props.dates}</span>
        <ul className="highlights">
          {this.props.highlights.map((val, index) => <li key={index}>{val}</li>)}
        </ul>
      </div>
    );
  }
}
class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h1>Resume</h1>
        <h2>Sofia Chandler-Freed</h2>
        <table>
        <tbody>
        <tr>
          <td>Energetic, adaptable software engineer dedicated to building solutions that matter.</td>
        </tr>
        <tr>
        <td>
          <br />
          <h3>Skills</h3>
          <ul style={{float: 'left'}}>
            <li>JavaScript, HTML/CSS, React</li>
            <li>TypeScript, PHP, MySQL</li>
          </ul>
          <ul style={{float: 'left'}}>
            <li>Aurora, MariaDB, LAMP</li>
            <li>AWS, Python, Git, Arduino</li>
            </ul>
        </td>
        </tr>
        <tr>
        <td>
          <h3>Programming Experience</h3>
          <Experience company="1 Shot Couriers" position=" - JavaScript, Google Apps Script developer" dates="NOVEMBER 2018 - PRESENT"
          highlights={[
            "Built Google Apps Script Add-on to handle small business accounting tasks",
            "Saved company hundreds of labor hours by automating billing and payroll"
          ]}/>
          <Experience company="USA Couriers" position=" - Dispatcher; web developer" dates="DECEMBER 2018 - MARCH 2019"
          highlights={[
            "Created quote generator and visual dispatch tool for national courier network",
            "Harnessed decades of data to standardize and optimize dispatch decisions",
          ]} />
          <Experience company="Symbol Flux GmbH" position=" - Co-founder; JavaScript, Python developer" dates="OCTOBER 2014 - FEBRUARY 2015"
          highlights={[
            "Contributed to initial founding of innovative developer tools start-up",
            "Navigated start-up process in Germany, various project contributions"
          ]} />
        </td>
        </tr>
        <tr>
        <td>
          <h3>Additional Experience</h3>
          <Experience company="Klein Hornig LLP" position=" - Accounting clerk" dates="JULY 2017 - DDECEMBER 2018"
          highlights={[
            "Streamlined, automated reconciliations, reporting, and AP in Juris and Concur",
            "Provided SOPS, training, and research to improve efficiency and ease of use"
          ]} />
          <Experience company="Right Coast Courier" position=" - Operations manager; courier" dates="JUNE 2015 - MARCH 2018"
          highlights={[
            "Interfaced with clients and team to optimize workflow, service, training, and client relations",
            "Delivered more than 50,000 pizzas on a bicycle"
          ]} />
          <Experience company="Boston Bike Messenger Association" position=" - Clerk, president, board member" dates="JUNE 2015 - PRESENT" highlights={[
            "Lead board, organized programs, events, fundraisers, organizational review",
            "Championed insurance enrollment drive, saving an average $700 per member"
          ]} />
        </td>
        </tr>
        <tr>
        <td>
        <h3>Education</h3>
        <Experience company="Berkeley High School" dates="AUGUST 2009 - JUNE 2013"
        highlights={[
          "AP Spanish Literature (5), Biology (5), Music Theory (5)",
          "IB HL History of Americas (6), English (7)",
          "Debate Team (President), Math Team, Linguistics Club"
        ]}/>
        <Experience company="Coursera" dates="APRIL 2019" highlights={[
          "Game Theory, Stanford University & University of British Columbia",
          "Classical Sociological Theory, University of Amsterdam"
        ]} />
        </td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default Resume;
