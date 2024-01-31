import React, { Component } from 'react';
import Pdf from '../../assets/Resume.pdf';
import "../../css/PageStyles/AboutMe/aboutMe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

class Download extends Component {

  
  render() {
    const pdf = <FontAwesomeIcon icon={faFilePdf} />

    return (
        <div className='resume-button'>
          <a href={Pdf} target="_blank">Resume {pdf}</a>
        </div>
    );

  }
}

export default Download;