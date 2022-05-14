import React from 'react';
import '../styles/Notes.css';
import {FractalFeast} from '../content/notes/FractalFeast';
import {PageWrapper} from "./PageWrapper";

export const Notes: React.FC = () => <PageWrapper className={'notes'}>
    <h1>Notes</h1>
    Little thoughts and things.
    <table>
        <tbody>
        <FractalFeast/>
        </tbody>
    </table>
</PageWrapper>;

interface NoteProps {
    title: string;
    date: string;
}

export const Note: React.FC<NoteProps> = props => <>
    <tr style={{display: 'flex'}}>
        <td style={{width: 'max-content'}}><h3>{props.title}</h3></td>
        <td style={{flexGrow: 1, textAlign: 'right'}}>
            {props.date}
        </td>
    </tr>
    <tr>
        <td>
            <article>{props.children}</article>
        </td>
    </tr>
</>;
