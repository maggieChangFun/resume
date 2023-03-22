import React from 'react';
import Education from '../components/Education';
import data from '../data.json';

function Educations() {
  return (
    <div className=''>
        <h1>Education</h1> 
        <Education
            degree={data.education.MS.degree} 
            school={data.education.MS.school} 
            location={data.education.MS.location} 
            graduationYear={data.education.MS.graduationYear}
        ></Education>
        <Education
            degree={data.education.BS.degree} 
            school={data.education.BS.school} 
            location={data.education.BS.location} 
            graduationYear={data.education.BS.graduationYear}
        ></Education>
    </div>
   
  );
}
export default Educations;