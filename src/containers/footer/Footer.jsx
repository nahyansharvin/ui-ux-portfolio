import React from 'react'
import { SocialMedia } from '../../components'
import './footer.css'

//Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'>
            <div className='contact-details'>
                <div className='contact-details-wrapper'>
                    <div className='address contact-details-child'>
                        <LocationOnIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>Konnalath House, Cheruvadi PO, <br /> Kozhikode, Kerala, 673661</p>
                    </div>
                    <div className='email contact-details-child'>
                        <EmailIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>nskonnalath@gmail.com <br /> nahyan@emeacollege.ac.in</p>
                    </div>
                    <div className='phone contact-details-child'>
                        <CallIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>+91 9895 790 126</p>
                    </div>
                </div>

            </div>
            <SocialMedia />
            <div className='footer-copyright'>
                <p>© 2022 NAHYAN. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
