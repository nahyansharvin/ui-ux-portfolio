import React from 'react'
import './timelineblock.css'

function TimelineBlock({ icon, title, duration, company, text}) {
    return (
        <div className='timeline-block'>
            <div className='timeline-icon'>
                {icon}
            </div>

            <div className='timeline-header'>
                <h2>{title}</h2>
                <p>{duration}</p>
            </div>

            <div className='timeline-content'>
                <h3>{company}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default TimelineBlock
