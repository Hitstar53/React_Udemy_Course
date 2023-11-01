import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('Select Year')
    let filteredExpenses
    if (filteredYear === 'Select Year' || filteredYear === 'All') {
        filteredExpenses = props.expenses
    } else {
        filteredExpenses = props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        })
    }
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <div className='expenses'>
            <ExpenseFilter onFilterChange={filterChangeHandler} selected={filteredYear} />
            {/* {filteredYear === 'Select Year' || filteredYear === 'All' ? <ExpensesChart expenses={props.expenses} /> : <ExpensesChart expenses={filteredExpenses} /> }
            { filteredYear === 'Select Year' || filteredYear === 'All' ? <ExpensesList expenses={props.expenses} /> : <ExpensesList expenses={filteredExpenses} /> } */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </div>
    )
}

export default Expenses