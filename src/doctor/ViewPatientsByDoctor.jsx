import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewPatientsByDoctor() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');
  const [doctorId, setDoctorId] = useState(null);

  useEffect(() => {
    const storedDoctor = sessionStorage.getItem('doctor');
    if (storedDoctor) {
      const doctor = JSON.parse(storedDoctor);
      setDoctorId(doctor.id);
      fetchPatients(doctor.id);
    }
  }, []);

  const fetchPatients = async (doctorId) => {
    try {
      const response = await axios.get(`${config.url}/doctor/viewpatientsbydoctor/${doctorId}`);
      setPatients(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch patients');
      setPatients([]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>My Patients</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {patients.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No patients assigned to you.</p>
      ) : (
        <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Username</th>
              <th>Mobile No</th>
              <th>Location</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.gender}</td>
                <td>{patient.dob}</td>
                <td>{patient.email}</td>
                <td>{patient.username}</td>
                <td>{patient.mobileno}</td>
                <td>{patient.location}</td>
                <td>{patient.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
