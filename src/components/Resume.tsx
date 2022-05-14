import React, {ReactNode} from 'react'
import '../styles/Resume.css'
import {PageWrapper} from "./PageWrapper";

type ExperienceProps = {
    highlights: string[]
    institution: string
    title: string
    location: string
    start: string
    end?: string
}
type AwardProps = Omit<ExperienceProps, 'end' | 'start' | 'highlights'> & { date: string }

export const Resume = () => <PageWrapper className="resume">
    <h1>CV</h1>
    <table>
        <thead>
        <TwoColFlex
            col1={<>
                <h4>Sofia Chandler-Freed</h4>
                Somerville, MA
            </>}
            col2={<>sofia@smcf.io</>}
        />
        </thead>
        <tbody>
        <Education/>
        <ProfessionalExperience/>
        <VolunteerExperience/>
        <Awards/>
        </tbody>
    </table>
</PageWrapper>

const Education = () => <>
    <SectionHeader>Education</SectionHeader>
    <Experience
        institution="Wellesley College"
        title="BA (undeclared)"
        start="September 2022"
        end="expected May 2025"
        location="Wellesley, MA"
        highlights={[]}
    />
    <Experience
        institution="Cape Cod Community College"
        title="AA in Liberal Arts (GPA: 4.0)"
        start="January 2021"
        end="May 2022"
        location="West Barnstable, MA"
        highlights={[
            'Phi Theta Kappa',
            'Supplemental Instruction leader (Programming 1: Java)',
        ]}
    />
    <Experience
        institution="Berkeley High School"
        title="Berkeley International High School"
        location="Berkeley, CA"
        start="2009"
        end="2013"
        highlights={[
            'President, Linguistics Club, Speech Team',
            'Co-president, Chorus Club',
            'IB HL History of Americas, English',
            'AP Spanish Lit., Biology, Music Theory'
        ]}
    />
    <Experience
        institution="Independent Learning"
        location="Online"
        title="Lynda.com, Coursera"
        start="2016, 2018"
        end="2020"
        highlights={[
            'Game Theory (Stanford & UBC)',
            'Classical Sociological Theory (UvA)',
            'Accessibility for Web Design (Featherstone)',
            'Agile Software Development (Shekhar)',
        ]}
    />
</>
const ProfessionalExperience = () => <>
    <SectionHeader>Professional Experience</SectionHeader>
    <Skills/>
    <Experience
        institution="US Air Force, Kessel Run Experimentation Lab"
        title="Software engineer (NH-03), Secret clearance"
        location="Boston, MA"
        start="June 2019"
        end="November 2021"
        highlights={[
            'Designed, built, tested, and operated critical mission planning software used in air operations centers.',
            'Established engineering standards, planned and organized training as Engineering Practice leader.'
        ]}
    />
    <Experience
        institution="USA Couriers"
        location="Newton, MA"
        title="Dispatcher, web developer"
        start="2018"
        end="2019"
        highlights={[
            'Created quote generator and visual dispatch tool for national courier network.',
            'Captured legacy data in modern DB to standardize and optimize dispatch decisions.'
        ]}
    />
    <Experience
        institution="Klein Hornig LLP"
        location="Boston, MA"
        title="Accounting clerk"
        start="2017"
        end="2018"
        highlights={[
            'Coordinated case closing between housing developers, outside counsel, and government agencies.',
            'Lead research and innovation to streamline and automate card reconciliations, reporting, and A/P processes.'
        ]}
    />
    <Experience
        institution="Right Coast Courier"
        location="Boston, MA"
        title="Operations manager, dispatcher, courier"
        start="2015"
        end="2018"
        highlights={[
            'Lead team to provide exceptional service to food and legal clients; handled operations, workflow optimizations.',
            'Delivered more than 50,000 pizzas on a bicycle for independent restaurant delivery service.'
        ]}
    />
</>
const VolunteerExperience = () => <>
    <SectionHeader>Volunteer Experience</SectionHeader>
    <Experience
        institution="Boston Bike Messenger Association"
        location="Boston, MA"
        title="Clerk, president, board member"
        start="2015"
        highlights={[
            'Lead board, organized programs, events, fundraisers, organizational review',
            'Championed insurance enrollment drive, saving an average $700 per member'
        ]}
    />
    <Experience
        institution="Star (*) Bike Messenger Association"
        location=""
        title="Co-founder, treasurer, board member"
        start="2015"
        end="2017"
        highlights={[
            'Drafted International Federation of Bicycle Messenger Associations guidelines for inclusive championships.',
            'Organized and moderated community activities, including forums, international gatherings, and fundraisers.'
        ]}
    />
</>
const Awards = () => <>
    <SectionHeader>Awards</SectionHeader>
    <Award
        institution="US Air Force"
        title="Exemplary Civilian Service Award"
        location="Hanscom Air Force Base"
        date="November 2021"
    />
    <Award
        institution="North American Cycle Courier Championship"
        title="Queen of Track (2016), Track President (2018)"
        location="NYC; Philadelphia, PA"
        date="November 2021"
    />
    <Award
        institution="San Francisco Symphony Chorus"
        title="Grammy Awards for Best Classical Album, Best Choral Performance on a Classical Album"
        location="San Francisco, CA"
        date="2010"
    />
</>

const Skills = () => <tr>
    <td>
        <b>Skills:</b> React, TS, HTML5, Node.js, Express, Java, Spring Boot, MySQL, XP, TDD, AWS, Excel
    </td>
</tr>
const SectionHeader: React.FC = ({children}) => <tr>
    <td>
        <h3>{children}</h3>
        <hr/>
    </td>
</tr>;
const Experience = (props: ExperienceProps) => <>
    <TwoColFlex
        col1={<><h4>{props.institution}</h4>
            <em>{props.title}</em></>}
        col2={<>
            <div>{props.location}</div>
            <Dates {...props}/>
        </>}>
        <Highlights highlights={props.highlights}/>
    </TwoColFlex>
</>
const Award = (props: AwardProps) => <TwoColFlex
    col1={<><h4>{props.institution}</h4>
        <em>{props.title}</em></>}
    col2={<>
        <div>{props.location}</div>
        <em>{props.date}</em>
    </>}
/>
const Dates = ({start, end = 'present'}: Partial<ExperienceProps>) => <em>{start} - {end}</em>
const Highlights = (props: Pick<ExperienceProps, 'highlights'>) => <div>
    <ul>
        {props.highlights.map((val, index) => <li key={index}>{val}</li>)}
    </ul>
</div>
type ColProps = { col1: ReactNode, col2: ReactNode };
const TwoColFlex: React.FC<ColProps> = ({col1, col2, children}) => <>
    <tr style={{display: 'flex', marginTop: 0}}>
        <td style={{width: "max-content"}}>
            {col1}
        </td>
        <td style={{flexGrow: 1, textAlign: "right"}}>
            {col2}
        </td>
    </tr>
    <tr>
        <td style={{paddingTop: 0}}>{children}</td>
    </tr>
</>
