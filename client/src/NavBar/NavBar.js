import React from 'react';
import DesktopNav from './DesktopNav/DesktopNav';
import withSizes from 'react-sizes'
import classes from "./NavBar.module.scss";
import SideNavBar from './SideNavBar/SideNavBar';
import { langData } from '../assets/data/Data';


class NavBar extends React.Component {
    state = {
        path: '/'
    }
    updatePath = (path = '/') => {
        this.setState({ path: path })
    }
    render() {
        let content = { ...langData.en };
        if (this.state.path === 'de')
            content = { ...langData.de };
        let mobDesTopggle = <DesktopNav {...content} updatePath={this.updatePath} path={this.state.path} />;
        if (this.props.isMobile) {
            mobDesTopggle = <SideNavBar {...content} updatePath={this.updatePath} path={this.state.path} />;
        }
        return (
            <nav className={classes.navBar}>
                {mobDesTopggle}
            </nav>
        );
    }
}
const mapSizesToProps = ({ width }) => ({
    isMobile: width < 850,
})
export default withSizes(mapSizesToProps)(NavBar);