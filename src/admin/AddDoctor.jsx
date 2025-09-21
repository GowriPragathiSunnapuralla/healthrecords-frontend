import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css';

export default function AddDoctor() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    specialization: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/admin/adddoctor`, formData);
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
          specialization: ''
        });
      }
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data : "An unexpected error occurred.");
    }
  };

  return (
    <div className="add-doctor-container">
      <div className="form-box">
        <div className="form-header">
          <img src="https://img.icons8.com/color/96/000000/doctor-male--v1.png" alt="Doctor" />
          <h2>Add New Doctor</h2>
          <p>Enter the doctor's information below</p>
        </div>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="doctor-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user-md"></i>
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Enter doctor's full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">
                <i className="fas fa-venus-mars"></i>
                Gender
              </label>
              <select 
                id="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dob">
                <i className="fas fa-calendar"></i>
                Date of Birth
              </label>
              <input 
                type="date" 
                id="dob" 
                value={formData.dob} 
                onChange={handleChange} 
                required 
              />
            </div>

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
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div className="form-row">
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
                placeholder="Choose a username"
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
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobileno">
                <i className="fas fa-phone"></i>
                Mobile Number
              </label>
              <input 
                type="tel" 
                id="mobileno" 
                value={formData.mobileno} 
                onChange={handleChange} 
                required 
                placeholder="Enter mobile number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialization">
                <i className="fas fa-stethoscope"></i>
                Specialization
              </label>
              <input 
                type="text" 
                id="specialization" 
                value={formData.specialization} 
                onChange={handleChange} 
                required 
                placeholder="Enter specialization"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            <span>Add Doctor</span>
            <i className="fas fa-plus-circle"></i>
          </button>
        </form>
      </div>
    </div>
  );
}