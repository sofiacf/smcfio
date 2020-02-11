import React from 'react'
import '../styles/Home.css'

export const Home = () => <main>
    <table>
        <tbody>
        <tr>
            <td style={ { width: '60%' } }>
                <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
                <p>Please enjoy my portfolio, writing, resume, other odds and ends while you're here.</p>
                <p>Comments? Questions? <a className="email" href="mailto:sofia@smcf.io">Email me</a>!
                </p>
                <p>-Sofia</p>
            </td>
            <td>
                <p>Specialties:</p>
                <ul>
                    <li>React, Typescript, HTML/CSS</li>
                    <li>Spring Boot, Java, Cloud Foundry</li>
                    <li>XP, TDD, DDD, UCD, Agile, Lean</li>
                </ul>
            </td>
        </tr>
        </tbody>
    </table>
</main>
