import React from 'react'
import useInput from '../hooks/use-input-reducer'

const BasicForm = () => {
    const {
        value: firstName,
        isValid: firstNameIsValid,
        hasError: firstnameInputHasError,
        valueChangeHandler: firstnameChangedHandler,
        inputBlurHandler: firstnameBlurHandler,
        reset: resetfirstNameInput,
    } = useInput(value => value.trim() !== '')

    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastnameInputHasError,
        valueChangeHandler: lastnameChangedHandler,
        inputBlurHandler: lastnameBlurHandler,
        reset: resetlastNameInput,
    } = useInput(value => value.trim() !== '')

    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const {
        value: enteredEmail,
        isValid: EmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => emailregex.test(value))

    const formIsValid = firstNameIsValid && lastNameIsValid && EmailIsValid

    const formSubmissionHandler = event => {
        event.preventDefault()
        if (!formIsValid) {
            return
        }
        resetfirstNameInput()
        resetlastNameInput()
        resetEmailInput()
    }

    const firstnameInputClasses = !firstnameInputHasError ? 'form-control' : 'form-control invalid'
    const lastnameInputClasses = !lastnameInputHasError ? 'form-control' : 'form-control invalid'
    const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstnameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input value={firstName} type='text' id='name' onChange={firstnameChangedHandler} onBlur={firstnameBlurHandler} />
                    {firstnameInputHasError && <p className='error-text'>First Name must not be empty.</p>}
                </div>
                <div className={lastnameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input value={lastName} type='text' id='name' onChange={lastnameChangedHandler} onBlur={lastnameBlurHandler} />
                    {lastnameInputHasError && <p className='error-text'>Last Name must not be empty.</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input value={enteredEmail} type='text' id='name' onChange={emailChangedHandler} onBlur={emailBlurHandler} />
                {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm