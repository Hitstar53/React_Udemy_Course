import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    return (
        <div>
            {props.expenses.length === 0 && <p className='expenses-list__fallback'>No expenses found.</p>}
            <ul className='expenses-list'>
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ExpensesList