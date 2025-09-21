import { Routes, Route, Link } from 'react-router-dom';
import './patient.css';
import PatientHome from './PatientHome';
import PatientProfile from './PatientProfile';
import PatientLogin from './PatientLogin';
import PatientRegistration from './PatientRegistration';
import UpdateProfile from './UpdateProfile';
import ViewMyRecords from './ViewMyRecords';
import { useAuth } from '../contextapi/AuthContext';

export default function PatientNavBar() {
  const { setIsPatientLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsPatientLoggedIn(false);
    sessionStorage.clear();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Patient</div>
        <ul className="nav-links">
          <li><Link to="/patienthome">Home</Link></li>
          <li><Link to="/patientprofile">Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/viewmyrecords">My Health Records</Link></li>
          <li><Link to="/patientlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/patienthome" element={<PatientHome />} exact />
        <Route path="/patientprofile" element={<PatientProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile />} exact />
        <Route path="/viewmyrecords" element={<ViewMyRecords />} exact />
        <Route path="/patientlogin" element={<PatientLogin />} exact />
      </Routes>
    </div>
  );
}
