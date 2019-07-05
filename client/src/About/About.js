import React from 'react';
import classes from "./About.module.scss";
import { langData } from '../assets/data/Data';
import { Animate, AnimateGroup } from 'react-simple-animate';

const About = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    return (
        <div id="about" className={classes.about}>
            <AnimateGroup play={props.isAnimation}>
                <Animate
                    sequenceIndex={0}
                    duration={.5}
                    start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateY(-40px)' }}
                    end={{ opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }}
                >
                    <h2>{content.about}</h2>
                </Animate>
                <Animate
                    sequenceIndex={1}
                    duration={.8}
                    start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateX(-40px)' }}
                    end={{ opacity: 1, filter: 'blur(0)', transform: 'translateX(0)' }}
                >
                    <div className={classes.aboutContainer}>
                        <p>
                            {content.aboutText()}
                        </p>
                        <div className={classes.divider}></div>
                        <div className={classes.aboutImage}>
                            <img src={require('../assets/images/profilePicture.jpg')} alt="Profile" />
                        </div>
                    </div>
                </Animate>
            </AnimateGroup>
        </div>

    );
}

export default About;