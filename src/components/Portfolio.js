import React, { Component } from 'react';
import '../styles/Portfolio.css';
import map from '../images/map.png';
import addon from '../images/addon.png';
class Project extends Component {
  render() {
    return (
      <tr className="Project">
      <td className="Description">
      <h3><a href={this.props.url}>{this.props.name}</a></h3>
        {this.props.technologies}
        <p>{this.props.description}</p>
      </td>
      <td className="Image">
        <img src={this.props.image} alt={this.props.alt} />
      </td>
      </tr>
    );
  }
}

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
      <h1>Portfolio</h1>
      <table>
      <Project name="Courier Map" image={map} url="https://smcf.nfshost.com/map/" alt="courier map" technologies="JavaScript, Google Maps JavaScript API, MariaDB, PHP, HTML/CSS" description="Developed quote generator and subcontractor dispatch tool for national courier network. Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions." />
      <Project name="Accounting Add-on" image={addon} alt="sheets add-on" url="https://github.com/sofiacf/osc-billing" technologies="Google Apps Script" description="Developed quote generator and subcontractor dispatch tool for national courier network. Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions." />
      </table>
      </div>
    );
  }
}

export default Portfolio;
