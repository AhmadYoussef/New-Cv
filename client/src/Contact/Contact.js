import React from 'react';
import classes from './Contact.module.scss';
import Input from './Input';
import { langData } from '../assets/data/Data';
import AlertMessage from './AlertMessage/AlertMessage';
import axios from 'axios';
import ReCAPTCHA from 'react-recaptcha';
import './recap.css';
import { Animate, AnimateGroup } from 'react-simple-animate';

const initialState = [
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'firstName',
        placeHolder: {
            en: "Please enter your First Name",
            de: "Bitte geben Sie Ihren Vornamen ein"
        },
        validity: {
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    },
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'lastName',
        placeHolder: {
            en: "Please enter your last Name",
            de: "Bitte geben Sie Ihren Nachnamen ein"
        },
        validity: {
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    },
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'email',
        placeHolder: {
            en: "Please enter your email address",
            de: "Bitte geben Sie Ihre Email-Adresse ein"
        },
        validity: {
            require: true,
            regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        },
        isValid: false
    },
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'telephone',
        placeHolder: {
            en: "Please enter your telephone number",
            de: "Bitte geben Sie Ihre Telefonnummer ein"
        },
        validity: {
            require: true,
            regex: /^\+|[0-9]?()[0-9](\s|\S)(\d[0-9]{8})$/
        },
        isValid: false
    },
    {
        elementTag: 'textarea',
        value: '',
        type: 'text',
        name: 'message',
        placeHolder: {
            en: "Please enter your Message",
            de: "Bitte geben Sie Ihre Nachricht ein"
        },
        validity: {
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    },
]
let recaptchaInstance;
class Contact extends React.Component {
    state = {
        formField: [...initialState],
        isSubmit: false,
        isSend: false,
        reCaptcha: false,
        resMessage: {
            sent: true,
            message: 'yaaay!'
        }
    };
    checkValidation = (value, rule) => {
        let isValid = true;
        if (rule.require) {
            isValid = value.trim() !== "" && isValid;
            if (rule.regex) {
                isValid = rule.regex.test(value) && isValid;
            }
            if (rule.minLength) {
                isValid = rule.minLength < value.length && isValid;
            }
        }
        return isValid;
    }
    updateInputValueHandler = (e, field) => {
        let formInputs = [...this.state.formField];
        let index = formInputs.findIndex(item => item.name === field);
        let updateFormInput = { ...formInputs[index] }
        updateFormInput.value = e.target.value;
        updateFormInput.isValid = this.checkValidation(updateFormInput.value, updateFormInput.validity);
        formInputs[index] = updateFormInput;
        this.setState({ formField: formInputs });
    }
    sendMail = (e) => {
        e.preventDefault();

        this.setState({ isSubmit: true });
        let formIsValid = true;
        let formFieldErr = this.state.formField.map((item) => {
            formIsValid = item.isValid && formIsValid;
            if (!item.isValid) {
                item.value = '';
            }
            return item;
        })
        if (formIsValid && this.state.reCaptcha) {

            let bodyObj = {};
            this.state.formField.forEach(item => bodyObj[item.name] = item.value);
            this.setState({ formField: initialState, isSubmit: false });
            axios.post("/sendmail", { ...bodyObj })
                .then(res => {
                    this.setState({ isSend: true, reCaptcha: false, resMessage: { ...res.data } },
                        () => {
                            recaptchaInstance.reset();
                            setTimeout(() => { this.closeMessageLoader() }, 4000)
                        }
                    )
                }
                ).catch(err => console.log(err, 'ss'));
        } else
            this.setState({ formField: formFieldErr });
    }
    closeMessageLoader = () => {
        this.setState({ isSend: false })
    }
    callBack = () => {
        console.log("reCaptcha Reloaded")
    }
    verifyCallback = (response) => {
        if (response)
            this.setState({ reCaptcha: true })
    }
    render() {
        let content = { ...langData.en };
        if (this.props.lang === 'de')
            content = { ...langData.de };
        return (
            <div id="contact" className={classes.contactContainer}>
                <AnimateGroup play={this.props.isAnimation}>
                    <Animate
                        sequenceIndex={0}
                        duration={.5}
                        start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateY(-40px)' }}
                        end={{ opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }}
                    >
                        <h2>{content.contact}</h2>
                    </Animate>
                    <Animate
                        sequenceIndex={1}
                        duration={.5}
                        start={{ opacity: 0, filter: 'blur(20px)', transform: 'translateX(-40px)' }}
                        end={{ opacity: 1, filter: 'blur(0)', transform: 'translateX(0)' }}
                    >
                        <form onSubmit={this.sendMail}>
                            <p>{content.contactText}</p>
                            {
                                this.state.formField.map(item =>
                                    <Input
                                        key={item.name}
                                        error={classes.error}
                                        isSubmit={this.state.isSubmit}
                                        updateInputValueHandler={this.updateInputValueHandler}
                                        lang={this.props.lang}
                                        {...item} />)
                            }
                            <ReCAPTCHA
                                className={classes.reCaptcha}
                                sitekey="6LfETKwUAAAAADjA7LW_lo8bOLTNrbemJaZUN6VS"
                                ref={e => recaptchaInstance = e}
                                render="explicit"

                                verifyCallback={this.verifyCallback}
                                onloadCallback={this.callBack}
                            />
                            <input type="submit" value="Send" />


                        </form>
                    </Animate>
                    {this.state.isSend ? <AlertMessage {...this.state.resMessage} click={this.closeMessageLoader} /> : null}
                </AnimateGroup>
            </div >
        );
    }
}
export default Contact;