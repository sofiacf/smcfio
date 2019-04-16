import React, { Component } from 'react';
import '../styles/Portfolio.css';
import map from '../images/map.png';
import addon from '../images/addon.png';
class Project extends Component {
  render() {
    return (
      <div>
      <h3><a href={this.props.url}>{this.props.name}</a></h3>
      <span>{this.props.technologies}</span> <img src={this.props.image} alt={this.props.alt}/>
      <p>{this.props.description}</p>
      </div>
    );
  }
}

class Portfolio extends Component {
  render() {
    return (
      <div>
      <h1>Portfolio</h1>
      <Project name="Courier Map" image={map} url="https://smcf.nfshost.com/map/" alt="courier map" technologies="JavaScript, Google Maps JavaScript API, MariaDB, PHP, HTML/CSS" description="Developed quote generator and subcontractor dispatch tool for national courier network. Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions." />
      <Project name="Accounting Add-on" image={addon} alt="sheets add-on" url="https://github.com/sofiacf/osc-billing" technologies="Google Apps Script" description="Developed quote generator and subcontractor dispatch tool for national courier network. Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions." />
      </div>
    );
  }
}

export default Portfolio;
