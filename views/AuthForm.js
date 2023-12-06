// AuthForm.js

import React, { useState } from 'react';
import './AuthForm.css';
import { registerUser, login } from "../viewModels/authFormViewModel.js"

export const AuthForm = ({ setToken }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ username: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const authStatus = await login(loginData);
    setToken(authStatus);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', registrationData);
    registerUser(registrationData);
  };

  return (
    <div className="auth-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="loginUsername">Username:</label>
          <input
            type="text"
            id="loginUsername"
            name="username"
            value={loginData.username}
            onChange={handleLoginChange}
          />
          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="registration-form">
        <h2>Registration</h2>
        <form onSubmit={handleRegistrationSubmit}>
          <label htmlFor="regUsername">Username:</label>
          <input
            type="text"
            id="regUsername"
            name="username"
            value={registrationData.username}
            onChange={handleRegistrationChange}
          />
          <label htmlFor="regPassword">Password:</label>
          <input
            type="password"
            id="regPassword"
            name="password"
            value={registrationData.password}
            onChange={handleRegistrationChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;