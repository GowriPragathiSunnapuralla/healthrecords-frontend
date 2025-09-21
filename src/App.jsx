import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contextapi/AuthContext';
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import DoctorNavBar from './doctor/DoctorNavBar';
import PatientNavBar from './patient/PatientNavBar';
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main navigation bar for landing and public pages */}
          <Route path="/*" element={<MainNavBar />} />
          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminNavBar />} />
          {/* Doctor routes */}
          <Route path="/doctor/*" element={<DoctorNavBar />} />
          {/* Patient routes */}
          <Route path="/patient/*" element={<PatientNavBar />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
