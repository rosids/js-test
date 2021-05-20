import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  const validateLogin = () => {
    const isEmail = /\S+@\S+\.\S+/;
    const MINIMUM_PASSWORD_SIZE = 6;
    return !isEmail.test(email) || password.length < MINIMUM_PASSWORD_SIZE;
  };

  return (
    <div className={style.loginContainer}>
      <form className={style.form}>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={handleEmail}
          placeholder="nome@email.com"
        />
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={handlePassword}
          placeholder="senha"
        />
        <Link to="/projects">
          <button
            type="submit"
            disabled={validateLogin()}
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}
