import React, { useState } from 'react'
import './NewExpense.css'

const NewExpense = (props) => {
    // multiple states
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    // single state
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
        props.onNewExpense(expenseData)
    }

    const titleChangeHandler = (event) => {
        // for multiple states
        // setEnteredTitle(event.target.value)
        // for single state (this is not the best approach)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // when you depend on the previous state, use this syntax
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value)
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value)
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    const [isAddExpense, setIsAddExpense] = useState(false)
    const addExpenseHandler = () => {
        setIsAddExpense(true)
    }
    const cancelExpenseHandler = () => {
        setIsAddExpense(false)
    }

    return (
        <div className='new-expense'>
            {!isAddExpense && <button type='button' onClick={addExpenseHandler}>Add New Expense</button>}
            {isAddExpense && 
                <form className='new-expense__controls' onSubmit={submitHandler} >
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' value={userInput.enteredDate} onChange={dateChangeHandler} />
                    </div>
                    <div className='new-expense__actions'>
                        <button type='button' onClick={cancelExpenseHandler}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default NewExpense