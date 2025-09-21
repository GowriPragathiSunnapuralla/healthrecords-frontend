import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewRecordsByDoctor() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');
  const [doctorId, setDoctorId] = useState(null);

  useEffect(() => {
    const storedDoctor = sessionStorage.getItem('doctor');
    if (storedDoctor) {
      const doctor = JSON.parse(storedDoctor);
      setDoctorId(doctor.id);
      fetchRecords(doctor.id);
    }
  }, []);

  const fetchRecords = async (doctorId) => {
    try {
      const response = await axios.get(`${config.url}/doctor/viewrecordsbydoctor/${doctorId}`);
      setRecords(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch health records');
      setRecords([]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>My Health Records</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {records.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No health records found.</p>
      ) : (
        <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>Record ID</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Patient Name</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.diagnosis}</td>
                <td>{record.treatment}</td>
                <td>{record.date}</td>
                <td>{record.patient?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
