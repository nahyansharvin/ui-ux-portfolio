import React from 'react'

//Custom components
import { Footer, Works, Header, Services, Hero } from './containers'
import { Contact, Brand, Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <Brand />
            <Services />
            <Works />
            <Contact />
            <Footer />

        </div>
    )
}

export default App
