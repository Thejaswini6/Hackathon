import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
 
const LoginForm = ({ redirectPath }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
 
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'ADMIN' && password === 'ADMIN') {
      history.push(redirectPath);
    } else {
      alert('Invalid credentials');
    }
  };
 
  return (
<form onSubmit={handleLogin}>
<div>
<label>Username:</label>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
</div>
<div>
<label>Password:</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<button type="submit">Login</button>
</form>
  );
};
 
export default LoginForm;