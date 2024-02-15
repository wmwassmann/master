import { React } from 'react';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import Contact from './Contact';
import "../css/siteHubStyles.css"

export default function SiteHub() {    
    return (
        <div className='site-container'>
            <div className='site-component'>
                <HomePage/>
            </div>
            <div className='site-component'>
                <AboutMe/>
            </div>
            <div className='site-component'>
                <Contact/>
            </div>
        </div>
    );
}