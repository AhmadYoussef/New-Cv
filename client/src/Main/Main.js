import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import SkillsList from '../Skills/SkillsList';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact';
let initAnimation = {
    about: false,
    skills: false,
    project: false,
    contact: false,
    footer: false,
}
class Main extends React.Component {
    state = {
        animation: initAnimation
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }
    componentWillUnmount() {
        window.removeEventListener(this.scrollHandler);
    }
    scrollHandler = () => {
        let about = document.getElementById('about').getBoundingClientRect().top;
        let skills = document.getElementById('skills').getBoundingClientRect().top;
        let project = document.getElementById('project').getBoundingClientRect().top;
        let contact = document.getElementById('contact').getBoundingClientRect().top;
        const animate = { ...initAnimation }
        if (about < window.innerHeight / 2) {
            animate.about = true;
        }
        if (skills < window.innerHeight / 2) {
            animate.skills = true;
        }
        if (project < window.innerHeight / 2) {
            animate.project = true;
        }
        if (contact < window.innerHeight / 2) {
            animate.contact = true;
        }
        this.setState({ animation: animate })
    }

    render() {
        let lang = this.props.match.path.substr(1)
        return (
            <main>
                <Home lang={lang} />
                <About isAnimation={this.state.animation.about} lang={lang} />
                <SkillsList isAnimation={this.state.animation.skills} lang={lang} />
                <ProjectList isAnimation={this.state.animation.project} lang={lang} />
                <Contact isAnimation={this.state.animation.contact} lang={lang} />
            </main>
        );
    }
}

export default Main