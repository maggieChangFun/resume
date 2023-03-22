import React from 'react';
import './App.css';
import Educations from './containers/Educations';
import Experience from './containers/Experience';
import Header from './containers/Header';
import Projects from './containers/Projects';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Experience/>
      <Projects/>
      <Educations/>
    </div>
  );
}

export default App;
