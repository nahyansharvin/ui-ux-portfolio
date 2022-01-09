import React from 'react'
import { Service } from '../../components'
import './services.css'

function Services() {
    return (
        <div className='services section-margin' id='#services'>
        <h1 className='gradient-text'>Services Offered</h1>
        <div className='services-container'>
            <Service title='Ui/Ux Design' />
        </div>
        
        </div>
    )
}

export default Services
