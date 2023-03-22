import React from 'react';
import data from '../data.json';
import './Components.css'


function Contact() {
    return (
      <div className=''>
          <div className='name'>{data.contact.name}</div>
          <div className='contactInfo'>
            {data.contact.recentLocation}・
            <a href= {"mailto:"+data.contact.email}>{data.contact.email}</a>・
            <a href={data.contact.githubLink}>GitHub</a>・
            <a href={data.contact.linkedin}>LinkedIn</a>
          </div>
          <div className='summary'>
            {data.contact.summary}
          </div>
      </div>
    );
  }
  export default Contact;