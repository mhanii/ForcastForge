import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../signuppage/signuppage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="auth-container">
      <header>
        <img src="/path_to_your_logo.png" alt="ForecastForge Logo" className="logo" />
      </header>
      <main>
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Iniciar sesión</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>¿No tienes una cuenta? <Link to="/signup">Inscribirse</Link></p>
      </main>
    </div>
  );
};

export default LoginPage;