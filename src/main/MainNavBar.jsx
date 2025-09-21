import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import PatientLogin from '../patient/PatientLogin';
import PatientRegistration from '../patient/PatientRegistration';
import Contact from './Contact';
import AdminLogin from '../admin/AdminLogin';
import DoctorLogin from '../doctor/DoctorLogin';
import NotFound from './NotFound';

// Logo URL using a free medical logo from icons8
const logoUrl = "https://img.icons8.com/color/48/000000/caduceus.png";

export default function MainNavBar() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logoUrl} alt="Health Record Logo" />
          <span>HealthRecord</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
          <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
          <li><Link to="/patientregistration"><i className="fas fa-user-plus"></i> Register</Link></li>
          <li className="dropdown">
            <span><i className="fas fa-sign-in-alt"></i> Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/patientlogin"><i className="fas fa-user"></i> Patient</Link></li>
              <li><Link to="/doctorlogin"><i className="fas fa-user-md"></i> Doctor</Link></li>
              <li><Link to="/adminlogin"><i className="fas fa-user-shield"></i> Admin</Link></li>
            </ul>
          </li>
          <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link></li>
        </ul>
      </nav>

      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/patientregistration" element={<PatientRegistration />} exact />
          <Route path="/patientlogin" element={<PatientLogin />} exact />
          <Route path="/adminlogin" element={<AdminLogin />} exact />
          <Route path="/doctorlogin" element={<DoctorLogin />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="*" element={<NotFound />} exact />
        </Routes>
      </div>
    </div>
  );
}