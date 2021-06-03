import React from 'react';
import '../styles/Notes.css';
import { FractalFeast } from '../content/notes/FractalFeast';
import { TherapeuticDialogue } from '../content/notes/TherapeuticDialogue';
import { DeserveToLive } from '../content/notes/DeserveToLive';
import {PageWrapper} from "./PageWrapper";

export const Notes: React.FC = () => <PageWrapper className={ 'notes' }>
  <h1>Notes</h1>
  <table>
    <thead>
    <tr>
      <td>Little thoughts and things. Like a blog, but worse</td>
    </tr>
    </thead>
    <tbody>
    <FractalFeast/>
    {/*<TherapeuticDialogue/>*/}
    <DeserveToLive/>
    </tbody>
  </table>
</PageWrapper>;

interface NoteProps {
  title: string;
  date: string;
}

export const Note: React.FC<NoteProps> = props => <>
  <tr>
    <td style={ { width: '80%' } }>
      <b><h4>{ props.title }</h4></b>
    </td>
    <td><h4>{ props.date }</h4></td>
  </tr>
  <tr>
    <td>
      <article>{ props.children }</article>
    </td>
  </tr>
  <tr style={ { height: '20px' } }/>
  <hr/>
</>;
