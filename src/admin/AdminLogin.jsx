import { useState } from 'react';
import './adminlogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      // Send POST request with login data in the body
      const response = await axios.post(`${config.url}/admin/checkadminlogin`, formData);

      if (response.status === 200) {
        setIsAdminLoggedIn(true);
        sessionStorage.setItem('admin', JSON.stringify(response.data));
        navigate("/admin/adminhome");
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(typeof error.response.data === 'string' ? error.response.data : error.response.data.message || "An error occurred");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <div className="login-header">
          <img src="https://img.icons8.com/fluency/96/admin-settings-male.png" alt="Admin" className="admin-icon" />
          <h2>Admin Login</h2>
          <p>Welcome back! Please login to your account.</p>
        </div>

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

          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            <span>Login</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        <div className="login-footer">
          <p>Forgot your password? <a href="#">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}
