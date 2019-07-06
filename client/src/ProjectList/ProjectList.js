import React from 'react';
import classes from './ProjectList.module.scss';
import Project from './Project/Project';
import { projects } from '../assets/data/Data';
import { langData } from '../assets/data/Data';
// import { Animate, AnimateGroup } from 'react-simple-animate';


const ProjectList = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    return (
        <div id="project" className={classes.projectList}>
            {/* <AnimateGroup play={props.isAnimation}>
                <Animate
                    sequenceIndex={0}
                    duration={.8}
                    start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateY(-40px)' }}
                    end={{ opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }}
                > */}
            <h2>{content.project}</h2>
            {/* </Animate>

                <Animate
                    sequenceIndex={1}
                    duration={.8}
                    start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateX(-40px)' }}
                    end={{ opacity: 1, filter: 'blur(0)', transform: 'translateX(0)' }}
                > */}
            <div className={classes.projectContainer}>
                {
                    projects.map((item, index) =>
                        < Project key={item.id} {...item} btnText={content.projectBtn} />
                    )
                }
            </div>
            {/* </Animate>

            </AnimateGroup> */}
        </div>
    );
}

export default ProjectList;