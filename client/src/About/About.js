import React from 'react';
import classes from "./About.module.scss";
import { langData } from '../assets/data/Data';

const About = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    return (
        <div id="about" className={classes.about}>
            <h2>{content.about}</h2>
            <div className={classes.aboutContainer}>
                {content.aboutText()}
                <div className={classes.divider}></div>
                <div className={classes.aboutImage}>
                    <img src={require('../assets/images/profilePicture.jpg')} alt="Profile" />
                </div>
            </div>
        </div>

    );
}

export default About;