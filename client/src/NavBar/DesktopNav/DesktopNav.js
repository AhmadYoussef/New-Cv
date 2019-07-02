import React from 'react';
import classes from './DesktopNav.module.scss';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const DesktopNav = (props) => {
    const scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    return (
        <>
            <div className={classes.logo}>
                <NavLink to={`${props.path}#home`}
                    smooth>
                    <div style={{ backgroundColor: "#333333" }}>
                        <img src={require("../../assets/images/logo.png")} alt="" />
                    </div>
                </NavLink>
            </div>
            <div className={classes.nav}>
                <ul>
                    <NavLink smooth to={`${props.path}#home`}>
                        <li>{props.home}</li>
                    </NavLink>
                    <li></li>
                    <NavLink to={`${props.path}#about`}
                        scroll={el => scroll(el)}>
                        <li>{props.about}</li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        to={`${props.path}#project`}
                        scroll={el => scroll(el)}
                    ><li>{props.project}</li></NavLink>
                    <li></li>
                    <NavLink to={`${props.path}#contact`}
                        scroll={el => scroll(el)}>
                        <li>{props.contact}</li>
                    </NavLink>
                </ul>
            </div>
            <div className={classes.languageSite}><Link to="/" onClick={() => props.updatePath('/')}>EN </Link><span>|</span><Link to="/de" onClick={() => props.updatePath('de')}> DE</Link></div>
        </>
    );
}

export default DesktopNav;