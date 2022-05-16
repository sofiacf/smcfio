import React from 'react';
import '../styles/Home.css';
import {PageWrapper} from "./PageWrapper";

export const Home = () => <PageWrapper className={'home'}>
    <div>
        <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
        <p>I'm a nontraditional student, software engineer, art model, and former courier near Boston.
        </p>
        <label>Interests include:</label>
        <ul>
            <li>philosophy, linguistics, cs, reading/writing</li>
            <li>classical music, dancing, Jewish stuff, riding bikes</li>
            <li>friends & family</li>
            <li>plenty of other things</li>
        </ul>
    </div>
    <p>Need the concrete corrosion simulator? <a href="http://corrosion.smcf.io">Look no further</a>.</p>
</PageWrapper>
