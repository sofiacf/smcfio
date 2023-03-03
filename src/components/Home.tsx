import React from 'react';
import '../styles/Home.css';
import {PageWrapper} from "./PageWrapper";

const email = <a className="email" href="mailto:sofia@smcf.io">sofia@smcf.io</a>
const github = <a className="email" href="https://github.com/sofiacf">Github</a>
const linkedin = <a className="email" href="https://linkedin.com/in/smcf">LinkedIn</a>
const twitter = <a className="email" href="https://twitter.com/mendlbot">Twitter</a>
export const Home = <PageWrapper className={'home'}>
    <div>
        <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
        <p>I'm an unusually old Wellesley student majoring in mathematics and cognitive/linguistic/computer science.
            Before starting school, I was a software engineer, bike messenger, and classical vocalist (not always simultaneously).
            Good times!
        </p>
        <p>Need the concrete corrosion simulator? <a href="http://corrosion.smcf.io">Look no further</a>.</p>
    </div>
</PageWrapper>
