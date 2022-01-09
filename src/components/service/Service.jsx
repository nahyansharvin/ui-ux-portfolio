import React from 'react'
import './service.css'

function Service({ title, text }) {
    return (
        <div className='service-grid'>
        <h2>{title}</h2>
        <p>{text}</p>
            
        </div>
    )
}

export default Service
