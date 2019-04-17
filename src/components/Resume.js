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
        <tr>
          <td>Pragmatic and personable jr. developer, passionate about efficiency and driven by results.</td>
        </tr>
        <tr>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript, HTML/CSS, TypeScript, Google Apps Script</li>
            <li>React, AWS, Python</li>
            <li>PHP, MariaDB, Arduino</li>
          </ul>
        </tr>
        <tr>
          <h3>Programming Experience</h3>
          <Experience company="1 Shot Couriers" position=" - Google Apps Script, TypeScript developer" dates="DECEMBER 2018 - PRESENT"
          highlights={[
            "Created Google Sheets Add-on to automate accounting tasks for small business",
            "Saved independent courier company hundreds of labor hours annually by building GUI and user-friendly automations to handle billing, payroll, and other functions TBD"
          ]}/>
          <Experience company="USA Couriers" position=" - Dispatcher; web developer" dates="DECEMBER 2018 - MARCH 2019"
          highlights={[
            "Developed quote generator and subcontractor dispatch tool for national courier network",
            "Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions",
          ]} />
          <Experience company="Klein Hornig LLP" position=" - Accounting clerk; legal assistant" dates="JULY 2017 - DECEMBER 2018"
          highlights={[
            "Designed SOPs and macros to streamline card reconciliations, produce reports, and process AP/AR, employee expenses, and reporting with Concur, Juris, and FileSite",
            "Navigated transition to Concur software, producing user-friendly integration tools and procedures; developed training materials and provided education and technical support"
          ]} />
        </tr>
        <tr>
        <h3>Additional Experience</h3>
        <Experience company="Right Coast Courier" position=" - Manager, Downtown Quality Control; courier" dates="JUNE 2015 - JULY 2017"
        highlights={[
          "Managed specialty delivery services for Downtown Boston zone, communicating with clients and team to optimize workflow and negotiate points of contention",
          "Analyzed and developed solutions for workflow, client relations, training, and supplies",
          "Delivered more than 50,000 pizzas on a bicycle"
        ]} />
        <Experience company="Boston Bike Messenger Association" position=" - Clerk, president, board member" dates="JUNE 2015 - PRESENT" highlights={[
          "Lead board of long-standing business, community, and social services institution for Boston couriers, organizing fundraisers, events, workshops, races, and other programs",
          "Enrolled dozens of messengers in health insurance, organizing enrollment drive, developing workshop programming, and supporting members through process, saving thousands of dollars and allowing greater impact for Broken Bones Fund",
          "Built new ID/member benefit card system for building access and sponsor discounts",
          "Updated administrative procedures; revised strategic plan; began organizational review"
        ]} />
        </tr>
        </table>
        <h3>Education</h3>
        <Experience company="Berkeley High School" dates="AUGUST 2009 - JUNE 2013"
          highlights={[
            "AP Biology (5), AP Spanish Literature (5), AP Music Theory (5)",
            "IB HL English (7), HL History (6)",
            "SAT with Essay (2290)",
            "Debate Team (President), Chorus Club (President), Linguistics Club, Math Team"
          ]}/>
      </div>
    );
  }
}

export default Resume;
