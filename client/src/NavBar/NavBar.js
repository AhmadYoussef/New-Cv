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
    componentDidMount() {
        let lang = window.location.pathname.substr(1);
        this.setState({ path: lang })
    }
    updatePath = (path = '/') => {
        this.setState({ path: path })
    }
    render() {
        console.log(this.state.path)
        let content = { ...langData.en };
        if (this.state.path === 'de')
            content = { ...langData.de };
        let mobDesToggle = <DesktopNav navActive={this.props.navActive} {...content} updatePath={this.updatePath} path={this.state.path} />;
        if (this.props.isMobile) {
            mobDesToggle = <SideNavBar {...content} updatePath={this.updatePath} path={this.state.path} />;
        }
        return (
            <nav className={classes.navBar} style={{ ...this.props.topPosition }}>
                {mobDesToggle}
            </nav>
        );
    }
}
const mapSizesToProps = ({ width }) => ({
    isMobile: width < 850,
})
export default withSizes(mapSizesToProps)(NavBar);