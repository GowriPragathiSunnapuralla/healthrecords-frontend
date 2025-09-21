import { useState, useEffect } from 'react';

export default function PatientHome() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const storedPatient = sessionStorage.getItem('patient');
    if (storedPatient) {
      setPatient(JSON.parse(storedPatient));
    }
  }, []);

  return (
    <div>
      <h3>Hello {patient ? patient.name : "Patient"}</h3>
    </div>
  );
}
