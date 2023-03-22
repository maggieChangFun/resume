import React from 'react';
import './Components.css'

function Job(props: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    details:string[];
    skills:string[];
}) {
    return (
        <div className=''>
            <div>
                <span className='title'>{props.title}</span>・
                <span>{props.company}</span>・
                <span>{props.location}</span>・
                <span>{props.startDate} - {props.endDate}</span>
            </div>
            <div>
                <ul>
                    {props.details.map((detail: string) => (
                        <li>{detail}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
  }
  export default Job;