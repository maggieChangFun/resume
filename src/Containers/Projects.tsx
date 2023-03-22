import React from 'react';
import Project from '../components/Project';
import data from '../data.json';

function Projects() {
  return (
    <div className=''>
        <h1>Project</h1> 
        <Project
            projectName={data.projects.project1.projectName} 
            demoLink={data.projects.project1.demoLink} 
            date={data.projects.project1.date} 
            details={data.projects.project1.details}
        ></Project>
        <Project
            projectName={data.projects.project2.projectName} 
            demoLink={data.projects.project2.demoLink} 
            date={data.projects.project2.date} 
            details={data.projects.project2.details}
        ></Project>
    </div>
   
  );
}
export default Projects;