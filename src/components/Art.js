import React, { Component } from 'react';
import '../styles/Art.css';

const cellSize = 5;
class Cell extends Component {
  render() {
    return ( <div className = "Cell" id = { this.props.id } />);
  }
}
class Blob extends Component {
  constructor() {
    super();
    this.rows = 200;
    this.cols = 50;

    this.state = {
      generation: 0,
      blobFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
    }
  }
  seed = () => {
    let blobCopy = JSON.parse(JSON.stringify(this.state.blobFull));
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (Math.floor(Math.random() * 4) === 1) blobCopy[y][x] = true;
      }
    }
    this.setState({blobFull: blobCopy})
  }
  componentDidMount() {
    this.seed();
  }
  render() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let cellId = x + "_" + y;
        let cellStatus = this.state.blobFull[y][x];
        cells.push(
          <Cell
            key = { cellId }
            cellId = { cellId }
            row = { y }
            col = { x }
            status={cellStatus}
          />
        );
      }
    }
    return (
      <div className="Blob"> {cells} </div>
    );
  }
}
class Art extends Component {
  render() {
    return (<Blob className="Art" />);
  }
}
export default Art;
