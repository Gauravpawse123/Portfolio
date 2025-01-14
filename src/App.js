import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Header }from './conponents/Header';
import {Home} from './conponents/Home';
import {About} from './conponents/About';
import Contact from './conponents/Contact';
import Project from './conponents/Project';

function App() {
  
 return (
   
    <Router>
      <Header about="About"/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/projects' element={<Project />}/>
      </Routes>
    </Router>
  )
}
export default App;