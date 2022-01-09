import React from 'react'

//Custom components
import { Footer, Works, Services, Hero, Resume } from './containers'
import { Contact, Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <Services />
            <Resume />
            <Works />
            <Contact />
            <Footer />

        </div>
    )
}

export default App
