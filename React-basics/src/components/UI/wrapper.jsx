import React from 'react'

// to reduce duplication of code, we can create a wrapper component that will wrap the other components

const wrapper = (props) => {
    const classes = 'wrapper ' + props.className   
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default wrapper