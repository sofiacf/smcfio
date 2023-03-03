import React from 'react';
import '../styles/App.css';
import {Home} from './Home';
import {Resume} from './Resume';
import {Art} from "./Art";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

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
        <Switch>
            <Route path={"/cv"}>
                {Resume}
            </Route>
            <Route path={"/"}>
                {Home}
            </Route>
        </Switch>
        <main>
            <Art/>
        </main>
    </Router>
</div>
