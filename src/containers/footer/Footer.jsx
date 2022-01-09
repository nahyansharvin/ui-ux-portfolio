import React from 'react'
import { SocialMedia } from '../../components'
import './footer.css'

function Footer() {
    return (
        <div className='footer section-padding'>
            <SocialMedia />
            <div className='footer-copyright'>
                <p>© 2021 NAHYAN. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
