import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../styles/App.css';
import {Home} from './Home';
import {Resume} from './Resume';
import {Notes} from './Notes';
import {Contact} from './Contact';

export const App: React.FC = () => <div className="App">
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
                    <td><Link to="/projects">projects</Link></td>
                    <td><Link to="/notes">notes</Link></td>
                    <td><Link to="/contact">contact</Link></td>
                </tr>
                </tbody>
            </table>
        </nav>
        <Route exact path="/" component={ Home }/>
        <Route path="/resume" component={ Resume }/>
        <Route path="/notes" component={ Notes }/>
        <Route path="/contact" component={ Contact }/>
    </Router>
</div>
