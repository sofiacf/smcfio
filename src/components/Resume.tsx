import React from 'react'
import '../styles/Resume.css'

interface ExperienceProps {
    highlights: string[]
}

interface ProfessionalProps extends ExperienceProps {
    start: string
    end?: string
    company: string
    position: string
}

interface EducationProps extends ExperienceProps {
    school: string
    graduated: string
}

const Skills = () => <>
    <tr>
        <td>Pragmatic, collaborative software engineer; skilled Agile practitioner geared toward growth.</td>
    </tr>
    <tr>
        <td>
            <br/>
            <h3>Skills</h3>
            <ul style={ { float: 'left', marginTop: '0' } }>
                <li>React, TypeScript, HTML/CSS</li>
                <li>Spring Boot, Java, Cloud Foundry</li>
            </ul>
            <ul style={ { float: 'left', marginTop: '0' } }>
                <li>XP, TDD, DDD, UCD, Agile, Lean</li>
                <li>MySQL, Aurora, AWS, Git</li>
            </ul>
        </td>
    </tr>
</>
const Role = (role: { company: string, position: string }) => <><b>{ role.company }</b> - { role.position }</>
const Dates = ({ start, end = 'PRESENT' }: Pick<ProfessionalProps, 'start' | 'end'>) => <span
    className="dates">{ start } - { end }</span>
const Highlights = (props: Pick<ExperienceProps, 'highlights'>) => <>
    <ul className="highlights">{ props.highlights.map((val, index) => <li key={ index }>{ val }</li>) }</ul>
</>
const Professional = (props: ProfessionalProps) => <div>
    <Role company={ props.company } position={ props.position }/>
    <br/>
    <Dates start={ props.start } end={ props.end }/>
    <Highlights highlights={ props.highlights }/>
</div>
const Education = (props: EducationProps) => <>
    <div>
        <b>{ props.school }</b>
        <br/>
        <span className="dates">{ props.graduated }</span>
        <Highlights highlights={ props.highlights }/>
    </div>
</>

export const Resume = () => <>
    <div className="resume">
        <h1>Resume</h1>
        <h2>Sofia Chandler-Freed</h2>
        <table>
            <tbody>
            <Skills/>
            <tr>
                <td>
                    <h3>Programming Experience</h3>
                    <Professional
                        company="Kessel Run"
                        position="Senior software engineer; full stack software engineer"
                        start="JUNE 2019"
                        highlights={ [
                            'Practiced Extreme Programming to build user-centered products as senior engineer on a balanced team',
                            'Grew engineering practice by planning/curating educational content on Engineering Practice team'
                        ] }/>
                    <Professional
                        company="1 Shot Couriers"
                        position="JavaScript, Google Apps Script developer"
                        start="NOVEMBER 2018"
                        highlights={ [
                            'Created Google Sheets Add-on to automate accounting tasks for small businesses',
                            'Saved courier company >288 labor hours annually by automating billing and payroll'
                        ] }/>
                    <Professional
                        company="USA Couriers"
                        position="Dispatcher; web developer"
                        start="DECEMBER 2018"
                        end="MARCH 2019"
                        highlights={ [
                            'Created quote generator and visual dispatch tool for national courier network',
                            'Harnessed decades of data to standardize and optimize dispatch decisions'
                        ] }/>
                    <Professional
                        company="Symbol Flux"
                        position="Co-founder; JavaScript, Python developer"
                        start="OCTOBER 2014"
                        end="FEBRUARY 2015"
                        highlights={ [
                            'Contributed to initial founding of innovative developer tools start-up',
                            'Navigated start-up process in Germany, various project contributions'
                        ] }/>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>Additional Experience</h3>
                    <Professional
                        company="Klein Hornig LLP"
                        position="Accounting clerk"
                        start="JULY 2017"
                        end="DECEMBER 2018"
                        highlights={ [
                            'Streamlined, automated reconciliations, reporting, and AP in Juris and Concur',
                            'Provided SOPS, training, and research to improve efficiency and ease of use'
                        ] }/>
                    <Professional
                        company="Right Coast Courier"
                        position="Operations manager; courier"
                        start="JUNE 2015"
                        end="MARCH 2018"
                        highlights={ [
                            'Interfaced with clients and team to optimize workflow, service, training, and client relations',
                            'Delivered more than 50,000 pizzas on a bicycle'
                        ] }/>
                    <Professional
                        company="Boston Bike Messenger Association"
                        position="Clerk, president, board member"
                        start="JUNE 2015"
                        highlights={ [
                            'Lead board, organized programs, events, fundraisers, organizational review',
                            'Championed insurance enrollment drive, saving an average $700 per member'
                        ] }/>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>Education</h3>
                    <Education school="Undergraduate courses"
                               graduated="2019 - 2021"
                               highlights={ [
                                   'Cape Cod Community College - Introduction to Computer Systems (A), Programming I: C++ (in progress), Programming II: Java (in progress)',
                                   'MassBay Community College - Calculus I (B+)',
                               ] }/>
                    <Education
                        school="Coursera"
                        graduated="2016"
                        highlights={ [
                            'Game Theory (Stanford University & University of British Columbia)',
                            'Classical Sociological Theory (University of Amsterdam)'
                        ] }/>
                    <Education
                        school="Lynda.com"
                        graduated="2018 - 2019"
                        highlights={ [
                            'Accessibility for Web Design (Derek Featherstone)',
                            'React: Context API Development (Emmanuel Henri)',
                            'Agile Software Development: Pair and Mob Programming (Chiu-Ki Chan)',
                            'Agile Software Development: Pair and Mob Programming (Lynn Langit)',
                            'Agile Software Development (Shashi Shekhar)',
                            'JavaScript Patterns (Emmanuel Henri)'
                        ] }/>
                    <Education
                        school="Berkeley High School"
                        graduated="2009 - 2013"
                        highlights={ [
                            'AP Spanish Literature (5), Biology (5), Music Theory (5)',
                            'IB HL History of Americas (6), IB HL English (7)',
                            'Debate Team (President), Math Team, Linguistics Club'
                        ] }/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</>
