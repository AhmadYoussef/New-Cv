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
                    <p>Ahmad.k.youssef@gmail.com</p>
                </div>
                <div className={classes.logos}>
                    <img src={require('../assets/images/svg/xking.svg')} alt="xking" />
                    <img src={require('../assets/images/svg/linkedin.svg')} alt="linkedin" />
                    <img src={require('../assets/images/svg/pen.svg')} alt="pen" />
                    <img src={require('../assets/images/svg/github.svg')} alt="github" />
                </div>
            </div>
            <div className={classes.bottomFooter}>
                <p><small>Wojokh © 2019</small></p>
            </div>
        </footer>
    );
}

export default Footer;