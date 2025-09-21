import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './doctor.css';
import DoctorHome from './DoctorHome';
import DoctorProfile from './DoctorProfile';
import DoctorLogin from './DoctorLogin';
import AddHealthRecord from './AddHealthRecord';
import ViewPatientsByDoctor from './ViewPatientsByDoctor';
import ViewRecordsByDoctor from './ViewRecordsByDoctor';
import { useAuth } from '../contextapi/AuthContext';

export default function DoctorNavBar() {
  const { setIsDoctorLoggedIn } = useAuth();
  const navigate = useNavigate();
  const doctorName = sessionStorage.getItem('doctorName');

  const handleLogout = () => {
    setIsDoctorLoggedIn(false);
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="doctor-layout">
      <nav className="doctor-navbar">
        <div className="logo">Welcome Dr. {doctorName}</div>
        <ul className="doctor-nav-links">
          <li><Link to="/doctor/doctorhome">Home</Link></li>
          <li><Link to="/doctor/profile">Profile</Link></li>
          <li><Link to="/doctor/viewpatients">View Patients</Link></li>
          <li><Link to="/doctor/viewrecords">View Records</Link></li>
          <li><Link to="/doctor/addrecord">Add Health Record</Link></li>
          <li><button onClick={handleLogout} className="doctor-logout-button">Logout</button></li>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="doctorhome" element={<DoctorHome />} />
          <Route path="profile" element={<DoctorProfile />} />
          <Route path="viewpatients" element={<ViewPatientsByDoctor />} />
          <Route path="viewrecords" element={<ViewRecordsByDoctor />} />
          <Route path="addrecord" element={<AddHealthRecord />} />
          <Route path="doctorlogin" element={<DoctorLogin />} />
        </Routes>
      </main>
    </div>
  );
}
