import React, { useState } from 'react';
import '../assests/css/Login.css';

import { Link } from 'react-router-dom';


const LoginForm = ({ onLogin }) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your authentication logic
    // For demo purposes, let's just pass the username to the parent component
    onLogin(username);
  };

  return (

    <form onSubmit={handleSubmit} className="form">
      
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
      </label>
      <button type="submit" className="submit-button">Login</button>
      <h6>New to account</h6>
      <Link to="/signup">Signup</Link> 
         </form>
  );
};

const App = () => {
  const handleLogin = (username) => {
    alert(`Logged in as ${username}`);
  };



  return (
    <div className="container">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default App;
