import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../styles/App.css';
import { Home } from './Home';
import { Art } from './Art';
import { Resume } from './Resume';
import { Portfolio } from './Portfolio';
import { Notes } from './Notes';
import { Contact } from './Contact';

export const App: React.FC = () => <div className="App">
    <Art/>
    <Router>
        <h1><Link to="/">smcf.io</Link></h1>
        <nav>
            <table style={ {
                borderStyle: 'double none',
                tableLayout: 'fixed',
                textAlign: 'center',
                width: '100%'
            } }>
                <tbody>
                <tr>
                    <td><Link to="/resume">resume</Link></td>
                    <td><Link to="/portfolio">portfolio</Link></td>
                    <td><Link to="/notes">notes</Link></td>
                    <td><Link to="/contact">contact</Link></td>
                </tr>
                </tbody>
            </table>
        </nav>
        <Route exact path="/" component={ Home }/>
        <Route path="/resume" component={ Resume }/>
        <Route path="/portfolio" component={ Portfolio }/>
        <Route path="/notes" component={ Notes }/>
        <Route path="/contact" component={ Contact }/>
    </Router>
</div>
