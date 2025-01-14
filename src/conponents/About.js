import React from 'react'
import myPhoto from "./Images/me1.JPG";
import Footer from './Footer';

export const About = () => {
  return (
    <div className="container-fluid text-light">
      <div className='container row mt-5'>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
        <h2 className='imp-text'>Hello 👋....</h2>
          <h2>I'm Gaurav Pawse</h2>
          <h2 className='gradient-text'>MERN Stack Developer</h2>
        </div>
        <div className='col-sm-6 d-flex justify-content-center align-items-center'>
           <img
              src={myPhoto}
              alt="My Profile"
                style={{ height: "400px", width: "70%", borderRadius: "30px" }}
            />
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center mt-5'>
          <h2 className=' text-secondary'>Introduction</h2>
      </div>
      <div className='container text-center mx-5'>
      <p>
          I'm a Motivated MERN stack developer with a strong foundation in{" "}
          <b>JavaScript, React, Node.js, Express.js and MongoDB.</b> Seeking an
          entry-level position to apply my technical skills and contribute to
          innovative web development projects.
        </p>
        <p>
          I am A MERN stack developer specializes in building full-stack web applications using the MERN stack, which comprises four key technologies:
        </p>
        <p>
          1. <b>MongoDB:</b> A NoSQL database used for storing and managing data.
        </p>
        <p>
          2. <b>Express.js:</b> A backend web application framework for building APIs and handling server-side logic.
        </p>
        <p>
          3. <b>React:</b> A frontend library for building user interfaces.
        </p>
        <p>
          4. <b>Node.js:</b> A JavaScript runtime environment for executing JavaScript code server-side.
        </p>
      </div>
      <Footer/>
    </div>
  )
}