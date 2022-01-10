import React from 'react'
import './work.css'

function Work({ image, title, subTitle, text, codeLink, liveLink }) {
    return (
        <div className='work-grid'>
            <div className='work-grid-image'>
                <img src={image} alt='image' />
            </div>
            <div className='work-grid-body'>
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
                <p>{text}</p>

                <div className='work-grid-body-btn'>
                    <a href={codeLink} target="_blank">Details</a>
                    {liveLink && <a href={liveLink} target="_blank">Live App</a> }
                </div>

            </div>
        </div>
    )
}

export default Work
