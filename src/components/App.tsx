import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../styles/App.css';
import {Home} from './Home';
import {Resume} from './Resume';
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
                </tr>
                </tbody>
            </table>
        </nav>
        <main>
            <Route path="/cv" component={Resume}/>
            <Route  path="/" component={Home}/>
            <Art/>
        </main>
    </Router>
</div>
