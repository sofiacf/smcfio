import React from 'react'
import {PageWrapper} from "./PageWrapper";

const email = <a className="email" href="mailto:sofia@smcf.io">sofia@smcf.io</a>
const github = <a className="email" href="https://github.com/sofiacf">Github</a>
const linkedin = <a className="email" href="https://linkedin.com/in/smcf">LinkedIn</a>
const twitter = <a className="email" href="https://twitter.com/mendlbot">Twitter</a>
export const Contact = () => <PageWrapper>
    <h1>Contact</h1>
    <div>
        <p>Thanks for visiting my site! I'd love to hear from you.</p>
        <p>If you want to get in touch, my email address is { email }.</p>
        <p>You can also find me on { github }, { linkedin }, and { twitter }.</p>
    </div>
</PageWrapper>
