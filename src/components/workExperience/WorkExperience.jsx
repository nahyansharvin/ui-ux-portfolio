import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading'>
                <h2>Work Experience</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Campus Ambassador' duration='Nov 2021 - Present' company='Shaastra, IIT Madras' text="I'm currently working as a Campus Ambassador intern at Shaastra, IIT Madras." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Co-Founder' duration='May 2021 - Present' company='TinkerHub EMEA' text="I co-founded TinkerHub EMEA Chapter with my colleagues. That was a great achievement in our college." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Crative Lead' duration='May 2021 - Present' company='TinkerHub EMEA' text="I bear the role of Creative Lead in TinkerHub EMEA Chapter. My duty is to coordinate every creative tasks such as graphics, video etc. " />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='UI/UX Designer' duration='Feb 2021 - Present' company='Freelance' text="Working as a freelance UI/UX Designer creating stunning User Interface designs with great User Experience. Expertise in design tools such as Figma and Adobe XD." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Graphic Designer' duration='Jun 2019 - Present' company='Freelance' text='I use various design tools  like Adobe Photoshop and Adobe Illustrator to produce attractive graphics and banners.' />
            </div>
        </div>
    )
}

export default WorkExperience
