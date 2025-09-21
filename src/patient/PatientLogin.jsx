import { useState } from 'react';
import './patient.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function PatientLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsPatientLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const params = new URLSearchParams();
      params.append('email', formData.email);
      params.append('password', formData.password);

      const response = await axios.post(`${config.url}/patient/login?${params.toString()}`);
      
      if (response.status === 200) {
        setIsPatientLoggedIn(true);
        sessionStorage.setItem('patient', JSON.stringify(response.data));
        navigate('/patienthome');
      }
    } catch (err) {
      console.error('Login error:', err);
      let errorMessage = 'An unexpected error occurred';
      
      if (err.response) {
        // Handle different types of error responses
        if (typeof err.response.data === 'string') {
          errorMessage = err.response.data;
        } else if (err.response.data && err.response.data.message) {
          errorMessage = err.response.data.message;
        } else if (err.response.status === 401) {
          errorMessage = 'Invalid email or password';
        } else if (err.response.status === 400) {
          errorMessage = 'Please check your email and password';
        }
      }
      
      setError(errorMessage);
    }
  };

  return (
    <div className="patient-container">
      <div className="form-box">
        <div className="form-header">
          <img src="https://img.icons8.com/color/96/000000/hospital-3.png" alt="Patient" />
          <h2>Patient Login</h2>
          <p>Welcome back! Please login to your account.</p>
        </div>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-button">
            <span>Login</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        <div className="form-footer">
          <p>Don't have an account? <a href="/patient/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
}
