import { useState } from 'react';

export default function Form({ title, handleClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validityCheck() {
    if (password.length < 6) alert('password must be longer than 5 characters');
    else handleClick(email, password);
  }
  return (
    <>
      <div className="row">
        <input
          required
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          required
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          title === 'register' ? validityCheck() : handleClick(email, password);
        }}
      >
        {title}
      </button>
    </>
  );
}
