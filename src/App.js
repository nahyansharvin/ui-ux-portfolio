import React from 'react'

import { Footer, Blog, Possibility, Works, Header, Services } from './containers'
import { Contact, Brand, Navbar } from './components'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Header />
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
