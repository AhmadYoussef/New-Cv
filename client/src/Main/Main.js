import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import SkillsList from '../Skills/SkillsList';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact';

let navActive = {
    home: false,
    about: false,
    skills: false,
    project: false,
    contact: false,
}
class Main extends React.Component {

    componentDidMount() {
        const nav = { ...navActive }
        nav.home = true;
        this.props.updateState(nav);
        window.addEventListener("scroll", this.scrollHandler);
    }
    componentWillUnmount() {
        window.removeEventListener(this.scrollHandler);
    }
    scrollHandler = () => {
        let about = document.getElementById('about').getBoundingClientRect().top;
        let project = document.getElementById('project').getBoundingClientRect().top;
        let contact = document.getElementById('contact').getBoundingClientRect().top;
        const nav = { ...navActive }

        if (window.scrollY > 0 && !this.props.topPosition) {
            this.props.updateState(true);
        } else if (window.scrollY <= 0 && this.props.topPosition) {
            this.props.updateState(false);
        }
        if ((contact < 100 || ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) && !nav.contact) {
            nav.contact = true
        } else if (project < 100 && !nav.project) {
            nav.project = true
        } else if (about < 100 && !nav.about) {
            nav.about = true
        } else if (!nav.about) {
            nav.home = true
        }
        this.props.updateState(nav);
    }

    render() {
        let lang = this.props.match.path.substr(1)
        return (
            <main>
                <Home lang={lang} />
                <About lang={lang} />
                <SkillsList lang={lang} />
                <ProjectList lang={lang} />
                <Contact lang={lang} />
            </main>
        );
    }
}

export default Main