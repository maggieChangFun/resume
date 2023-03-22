import React from 'react';
import data from '../data.json'


function Contact() {
    return (
      <div className='App'>
          <div>{data.name}</div>
          <div>{data.recentLocation}</div>
          <div>
            <div>
                <a href= {"mailto:"+data.email}>{data.email}</a>
            </div>
            <div>
                <a href={data.githubLink}>{data.githubLink}</a>
            </div>
            <div>
                {data.phobeNumber}
            </div>
          </div>
          <div>
            {data.summary}
          </div>
      </div>
    );
  }
  export default Contact;