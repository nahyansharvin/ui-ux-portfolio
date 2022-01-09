import React from 'react'
import { Service } from '../../components'
import './services.css'

//Icons
import ArchitectureIcon from '@mui/icons-material/Architecture';

function Services() {
    return (
        <div className='services section-margin' id='services'>
            <h1 className='gradient-text'>Services Offered</h1>
            <div className='services-container'>
                <div className='services-container-grid'>
                    <Service icon={ } title="Ui/Ux Design" />
                </div>
            </div>
        </div>
    )
}

export default Services
