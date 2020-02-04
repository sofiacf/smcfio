import React from 'react'

const email = <a className="email" href="mailto:sofia@smcf.io">sofia@smcf.io</a>
const github = <a className="email" href="https://github.com/sofiacf">Github</a>
const linkedin = <a className="email" href="https://linkedin.com/in/smcf">LinkedIn</a>
export const Contact = () => <main>
    <h1>Contact</h1>
    <div>
        <p>Thanks for visiting my site! I'd love to hear from you.</p>
        <p>If you want to get in touch, my email address is { email }.</p>
        <p>You can also find me on { github } and { linkedin }.</p>
    </div>
</main>
