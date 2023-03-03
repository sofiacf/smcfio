import React from 'react';
import '../styles/Home.css';
import {PageWrapper} from "./PageWrapper";

export const Home = () => <PageWrapper className={'home'}>
    <div>
        <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
        <p>I'm an unusually old Wellesley student majoring in mathematics and cognitive/linguistic/computer science.
            Before starting school, I spent time as a software engineer, bike messenger, and classical vocalist.
            Good times!
        </p>
    </div>
    <p>Need the concrete corrosion simulator? <a href="http://corrosion.smcf.io">Look no further</a>.</p>
</PageWrapper>
