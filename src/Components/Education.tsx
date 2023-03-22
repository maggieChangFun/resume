import React from 'react';
import './Components.css'

function Education(props: {
    degree: string;
    school: string;
    location: string;
    graduationYear: string;
}) {
    return (
        <div className='education'>
            <div>
                <span className='degree'>{props.degree}</span>・
                <span>{props.school}</span>・
                <span>{props.location}</span>・
                <span>{props.graduationYear}</span>
            </div>
        </div>
    );
  }
  export default Education;