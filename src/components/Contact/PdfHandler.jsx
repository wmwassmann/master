import React, { Component } from 'react';
import Pdf from '../../assets/Resume.pdf';
import "../../css/PageStyles/AboutMe/aboutMe.css"

class Download extends Component {

  render() {

    return (
        <div className='resume-button'>
          <a href={Pdf} target="_blank">Resume.pdf</a>
        </div>
    );

  }
}

export default Download;