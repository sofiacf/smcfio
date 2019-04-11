import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function NavBar(){
  return(
    <table className="navbar">
      <tbody>
      <tr>
        <td><a href="https://smcf.io/map/">portfolio</a></td>
        <td><a href="#resume">resume</a></td>
        <td><a href="#misc">misc.</a></td>
        <td><a href="#contact">contact</a></td>
      </tr>
      </tbody>
    </table>
  )
}
const height = Math.floor(window.innerHeight * .6);
const width = Math.floor(window.innerWidth * .8);
const cellSize = 5;
class Cell extends React.Component {
  render () {
    const { x, y} = this.props;
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
class Art extends React.Component {
  constructor() {
    super();
    this.rows = height / cellSize;
    this.cols = width / cellSize;
    this.blob = this.makeBlob();
    this.cells = this.makeCells();
    this.state = {
      cells: this.cells,
    }
  }
  makeBlob() {
    let blob = [];
    for (let y = 0; y < this.rows; y++) {
      blob[y] = [];
      for (let x = 0; x < this.cols; x++) {
        let xchance = 1 - (Math.abs(this.cols/2-x) + 10) / this.cols;
        let ychance = y/this.rows;
        let chance = Math.random()*3 +3*xchance + 2*ychance;
        blob[y][x] = chance > 5;
      }
    }
    return blob;
  }
  makeCells() {
    let cells = [];
    for (let y=0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.blob[y][x]) {cells.push({x, y});}
      }
    }
    return cells;
  }
  getElementOffset (){
    const rect = this.blobRef.getBoundingClientRect();
    const doc = document.documentElement;
    return {
      x: (rect.left + window.pageXOffset) - doc.clientLeft,
      y: (rect.top + window.pageYOffset) - doc.clientTop,
    };
  }
  calculateNeighbors(blob, x, y){
    let neighbors = 0;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];
      if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && blob[y1][x1]) {
        neighbors++;
      }
    }
    return neighbors;
  }
  render() {
    const { cells } = this.state;
    return (
      <div>
      <div className="Blob"
      style={{width: width, height: height, backgroundSize: `${cellSize}px ${cellSize}px`}}
      ref={(n) => {this.blobRef = n;}}>
      {cells.map(cell => (
        <Cell x={cell.x} y={cell.y}
        key={`${cell.x},${cell.y}`}/>
      ))}
      </div>
      </div>
    );
  }
}
function App(){
  return(
    <div>
      <h1>smcf.io</h1>
      <NavBar />
      <Art />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
