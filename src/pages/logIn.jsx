import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/logIn.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupChecked, setSignupChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Ajoutez un état pour suivre l'état de connexion

  const handleLogin = () => {
    if (email === 'dev204@gmail.com' && password === 'admin123') {
      setLoggedIn(true); 
    } else {
      alert('Identifiants incorrects.');
    }
  };

  const stylelink = {
    color: "white",
    TextDecoder: "none",
  };

  return (
    <Helmet title="Login">
    <CommonSection title="Login Page" />
    <div className="con d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h1 className="text-center mb-4">login Page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"> Email :</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="signupCheckbox"
              checked={signupChecked}
              onChange={() => setSignupChecked(!signupChecked)}
            />
            <label className="form-check-label " htmlFor="signupCheckbox">I don't have an account(Sign up now)</label>
          </div>
          <button type="button" className="buttn" onClick={handleLogin}>
            Log In
          </button>
          {signupChecked && !loggedIn && (
            <button className="buttn">
              <Link to="/Signup" style={stylelink}>Sign Up</Link>
            </button>
          )}
          {loggedIn && <Link to="/home"><button className="buttn">Continue</button></Link>}
        </form>
      </div>
    </div>
    </Helmet>
  );
}

export default Login;
