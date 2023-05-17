import { IoBackspace } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function AdminLogin() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            {" "}
            <h1>e-pacijent</h1>{" "}
          </Link>
        </div>
        <p style={{ fontSize: 100 }}> 👨‍💻</p>
        <ul>
          <li>
            <h1>Prijava admina</h1>
            <Link to="/">
              <IoBackspace size={40}></IoBackspace>
            </Link>
          </li>
        </ul>
      </header>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="e-mail adresa"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Lozinka"
            />
          </div>
          <div className="form-group">
            <Link to="/admindash">
              <button type="submit" className="btn btn-block">
                Prijava
              </button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default AdminLogin;

/*
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { ReactDOM } from "react";
import {Route, Routes} from 'react-router';
import AdminDashboard from "./AdminDashboard";



function AdminLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="btn">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>

        {isSubmitted ? <div>
          
          User is successfully logged in</div> : renderForm}
          <AdminDashboard></AdminDashboard>

      </div>
    </div>
  );
}

export default AdminLogin;*/
