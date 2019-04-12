import React, { Component } from 'react';
import Art from './Art';
import '../styles/Resume.css';

class Work extends Component {
  render() {
    return (
      <div>
        <b>{this.props.company}</b> - {this.props.position}
        <br/>
        <span className="workdates">{this.props.workdates}</span>
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
      <Art style={{zIndex: -99}} />
        <h1>Resume</h1>
        <div className="experience" style={{zIndex: 100}}>
          <Work company="1 Shot Courier" position="Google Apps Script, TypeScript developer" workdates="DECEMBER 2018 - PRESENT"  highlights={["Things n stuff."]}/>
          <Work company="USA Couriers" position="Dispatcher, web developer" workdates="DECEMBER 2018 - MARCH 2019" highlights={["Developed quote generation and subcontractor assignment program for national courier network with Maps JavaScript API", "Optimized reliability and cost to fulfill emergency deliveries in medical, financial and retail sectors", "Worked with subcontractors across the US to arrange sensitive same-day deliveries"]} />
        </div>
      </div>
    );
  }
}

export default Resume;
