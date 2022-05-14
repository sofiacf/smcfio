import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import {PageWrapper} from "./PageWrapper";

export const Home = () => <PageWrapper>
    <div className={'home'}>
        <div>
            <p>Hi, I'm Sofia Chandler-Freed.</p>
            <p>I'm a nontraditional student, software engineer, classical singer, and former bike messenger near
                Boston.
            </p>
            <p>
                <dl>
                    <dt>Interested in:</dt>
                    <dd>- philosophy</dd>
                    <dd>- linguistics</dd>
                    <dd>- computer science, and</dd>
                    <dd>- humor</dd>
                </dl>
            </p>

        </div>
        <div>
            <p>
                <dl>
                    <dt>You can:</dt>
                    <dd>- <a className="email" href="mailto:sofia@smcf.io">email me</a> (sofia@smcf.io)</dd>
                    <dd>- <Link to={'/contact'}>find me on the web</Link></dd>
                    <dd>- look around here</dd>
                </dl>
            </p>
            <br/>
            <p>Looking for the concrete corrosion simulator? It's <a href="http://corrosion.smcf.io">here</a>!</p>
        </div>
    </div>
</PageWrapper>
