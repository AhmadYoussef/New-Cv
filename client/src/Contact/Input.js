import React from 'react';

const Input = (props) => {
    let placeHolder = props.placeHolder.en;
    if (props.lang === 'de')
        placeHolder = props.placeHolder.de;


    let elementTag = <input
        className={!props.isValid && props.isSubmit ? props.error : ''}
        placeholder={placeHolder}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.updateInputValueHandler(e, props.name)} />
    if (props.elementTag === 'textarea') {
        elementTag = <textarea rows='4'
            className={!props.isValid && props.isSubmit ? props.error : ''}
            placeholder={placeHolder}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={(e) => props.updateInputValueHandler(e, props.name)} />
    }
    return (
        <>
            {elementTag}
        </>
    );
}

export default Input;