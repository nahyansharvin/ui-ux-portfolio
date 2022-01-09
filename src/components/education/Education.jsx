import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Bachelor Degree' duration='Oct 2020 - Present' company='EMEA College, Kondotty (University of Calicut)' text="Currently pursuing Undergraduate degree in Computer science whith mathematics and stastics as complemetary subjects." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Higher Secondary' duration='Jun 2018 - March 2020' company='Rahmania HSS, Calicut-8' text="Completed Higher Secondary education in Science stream with an overall grade of 94%." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='High School' duration='Jun 2015 - March 2018' company='PTMHSS Kodiyathur' text="Passed out Secondary School Leaving Certificate(SSLC) in 2018 from PTMHSS Kodiyathur." />
            </div>
        </div>
    )
}

export default Education
