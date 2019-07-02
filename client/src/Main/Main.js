import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import SkillsList from '../Skills/SkillsList';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact';

const Main = (props) => {
    const lang = props.match.path.substr(1);
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

export default Main