import { useState, useEffect } from 'react';

export default function DoctorProfile() {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const storedDoctor = sessionStorage.getItem('doctor');
    if (storedDoctor) {
      setDoctor(JSON.parse(storedDoctor));
    }
  }, []);

  if (!doctor) {
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
        Doctor Profile
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
        <p><strong>Name:</strong> {doctor.name}</p>
        <p><strong>Gender:</strong> {doctor.gender}</p>
        <p><strong>Date of Birth:</strong> {doctor.dob}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Username:</strong> {doctor.username}</p>
        <p><strong>Mobile No:</strong> {doctor.mobileno}</p>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
      </div>
    </div>
  );
}
