import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddDoctor from './AddDoctor';
import ViewDoctors from './ViewDoctors';
import ViewPatient from './ViewPatient';
import ViewRecords from './ViewRecords';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminNavBar() {
  const { setIsAdminLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.clear();
    navigate('/'); // Navigate to root/main page
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/admin/adminhome">Home</Link></li>
          <li><Link to="/admin/adddoctor">Add Doctor</Link></li>
          <li><Link to="/admin/viewdoctors">View Doctors</Link></li>
          <li><Link to="/admin/viewpatients">View Patients</Link></li>
          <li><Link to="/admin/viewrecords">View Health Records</Link></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="adminhome" element={<AdminHome />} />
        <Route path="adddoctor" element={<AddDoctor />} />
        <Route path="viewdoctors" element={<ViewDoctors />} />
        <Route path="viewpatients" element={<ViewPatient />} />
        <Route path="viewrecords" element={<ViewRecords />} />
        <Route path="login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}