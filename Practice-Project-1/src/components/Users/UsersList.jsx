import React from 'react'
import Container from '../UI/Container'
import styles from './UsersList.module.css'

const UsersList = (props) => {
    let counter = 0
    return (
        <Container className={styles.users}>
            <ul>
                {props.users.length === 0 && <p>No users found.</p>}
                {props.users.map((user) => (
                    <li 
                        key={user.id}
                        style={{ backgroundColor: counter++ % 2 === 0 ? '#dc354533' : '#007bff33', 
                                 borderColor: counter % 2 !== 0 ? '#dc3545' : '#007bff' }}
                    >
                        <p>{user.name}</p>
                        <p>{user.age} years</p>
                    </li>
                ))}
            </ul>
        </Container>   
    )
}

export default UsersList