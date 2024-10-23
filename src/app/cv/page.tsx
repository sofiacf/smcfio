import styles from '@/app/cv/page.module.css'
import React from 'react'

type ExperienceProps = {
    highlights?: string[]
    institution: string
    title: string
    department?: string
    group?: string
    location: string
    start?: string
    end?: string
    date?: string
}
type AwardProps = Pick<ExperienceProps, 'title' | 'date'>

const SectionHeader = ({children}: { children: React.ReactNode }) => <tr>
    <td>
        <h3>{children}</h3>
        <hr/>
    </td>
</tr>;
const Experience = (props: ExperienceProps) => <>
    <TwoColFlex
        col1={<><h4><strong>{props.institution}</strong>, {props.location}</h4>
            <>
                {props.title}
                {props.group && <div>{props.group}</div>}
                {props.department && <div>{props.department}</div>}
            </>
        </>}
        col2={<>
            {props.date ? props.date : <Dates {...props}/>}
        </>}>
    </TwoColFlex>
</>
const Award = (props: AwardProps) => <TwoColFlex
    col1={<h4>{props.title}</h4>}
    col2={<>
        <>{props.date}</>
    </>}
/>
const Dates = ({start, end = 'present'}: Partial<ExperienceProps>) => {
    if (start === end) return <>{start}</>
    return <>{start} - {end}</>
}

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

export default function Page() {
    return <div className={styles.resume}>
        <table style={{tableLayout: 'fixed', backgroundColor: 'rgba(255,255,255,.75)'}}>
            <tbody>
            <SectionHeader>Education</SectionHeader>
            <>
                <Experience
                    institution="Wellesley College"
                    title="B.A. in Mathematics and Cognitive/Linguistic Sciences (Computer Science)"
                    date="2026"
                    location="Wellesley, MA"
                />
                <Experience
                    institution="Cape Cod Community College"
                    title="A.A. in Liberal Arts with High Honors"
                    date="2022"
                    location="West Barnstable, MA"
                />
            </>
            <SectionHeader> Employment</SectionHeader>
            <>
                <Experience
                    institution="Wellesley College"
                    title="JavaScript Programmer for MIT App Inventor Extensions"
                    department={"TinkerBlocks Group, Computer Science Department"}
                    location="Wellesley, MA"
                    start="2023"
                    end={"2023"}
                    highlights={[]}
                />
                <Experience
                    institution="EF Education First"
                    title="Software Engineer"
                    location="Cambridge, MA"
                    start="2021"
                    end="2022"
                    highlights={[]}
                />
                <Experience
                    institution="US Air Force"
                    title="Software Engineer"
                    location="Boston, MA"
                    start="2019"
                    end="2021"
                    highlights={[]}
                />
                <Experience
                    institution="Klein Hornig LLP"
                    location="Boston, MA"
                    title="Accounting Clerk and Legal Assistant"
                    start="2017"
                    end="2018"
                    highlights={[]}
                />
                <Experience
                    institution="Right Coast Courier"
                    location="Boston, MA"
                    title="Bicycle Messenger, Dispatcher, Operations Manager"
                    start="2015"
                    end="2018"
                    highlights={[]}
                />
            </>
            <SectionHeader> Awards</SectionHeader>
            <>
                <Award title={"Cape Cod Community College Dean's List"} date={"2022"}/>
                <Award title={"Phi Theta Kappa Honor Society"} date={"2021"}/>
                <Award title="US Air Force Exemplary Civilian Service Award" date="2021"/>
                <Award title="North American Cycle Courier Championship Queen of Track" date="2016, 2018"/>
                <Award title="Grammy Awards for Best Classical Album, Best Choral Performance on a Classical Album"
                       date="2010"/>
            </>
            <SectionHeader> Leadership and Service</SectionHeader>
            <>
                <Experience
                    institution={"Davis Scholars Class Council"}
                    title={"Treasurer"}
                    location={"Wellesley, MA"}
                    start={"2023"}
                    end={"2024"}
                    highlights={[]}
                />
                <Experience
                    institution={"Wellesley College Choir"}
                    title={"Vice President"}
                    location={"Wellesley, MA"}
                    start={"2023"}
                    end={"2024"}
                    highlights={[]}
                />
                <Experience
                    institution="Boston Bike Messenger Association"
                    location="Boston, MA"
                    title="President, Clerk, Treasurer"
                    start="2016"
                    end={"2021"}
                />
                <Experience
                    institution="Star (*) Bike Messenger Association"
                    location="International"
                    title="Treasurer, Founding Member"
                    start="2016"
                    end="2018"
                />
            </>
            </tbody>
        </table>
    </div>
}
