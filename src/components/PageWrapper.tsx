import React from 'react';
import '../styles/App.css';

export const PageWrapper: React.FC<any> = props => <div className={props.className} style={{width: "100%"}}>
    {props.children}
</div>
