import React, { useState } from 'react';

import img from '../media/logo.png';
import Button from './ui/Button';
import Form from './ui/Form';

const Register = props => {
  const [displayForm, setDisplayForm] = useState(false);

  const formDisplayHandler = () => {
    setDisplayForm(true);
  }

  const formConfirmHandler = () => {
    setDisplayForm(false);
  }

  const registeUser = (firstName, lastName, email, Telephone) => {
    // console.log(firstName, lastName, email, Telephone);

   // LEFTING DATA UP TO SEND TO BACKEND
  }

    return (
      <React.Fragment>
        {displayForm ? <Form onConfirm={formConfirmHandler} onRegiste={registeUser} /> : null}
        <section className="register">
          <div className="content-box">
            <h2 className='title'>REGISTER FOR THE WEBINAR</h2>
            <p className='content'>
              Learn how to launch your own B.A.N.K. business by helping others
              communicate and sell more effectively as a Certified and Licensed
              B.A.N.K. Trainer during our webinar.
            </p>
            <p className='content'>
              Register today to hear why professionals just like you have chosen
              to get certified and licensed to train B.A.N.K.
            </p>
          </div>
          <div className="register-action">
            <div className="logo">
              <img src={img} alt="bank code" />
            </div>
            <Button onClick={formDisplayHandler}>REGISTER NOW</Button>
            <p className='note'>*See our last live session on demand instantly</p>
          </div>
        </section>
      </React.Fragment>
    ); 
}

export default Register;