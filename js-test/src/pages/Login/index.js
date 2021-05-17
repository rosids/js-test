import React, { useState } from 'react';
import './index.css';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  return (
    <form className="form">
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={handleEmail}
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={handlePassword}
        />
      </label>
    </form>
  );
}
