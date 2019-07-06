import React from 'react';
import classes from './Footer.module.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer>
            <div className={classes.topFooter}>
                <div className={classes.slideTop}>
                    <NavLink smooth to="#home"  > <img src={require('../assets/images/svg/goTop.svg')} alt="Slide Top" /></NavLink>
                </div>
            </div>
            <div className={classes.middleFooter}>
                <div className={classes.email}>
                    <img src={require('../assets/images/svg/mail.svg')} alt="mail" />
                    <p><a href="mailto:Ahmad.k.youssef@gmail.com" target="_top">Ahmad.k.youssef@gmail.com</a></p>
                </div>
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
            <div className={classes.bottomFooter}>
                <p><small>Wojokh © 2019</small></p>
            </div>
        </footer >
    );
}

export default Footer;