import React, { useState, useRef } from 'react'
import Container from '../UI/Container'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        // uncontrolled components due to useRef rather than useState
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return
        }
        props.onAddUser(enteredName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={() => setError(null)} />}
            <Container className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder='Enter Name' ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" placeholder='Enter Age' ref={ageInputRef} />
                    <Button type="submit">
                        Add User <i className="fas fa-plus"></i>
                    </Button>
                </form>
            </Container>
        </Wrapper>
    )
}

export default AddUser