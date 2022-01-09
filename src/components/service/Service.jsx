import React from 'react'
import './service.css'

function Service({ icon, title, text }) {
    return (
        <div className='service-grid'>
        <div className='service-grid-icon'>
            <img src={icon} alt="Icon" />
        </div> 
        <h2 className='gradient-text'>{title}</h2>
        <p>{text}</p>
            
        </div>
    )
}

export default Service
