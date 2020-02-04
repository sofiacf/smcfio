import React from 'react'
import '../styles/Home.css'

export const Home = () =>
    <div>
        <table>
            <tbody>
            <tr>
                <td style={ { width: '60%' } }>
                    <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
                    <p>Please enjoy my portfolio, writing, resume, other odds and ends while you're here.</p>
                    <p>Inclined to comment or inquire? Feel free to email me: <a className="email"
                                                                                 href="mailto:sofia@smcf.io">sofia@smcf.io</a>!
                    </p>
                    <p>-Sofia</p>
                </td>
                <td>
                    <p>Specialties:</p>
                    <ul>
                        <li>TypeScript, React, HTML/CSS</li>
                        <li>Java, Spring, JPA, MySQL</li>
                        <li>AWS, PCF, Git, TDD, XP</li>
                        <li>Delivering reliable innovation</li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
