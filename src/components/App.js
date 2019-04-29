import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import '../styles/App.css';
import Art from './Art';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Misc from './Misc';
import Contact from './Contact';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Art style={{zIndex: '-99'}} />
        <Router>
          <h1><Link to="/">smcf.io</Link></h1>
          <table className="navbar"><tbody><tr>
            <td><Link to="/resume">resume</Link></td>
            <td><Link to="/portfolio">portfolio</Link></td>
            <td><Link to="/misc">misc.</Link></td>
            <td><Link to="/contact">contact</Link></td>
          </tr></tbody></table>

          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/misc" component={Misc} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>
    )
  }
}
export default App;
