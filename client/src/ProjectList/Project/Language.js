import React from 'react';
import classes from './Language.module.scss';

const Language = (props) => {
    return (
        <div className={classes.langContainer}>
            <p>{props.language}</p>
        </div>
    );
}

export default Language;