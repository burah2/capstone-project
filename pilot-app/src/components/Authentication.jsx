// src/Authentication.js
import React from 'react';

const Authentication = () => {
  const login = () => {
    // Add your login logic here
    console.log('Login logic goes here');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Authentication;
