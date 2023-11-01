import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {
    return (
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: props.maxValue > 0 ? (props.value / props.maxValue) * 100 + '%' : '0%' }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar