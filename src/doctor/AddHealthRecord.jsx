import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddHealthRecord() {
  const [formData, setFormData] = useState({
    diagnosis: '',
    treatment: '',
    date: '',
    patientId: ''
  });
  const [doctor, setDoctor] = useState(null);
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedDoctor = sessionStorage.getItem('doctor');
    if (storedDoctor) {
      setDoctor(JSON.parse(storedDoctor));
      fetchPatients(JSON.parse(storedDoctor).id);
    }
  }, []);

  const fetchPatients = async (doctorId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${config.url}/doctor/viewpatientsbydoctor/${doctorId}`);
      setPatients(response.data);
    } catch (err) {
      setError('Failed to fetch patients');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const recordData = {
      diagnosis: formData.diagnosis,
      treatment: formData.treatment,
      date: formData.date,
      patient: { id: formData.patientId },
      doctor: { id: doctor.id }
    };
    try {
      const response = await axios.post(`${config.url}/doctor/addhealthrecord`, recordData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          diagnosis: '',
          treatment: '',
          date: '',
          patientId: ''
        });
      }
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Add Health Record</h2>
      
      {message && <div className="message success-message">{message}</div>}
      {error && <div className="message error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis</label>
          <input
            type="text"
            id="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            required
            placeholder="Enter diagnosis"
          />
        </div>

        <div className="form-group">
          <label htmlFor="treatment">Treatment</label>
          <textarea
            id="treatment"
            value={formData.treatment}
            onChange={handleChange}
            required
            placeholder="Enter treatment details"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientId">Patient</label>
          <select
            id="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
          >
            <option value="">Select Patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name} (ID: {patient.id})
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="button">
          Add Record
        </button>
      </form>
    </div>
  );
}
