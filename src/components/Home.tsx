import React from 'react';
import '../styles/Home.css';
import {PageWrapper} from "./PageWrapper";

export const Home = () => <PageWrapper>
    <table>
        <tbody>
        <tr>
            <td style={ { width: '60%' } }>
                <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
                <p>Please enjoy my resume, projects, informal writing, and other odds and ends while you're here.</p>
                <p>Comments? Questions? <a className="email" href="mailto:sofia@smcf.io">Email me</a>!
                </p>
                <p>-Sofia</p>
                <br/>
                <p>Looking for the concrete corrosion simulator? It's <a href="http://corrosion.smcf.io">here</a>!</p>
            </td>
            <td>
                <p>Specialties:</p>
                <ul>
                    <li>React, Typescript, HTML/CSS</li>
                    <li>Spring Boot, Java, Cloud Foundry</li>
                    <li>XP, TDD, DDD, CI/CD, Agile, Lean</li>
                </ul>
            </td>
        </tr>
        </tbody>
    </table>
</PageWrapper>
