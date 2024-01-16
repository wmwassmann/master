import React, { Component } from 'react';
import Pdf from '../../assets/Resume.pdf';
import "../../css/aboutMe.css"

class Download extends Component {

  render() {

    return (
        <div>
          <a href={Pdf} target="_blank">Resume.pdf</a>
        </div>
    );

  }
}

export default Download;