import React from 'react';
import '../styles/Misc.css';
import menger from '../images/menger.jpg';
// import me from '../images/portrait-me.jpg';
// import om from '../images/portrait-om.jpg';
// import xan from '../images/portrait-xan.jpg';
// import xannie from '../images/portrait-xan-photo.jpg';

const Misc = () => {
    return (
      <div>
        <h1>Misc</h1>
        <table><tbody><tr>
          <td>Menger sponge cake</td>
          <td><img src={menger} alt="menger sponge cake" /></td>
        </tr></tbody></table>
      </div>
    );
}

export default Misc;
