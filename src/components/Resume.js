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
        <div>Jr. developer seeking role in Boston. Pragmatic and personable, I'm passionate about efficiency and driven by results.</div>
        <h3>Skills</h3>
        <span>Javascript, HTML/CSS, TypeScript, Google Apps Script, React</span>
        <h3>Experience</h3>
        <Experience company="1 Shot Couriers" position=" - Google Apps Script, TypeScript developer" dates="DECEMBER 2018 - PRESENT"
        highlights={[
          "Designed and built Google Sheets Add-On for independent courier company to automate common accounting activities, saving 200+ hours/year."
        ]}/>
        <Experience company="USA Couriers" position=" - Dispatcher; web developer" dates="DECEMBER 2018 - MARCH 2019"
        highlights={[
          "Developed quote generation and subcontractor assignment program for national courier network with Maps JavaScript API",
          "Optimized reliability and cost to fulfill emergency deliveries in medical, financial and retail sectors",
          "Experienceed with subcontractors across the US to arrange sensitive same-day deliveries"
        ]} />
        <Experience company="Klein Hornig LLP" position=" - Accounting clerk; legal assistant" dates="JULY 2017 - DECEMBER 2018"
        highlights={[
          "Designed SOPs and Excel macros to streamline card reconciliations, produce reports, and process AP/AR",
          "Coordinated with attorneys, developers, outside counsel, and government agencies for clients dedicated to the development and preservation of affordable housing",
          "Organized courier delivery procedures, reducing errors and cost",
          "Right fielder in KH Softballs's undefeated 2018 season"
        ]} />
        <Experience company="Right Coast Courier" position=" - Manager, Downtown Quality Control; courier" dates="JUNE 2015 - JULY 2017"
        highlights={[
          "Provided specialty dedicated delivery service for downtown zone catering and evening orders",
          "Communicated with clients and team to optimize workflow and negotiate points of contention",
          "Monitored and addressed equipment availability and condition downtown and across zones",
          "Delivered about 50,000 pizzas on a bicycle for independent restaurant delivery service",
          "Provided exceptional customer service for individual and catering orders"
        ]} />
        <h3>Education</h3>
        <Experience company="Berkeley High School" dates="AUGUST 2009 - JUNE 2013"
          highlights={[
            "President, Speech and Debate Team",
            "AP Biology (5), AP Spanish Literature (5), AP Music Theory (5)",
            "IB HL English (7), HL History (6)",
            "SAT with Essay (2290)"
          ]}/>
      </div>
    );
  }
}

export default Resume;
