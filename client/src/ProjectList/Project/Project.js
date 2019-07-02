import React from 'react';
import classes from './Project.module.scss';
import Language from './Language';

const Project = (props) => {
    let btn = classes.btn;
    if (props.disable)
        btn += ' ' + classes.disable
    return (
        <figure className={classes.projectContainer}>
            <div className={classes.imgContainer}>
                <img src={require('../../assets/images/Projects/' + props.images)} alt="" />
            </div>
            <figcaption className={classes.projectInfo}>
                <div className={classes.languages}>
                    {props.languages.map((item, index) => <Language key={index} language={item} />)}

                </div>
                <div className={classes.btnContainer}>
                    <a className={btn} target='_blank' rel="noopener noreferrer" href={props.codeLink} >Code</a>
                    <a className={classes.btn} target='_blank' rel="noopener noreferrer" href={props.viewLink} >{props.btnText}</a>
                </div>
            </figcaption >
        </figure >
    );
}

export default Project;