import React from 'react'
import './service.css'

function Service({icon, title, text}) {
    return (
        <div className='service-container'>
        <img src={icon} alt='Icon' />
        <h2>{title}</h2>
        <p>{text}</p>
        </div>
    )
}

export default Service
