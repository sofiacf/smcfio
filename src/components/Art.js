import React, { Component } from 'react';
import '../styles/Art.css';

const cellSize = 5;
class Cell extends Component {
  render () {
    const {x, y} = this.props;
    return (
      <div className ="Cell" style={{
        left: `${cellSize * x + 1}px`,
        top:  `${cellSize * y + 1}px`,
        width: `${cellSize - 1}px`,
        height: `${cellSize - 1}px`,
      }} />
    );
  }
}
class Art extends Component {
  constructor() {
    super();
    this.state = {
      height: Math.floor(window.innerHeight * .55),
      width: Math.floor(window.innerWidth),
    }
    this.blob = this.makeBlob();
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  resize = () => this.setState({
      height: Math.floor(window.innerHeight * .55),
      width: Math.floor(window.innerWidth)
    });
  makeBlob() {
    let cols = this.state.width / cellSize;
    let rows = this.state.height / cellSize;
    let blob = [];
    for (let y = 0; y < rows; y++) {
      blob[y] = [];
      for (let x = 0; x < cols; x++) {
        let xchance = 1 - (Math.abs(cols/2-x)+20) / cols;
        let ychance = y/rows;
        let chance = Math.random()*3 +4*xchance + 2*ychance;
        blob[y][x] = chance > 6;
      }
    }
    return blob;
  }
  makeCells(blob) {
    let cols = this.state.width / cellSize;
    let rows = this.state.height / cellSize;
    let cells = [];
    for (let y=0; y < rows; y++) {
      for (let x = 0; x < cols; x++) if (blob[y][x]) {cells.push({x, y});}
    }
    return cells;
  }
  getElementOffset (){
    const rect = this.blobRef.getBoundingClientRect();
    const doc = document.documentElement;
    return ({
      x: (rect.left + window.pageXOffset) - doc.clientLeft,
      y: (rect.top + window.pageYOffset) - doc.clientTop,
    });
  }
  render() {
    const blob = this.makeBlob();
    const cells = this.makeCells(blob);
    return (
      <div><div className="Blob"
        style={{width: this.state.width, height: this.state.height, backgroundSize: `${cellSize}px ${cellSize}px`}}
        ref={(n) => {this.blobRef = n;}}>
        {cells.map(cell => <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>)}
      </div></div>
    );
  }
}
export default Art;
