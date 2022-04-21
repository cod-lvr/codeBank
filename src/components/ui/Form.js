import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import ErorrMsg from "./ErorrMsg";

import Button from "./Button";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const RegisterForm = (props) => {
  const [firstNameMesg, setFirstNameMesg] = useState("");
  const [lastNameMesg, setLastNameMesg] = useState("");
  const [emailMesg, setEmailMesg] = useState("");
  const [phoneMesg, setPhoneMesg] = useState("");

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const telInputRef = useRef();
  const emailInputRef = useRef();

  const validateNotEmtyInput = (first, last, email, tel) => {
    if (!first.trim().length || !last.trim().length === 0 || !email || !tel) {
      setFirstNameMesg("Required");
      setLastNameMesg("Required");
      setEmailMesg("Required");
      setPhoneMesg("Required");
      return false;
    }
    return true;
  };

  const validateEnteredInput = (first, last, email, tel) => {
    
    if (first.trim().length > 15) {
      setFirstNameMesg("Must be 15 characters or less");
      return false;
    }

    if (last.trim().length > 20) {
      setLastNameMesg("Must be 20 characters or less");
      return false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailMesg("Invalid email address");
      return false;
    }
      // regx XXX-XXX-XXXX OR ANY WITH 10 NUM
    if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(tel)
    ) {
      setPhoneMesg("Invalid Phone number address");
      return false;
    }
    return true;
  };

  const isValidInput = (first, last, email, tel) => {
     if (
       !validateNotEmtyInput(
         first,
         last,
         email,
         tel
       ) ||
       !validateEnteredInput(
         first,
         last,
         email,
         tel
       )
     ) {
       return false;
     }
     return true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEamil = emailInputRef.current.value;
    const enteredTel = telInputRef.current.value;


    if (!isValidInput(enteredFirstName,
        enteredLastName,
        enteredEamil,
        enteredTel)) {
      return;
    } 
    
    props.onRegiste(
      enteredFirstName,
      enteredLastName,
      enteredEamil,
      enteredTel
    );
    props.onConfirm();
  };

  return (
    <div className="modal">
      <header className="header">
        <h2>Register Form</h2>
      </header>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            className="first-name"
            type="text"
            ref={firstNameInputRef}
          />
          {firstNameMesg ? <ErorrMsg>{firstNameMesg}</ErorrMsg> : null}
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            className="last-name"
            type="text"
            ref={lastNameInputRef}
          />
          {lastNameMesg ? <ErorrMsg>{lastNameMesg}</ErorrMsg> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="email"
            type="email"
            ref={emailInputRef}
          />
          {emailMesg ? <ErorrMsg>{emailMesg}</ErorrMsg> : null}
        </div>
        <div className="form-control">
          <label htmlFor="telephone">Phone Number</label>
          <input
            id="telephone"
            className="telephone"
            type="number"
            ref={telInputRef}
          />
          {phoneMesg ? <ErorrMsg>{phoneMesg}</ErorrMsg> : null}
        </div>
        <div className="form-control">
          <Button type="submit" className="btn">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

const Form = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <RegisterForm onConfirm={props.onConfirm} onRegiste={props.onRegiste}/>,
        document.getElementById("form-model")
      )}
    </React.Fragment>
  );
};

export default Form;
