import React from 'react';
import classes from './home.module.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { langData } from '../assets/data/Data';
import { Animate } from 'react-simple-animate';

const Home = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    const scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    return (
        <div id="home" className={classes.homeBackground}>
            <div className={classes.center}>
                <Animate
                    play
                    duration={1}
                    start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateX(-40px)' }}
                    end={{ opacity: 1, filter: 'blur(0)', transform: 'translateX(0)' }}
                >
                    {content.homeText1()}
                </Animate>
                <div className={classes.dowAndLogo}>
                    {content.homeText2()}
                    <div className={classes.logos}>
                        <img src={require('../assets/images/svg/xking.svg')} alt="xking" />
                        <img src={require('../assets/images/svg/linkedin.svg')} alt="linkedin" />
                        <img src={require('../assets/images/svg/pen.svg')} alt="pen" />
                        <img src={require('../assets/images/svg/github.svg')} alt="github" />
                    </div>
                </div>
            </div>
            <NavLink scroll={el => scroll(el)} to="#about" className={classes.scrolly}>
                <div className={classes.dot}></div>
            </NavLink>
        </div>
    );
}

export default Home;