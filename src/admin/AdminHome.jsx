import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [recordCount, setRecordCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const patientRes = await axios.get(`${config.url}/admin/patientcount`);
        const doctorRes = await axios.get(`${config.url}/admin/doctorcount`);
        const recordRes = await axios.get(`${config.url}/admin/recordcount`);

        setPatientCount(patientRes.data);
        setDoctorCount(doctorRes.data);
        setRecordCount(recordRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Patients</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#007bff' }}>{patientCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Doctors</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>{doctorCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Health Records</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5722' }}>{recordCount}</p>
        </div>
      </div>
    </div>
  );
}
