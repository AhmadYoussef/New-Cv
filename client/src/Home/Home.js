import React from 'react';
import classes from './home.module.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { langData } from '../assets/data/Data';
import { Animate, AnimateGroup } from 'react-simple-animate';
import English from '../assets/pdf/Ahmad-Youssef-CV-English.pdf'
import German from '../assets/pdf/Ahmad-Youssef-CV-German.pdf'

const Home = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    const scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    return (
        <div id="home" className={classes.homeBackground}>
            <AnimateGroup play>
                <div className={classes.center}>
                    <Animate
                        sequenceIndex={0}
                        duration={.7}
                        start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateX(-40px)' }}
                        end={{ opacity: 1, filter: 'blur(0)', transform: 'translateX(0)' }}
                    >
                        {content.homeText1()}
                    </Animate>
                    <Animate
                        sequenceIndex={1}
                        duration={.7}
                        start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateY(40px)' }}
                        end={{ opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }}
                    >
                        <div className={classes.dowAndLogo}>
                            <p>{content.homeText2()}
                                <a href={English} download>{content.cvLang[0]}</a> -
                                <a href={German} download> {content.cvLang[1]}</a>
                            </p>
                            <div className={classes.logos}>
                                <a href="https://www.xing.com/profile/ahmad_Youssef3" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../assets/images/svg/xking.svg')} alt="xking" />
                                </a>
                                <a href="https://www.linkedin.com/in/ahmad-youssef-82107386" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../assets/images/svg/linkedin.svg')} alt="linkedin" />
                                </a>
                                <a href="https://codepen.io/ahmadyoussef/" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../assets/images/svg/pen.svg')} alt="pen" />
                                </a>
                                <a href="https://github.com/AhmadYoussef" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../assets/images/svg/github.svg')} alt="github" />
                                </a>
                            </div>
                        </div>
                    </Animate>
                </div>
                <div className={classes.scrollyPosition}>
                    <Animate
                        sequenceIndex={2}
                        duration={1}
                        start={{ opacity: 0, filter: 'blur(20px)' }}
                        end={{ opacity: 1, filter: 'blur(0)' }}
                        className
                    >
                        <NavLink scroll={el => scroll(el)} to="#about" className={classes.scrolly}>
                            <div className={classes.dot}></div>
                        </NavLink>
                    </Animate>
                </div>
            </AnimateGroup>
        </div>
    );
}

export default Home;