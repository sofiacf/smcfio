import React from 'react';
import '../styles/Home.css';
import {PageWrapper} from "./PageWrapper";

export const Home = () => <PageWrapper className={'home'}>
    <div>
        <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
        <p>I'm a nontraditional student, software engineer, classical singer, and former bike messenger near
            Boston.
        </p>
        <label>Interestest include:</label>
        <ul>
            <li>philosophy, linguistics, cs, and humor</li>
            <li>international relations</li>
            <li>reading/writing</li>
            <li>many other things</li>
        </ul>
    </div>
    <p>Need the concrete corrosion simulator? <a href="http://corrosion.smcf.io">Look no further</a>.</p>
</PageWrapper>
