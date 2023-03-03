import React from 'react'
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

const Education = () => <>
    <SectionHeader header={"Education"}/>
    <Experience
        institution="Wellesley College"
        title="Candidate for BA in Mathematics, Cognitive & Linguistic Sciences - Computer Science (GPA: 3.9)"
        start="2022"
        end="2025"
        location="Wellesley, MA"
        highlights={[]}
    />
    <Experience
        institution="Cape Cod Community College"
        title="AA in Liberal Arts with High Honors, Phi Theta Kappa (GPA: 3.9)"
        start="2021"
        end="2022"
        location="West Barnstable, MA"
        highlights={[]}
    />
</>
const ResearchExperience = () => <>
    <SectionHeader header={"Research Experience"}/>
    <Experience
        institution="Wellesley College Neuroscience Department, Laboratory of Michael Wiest"
        title="Research student"
        location="Wellesley, MA"
        start="2023"
        highlights={[]}
    />
    <Experience
        institution="Wellesley College Computer Science Department, TinkerBlocks group"
        title="JavaScript programmer for MIT App Inventor Extensions"
        location="Wellesley, MA"
        start="2023"
        highlights={[]}
    />
</>
const ProfessionalExperience = () => <>
    <SectionHeader header={"Professional Experience"}/>
    <Experience
        institution="EF Education First"
        title="Software engineer"
        location="Cambridge, MA"
        start="2021"
        end="2022"
        highlights={[]}
    />
    <Experience
        institution="US Air Force, Kessel Run Experimentation Lab"
        title="Software engineer (NH-03), Secret clearance"
        location="Boston, MA"
        start="2019"
        end="2021"
        highlights={[]}
    />
    <Experience
        institution="USA Couriers"
        location="Newton, MA"
        title="Dispatcher, web developer"
        start="2018"
        end="2019"
        highlights={[]}
    />
    <Experience
        institution="Klein Hornig LLP"
        location="Boston, MA"
        title="Accounting clerk, legal assistant"
        start="2017"
        end="2018"
        highlights={[]}
    />
    <Experience
        institution="Right Coast Courier"
        location="Boston, MA"
        title="Operations manager, dispatcher, courier"
        start="2015"
        end="2018"
        highlights={[]}
    />
</>
const VolunteerExperience = () => <>
    <SectionHeader header={"Leadership/Service"}/>
    <Experience
        institution="Boston Bike Messenger Association"
        location="Boston, MA"
        title="Clerk, president, board member"
        start="2015"
        highlights={[]}
    />
    <Experience
        institution="Star (*) Bike Messenger Association"
        location="International"
        title="Co-founder, treasurer, board member"
        start="2015"
        end="2017"
        highlights={[]}
    />
</>
const Awards = () => <>
    <SectionHeader header={"Awards"}/>
    <Award
        institution="US Air Force"
        title="Exemplary Civilian Service Award"
        location="Hanscom Air Force Base"
        date="2021"
    />
    <Award
        institution="North American Cycle Courier Championship"
        title="Queen of Track, Track President (awards for top competitor on a brakeless fixed gear bicycle)"
        location="New York, NY; Philadelphia, PA"
        date="2016, 2018"
    />
    <Award
        institution="San Francisco Symphony Chorus"
        title="Grammy Awards for Best Classical Album, Best Choral Performance on a Classical Album"
        location="San Francisco, CA"
        date="2010"
    />
</>
const Membership = () => <>
    <SectionHeader header={"Membership"}/>
    <Experience highlights={[]} institution={"Natural Language Processing Reading Group, Wellesley College"} title={""} location={""} start={"2023"}/>
    <Experience highlights={[]} institution={"Wellesley College Choir"} title={""} location={""} start={"2022"}/>
    <Experience highlights={[]} institution={"Phi Theta Kappa, Alpha Upsilon Mu Chapter"} title={""} location={""} start={"2021"}/>
</>
const Skills = () => <>
    <SectionHeader header={"Skills"}/>
    <tr><td>Ordered by some combination of proficiency and importance (descending).</td></tr>
    <tr>
        <td>
            <strong>Computational:</strong> TypeScript/JavaScript, Java, React, Node.js, HTML/CSS, Python, SQL, Git,
            LaTeX, Microsoft Office, Emacs, Jetbrains IDEs, C++, Arduino, AWS, C, Kotlin, Anki.<br/>
            <strong>Language-related:</strong> English, Spanish, International Phonetic Alphabet, Praat, German, Esperanto, Russian, Mandarin.<br/>
            <strong>Miscellaneous:</strong> Art modeling, cycling (track, road), grammar and pronunciation, sight-singing, solfege, poetry, dance (blues, swing, ceili, ballet).
        </td>
    </tr>
</>
const SectionHeader: ({header}: { header: string }) => JSX.Element = ({header}) => <tr>
    <td>
        <h3>{header}</h3>
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
        {/*<Highlights highlights={props.highlights}/>*/}
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

/*
 This bad code was not always this way.
 Perhaps one day I will fix it.
*/
function TwoColFlex(props: any) {
    return <>
        <tr style={{display: 'flex', marginTop: 0}}>
            <td style={{width: "max-content"}}>
                {props.col1}
            </td>
            <td style={{flexGrow: 1, textAlign: "right"}}>
                {props.col2}
            </td>
        </tr>
        <tr>
            <td style={{paddingTop: 0}}>{props.children}</td>
        </tr>
    </>;
}

export const Resume = <PageWrapper className="resume">
    <table style={{tableLayout: 'fixed', backgroundColor: 'rgba(255,255,255,.75)'}}>
        <thead>
        <TwoColFlex
            col1={<>Sofia Chandler-Freed</>}
            col2={<>Email: sc121 at wellesley dot edu</>}
        />
        </thead>
        <tbody>
        <Education/>
        <ResearchExperience/>
        <ProfessionalExperience/>
        <VolunteerExperience/>
        <Membership/>
        <Skills/>
        <Awards/>
        </tbody>
    </table>
</PageWrapper>
