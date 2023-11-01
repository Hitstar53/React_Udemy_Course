import React, { useState } from 'react'
import useInput from '../hooks/use-input-reducer'

const SimpleInput = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '')

    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => emailregex.test(value))


    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = event => {
        event.preventDefault()
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }
        resetNameInput()
        resetEmailInput()
    }

    const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid'
    const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input value={enteredName} type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} />
                {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input value={enteredEmail} type='email' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} />
                {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput