import React from 'react';
import '../styles/App.css';
import {Art} from './Art';

export const PageWrapper: React.FC<any> = props => <main className={props.className}>
    <Art/>
    {props.children}
</main>
