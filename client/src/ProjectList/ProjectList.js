import React from 'react';
import classes from './ProjectList.module.scss';
import Project from './Project/Project';
import { projects } from '../assets/data/Data';
import { langData } from '../assets/data/Data';


const ProjectList = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    return (
        <div id="project" className={classes.projectList}>

            <h2>{content.project}</h2>

            <div className={classes.projectContainer}>
                {
                    projects.map((item, index) =>
                        < Project key={item.id} {...item} btnText={content.projectBtn} />
                    )
                }
            </div>

        </div>
    );
}

export default ProjectList;