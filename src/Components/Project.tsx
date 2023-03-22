import React from 'react';

function Project(props: {
    projectName: string;
    demoLink: string;
    date: string;
    details: string[];
}) {
    return (
        <div className=''>
            <div>
                <span className=''>{props.projectName}</span>・
                <span><a href={props.demoLink}>Demo</a></span>・
                <span>{props.date}</span>
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
  export default Project;