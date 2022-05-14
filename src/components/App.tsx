import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../styles/App.css';
import {Home} from './Home';
import {Resume} from './Resume';
import {Notes} from './Notes';
import {Contact} from './Contact';
import {Art} from "./Art";

export const App: React.FC = () => <div className="app">
    <Router>
        <h1 style={{fontWeight: "lighter"}}><Link to="/">smcf.io</Link></h1>
        <nav>
            <table style={{tableLayout: 'fixed', borderStyle: 'double none', textAlign: 'center'}}>
                <tbody>
                <tr>
                    <td><Link to="/">home</Link></td>
                    <td><Link to="/cv">cv</Link></td>
                    <td><Link to="/notes">notes</Link></td>
                    <td><Link to="/contact">contact</Link></td>
                </tr>
                </tbody>
            </table>
        </nav>
        <main>
            <Route exact path="/" component={Home}/>
            <Route path="/cv" component={Resume}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/contact" component={Contact}/>
            <Art/>
        </main>
    </Router>
</div>
