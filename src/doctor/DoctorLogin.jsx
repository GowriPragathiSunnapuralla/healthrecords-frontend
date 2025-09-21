import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';
import './doctor.css';

export default function DoctorLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsDoctorLoggedIn } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/doctor/login`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data) {
        setIsDoctorLoggedIn(true);
        sessionStorage.setItem('doctor', JSON.stringify(response.data));
        navigate('/doctor/doctorhome');
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Invalid username or password');
      } else if (err.response?.status === 500) {
        setError('Server error. Please try again later.');
      } else if (!err.response) {
        setError('Network error. Please check your connection.');
      } else {
        setError(err.response?.data || 'Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="doctor-login-container">
      <div className="login-box">
        <div className="login-header">
          <img 
            src="https://img.icons8.com/color/96/000000/doctor-male--v1.png" 
            alt="Doctor Icon" 
            className="doctor-icon"
          />
          <h2>Doctor Login</h2>
          <p>Please enter your credentials to continue</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
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

          <button type="submit" className="login-button">
            <span>Login</span>
            <i className="fas fa-sign-in-alt"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
