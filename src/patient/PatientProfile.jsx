import { useState, useEffect } from 'react';

export default function PatientProfile() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const storedPatient = sessionStorage.getItem('patient');
    if (storedPatient) {
      setPatient(JSON.parse(storedPatient));
    }
  }, []);

  if (!patient) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Patient Profile
      </h2>
      <div
        style={{
          backgroundColor: 'light grey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Date of Birth:</strong> {patient.dob}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Username:</strong> {patient.username}</p>
        <p><strong>Mobile No:</strong> {patient.mobileno}</p>
        <p><strong>Location:</strong> {patient.location}</p>
        <p><strong>Age:</strong> {patient.age}</p>
      </div>
    </div>
  );
}
