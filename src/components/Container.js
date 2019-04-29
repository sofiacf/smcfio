import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';

export class Container extends Component {
  render() {
    if (!this.props.loaded) return <div>Loading...</div>;
    const style = {width: '100vw', height: '100vh'};
    return <div style={style}><Map google={this.props.google} /></div>;
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));


export default GoogleApiWrapper({
  apiKey: 'AIzaSyASF5hKHStSm4i3v2-XdyHFR_bUqWLh4m4'
})(Container)
