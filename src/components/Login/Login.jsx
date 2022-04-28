import React, { useState } from "react";
import PropTypes from 'prop-types';
import '../Login/Login.css';
import '../RandUsers/RandUsers.css';

async function loginUser (credentials) {
  return await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

const Login = ({ setToken }) => {  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    if(password.length < 3 || username.length < 3) {
      alert('Username and password must be at least 3 characters long');
    } else {
    e.preventDefault();
    const token = await loginUser({ username, password });
    setToken(token);
    }
  }
  return (
    <div className="login-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform h-[380px] w-[350px] pt-[40px]">
      <h1 className="mb-[25px] font-bold text-[30px] ">Log In</h1>
      <form onSubmit={handleSubmit}>
        <label className="block">
          <p className="after:content-['*'] after:ml-0.5 after:text-red-500">Username</p>
          <input className="border-2 rounded-[5px]" type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className="after:content-['*'] after:ml-0.5 after:text-red-500 pt-[15px]">Password</p>
          <input className="border-2 rounded-[5px]" type="password" onChange={e => setPassword(e.target.value)} required />
        </label>
        <div className="pt-[15px]">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
