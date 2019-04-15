import React, { Component } from 'react';
import '../styles/Resume.css';

class Project extends Component {
  render() {
    return (
      <div>
      <h3>{this.props.name}</h3>
      <span>Technologies: {this.props.technologies} </span>
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
      <Project name="Courier Map" description="Built quote generation and subcontractor assignment dispatching tool for USA Couriers' nationwide courier network."/>
      </div>
    );
  }
}

export default Portfolio;
