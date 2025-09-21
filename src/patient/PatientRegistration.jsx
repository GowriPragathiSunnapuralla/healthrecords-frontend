import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './patient.css';

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: '',
    age: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post(`${config.url}/patient/register`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: '',
          age: ''
        });
      }
    } catch (error) {
      setMessage('');
      if (error.response && error.response.data) {
        setError(typeof error.response.data === 'string' ? error.response.data : error.response.data.message || "An error occurred");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="patient-container">
      <div className="form-box">
        <div className="form-header">
          <img src="https://img.icons8.com/color/96/000000/hospital-3.png" alt="Patient" />
          <h2>Patient Registration</h2>
          <p>Create your account to get started</p>
        </div>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
              Full Name
            </label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="gender">
              <i className="fas fa-venus-mars"></i>
              Gender
            </label>
            <select id="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dob">
              <i className="fas fa-calendar"></i>
              Date of Birth
            </label>
            <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              Email
            </label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user-circle"></i>
              Username
            </label>
            <input type="text" id="username" value={formData.username} onChange={handleChange} required placeholder="Choose a username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
              Password
            </label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required placeholder="Choose a password" />
          </div>

          <div className="form-group">
            <label htmlFor="mobileno">
              <i className="fas fa-phone"></i>
              Mobile Number
            </label>
            <input type="tel" id="mobileno" value={formData.mobileno} onChange={handleChange} required placeholder="Enter your mobile number" />
          </div>

          <div className="form-group">
            <label htmlFor="location">
              <i className="fas fa-map-marker-alt"></i>
              Location
            </label>
            <input type="text" id="location" value={formData.location} onChange={handleChange} required placeholder="Enter your location" />
          </div>

          <div className="form-group">
            <label htmlFor="age">
              <i className="fas fa-birthday-cake"></i>
              Age
            </label>
            <input type="number" id="age" value={formData.age} onChange={handleChange} required placeholder="Enter your age" />
          </div>

          <button type="submit" className="submit-button">
            <span>Register</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        <div className="form-footer">
          <p>Already have an account? <a href="/patient/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
}
