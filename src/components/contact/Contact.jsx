import React from 'react'
import { ContactForm } from '..'
import './contact.css'

function Contact() {
    return (
        <div className='contact section-margin' id='contact'>
            <div className='contact-heading'>
                <h2>I'd Love To Hear From You.</h2>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact
