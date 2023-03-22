import React from 'react';
import Job from '../components/Job';
import data from '../data.json';

function Experience(){
    return (
        <div className=''>
          <h1>Experience</h1>
          <Job 
            title={data.experiences.job1.title} 
            company={data.experiences.job1.company}
            startDate={data.experiences.job1.startDate} 
            endDate={data.experiences.job1.endDate} 
            location={data.experiences.job1.location} 
            details={data.experiences.job1.details}
            skills={data.experiences.job1.skills}
          ></Job>
          <Job 
            title={data.experiences.job2.title} 
            company={data.experiences.job2.company}
            startDate={data.experiences.job2.startDate} 
            endDate={data.experiences.job2.endDate} 
            location={data.experiences.job2.location} 
            details={data.experiences.job2.details}
            skills={data.experiences.job1.skills}
          ></Job>
        </div>
      );
}

export default Experience;