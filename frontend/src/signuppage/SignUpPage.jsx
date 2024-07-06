import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './signuppage.css';

const SignupPage = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('');
  const [alerts, setAlerts] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    // Set the plan from the state passed by PricingPage
    if (location.state && location.state.selectedPlan) {
      setPlan(location.state.selectedPlan);
    } else {
      // If no plan was selected, redirect to pricing page
      navigateTo("/pricing");
    }
  }, [location, navigateTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { name, email, password, plan, alerts });
  };

  return (
    <div className="auth-container">

      <main>
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Inscribirse - {plan.toUpperCase()} Plan</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          {plan === 'premium' && (
            <label>
              <input
                type="checkbox"
                checked={alerts}
                onChange={(e) => setAlerts(e.target.checked)}
              /> Recibir alertas
            </label>
          )}
          <button type="submit">Completar registro</button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
      </main>
    </div>
  );
};

export default SignupPage;