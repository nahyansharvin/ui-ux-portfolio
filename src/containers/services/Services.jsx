import React from 'react'
import { Service } from '../../components'
import './services.css'

//Icons

import { Brackets,DigitalMarketing, Sketch, AppDev } from '../../assets'
function Services() {
    return (
        <div className='services section-margin' id='services'>
        <h1 className='gradient-text'>Services Offered</h1>
        <div className='services-container'>
            <Service icon={DigitalMarketing} title='Ui/Ux Design' text='I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.' />
            <Service icon={Brackets} title='Web Development' text='I use various web technologies to develop attractive websites which converts visitors to customers.' />
            <Service icon={Sketch} title='Graphic Design' text='I use various design tools  like Adobe Photoshop and Adobe Illustrator to produce attractive graphics and banners.' />
            <Service icon={AppDev} title='App Development' text='I develop responsive, stunning web-apps using modern technologies like React.js.'  />
        </div>
        
        </div>
    )
}

export default Services
