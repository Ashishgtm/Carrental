import React, { useState } from 'react';
import '../assests/css/Login.css';
import { Link } from 'react-router-dom';


const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your signup logic
    // For demo purposes, let's just pass the username to the parent component
    onSignup(username);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Sign Up</h2>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
        
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
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
      <button type="submit" className="submit-button">Sign Up</button>
      <h6>Already have a account</h6>
      <Link to="/login">Login</Link> 
    </form>
  );
};

const App = () => {


  const handleSignup = (username) => {
    alert(`Signed up as ${username}`);
  };

  return (
    <div className="container">
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default App;
