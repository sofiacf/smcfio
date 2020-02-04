import React from 'react'
import '../styles/Portfolio.css'
import map from '../images/map.png'
import addon from '../images/addon.png'

interface ProjectProps {
    url: string;
    name: string;
    technologies: string;
    description: string;
    image: string;
    alt: string;
}

const Project: React.FC<ProjectProps> = props => <tr>
    <td style={ { width: '65%' } }>
        <h3><a href={ props.url }>{ props.name }</a></h3>
        <p>{ props.technologies }</p>
        <div>{ props.description }</div>
        <br/>
    </td>
    <td>
        <img src={ props.image } alt={ props.alt }/>
    </td>
</tr>

export const Portfolio = () => <main>
    <h1>Portfolio</h1>
    <table>
        <tbody>
        <Project
            name="Courier Map"
            image={ map }
            url="https://smcf.nfshost.com/map/"
            alt="courier map"
            technologies="JavaScript, Google Maps JavaScript API, MariaDB, PHP, HTML/CSS"
            description="Developed quote generator and subcontractor dispatch tool for national courier network. Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions."
        />
        <Project
            name="Accounting Add-on"
            image={ addon }
            alt="sheets add-on"
            url="https://github.com/sofiacf/osc-billing"
            technologies="Google Apps Script"
            description="Developed quote generator and subcontractor dispatch tool for national courier network. Harnessed data from decades of company’s experience and relationships, creating an interactive GUI and updatable database, enabling any user to optimize dispatch decisions."
        />
        </tbody>
    </table>
</main>
