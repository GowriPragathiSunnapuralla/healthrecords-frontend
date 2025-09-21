import './Home.css';
import './style.css'; // Make sure to import both style sheets
// Using Font Awesome icons via CDN
const heroImg = "https://img.icons8.com/fluency/240/health-book.png";
const logoImg = "https://img.icons8.com/color/48/000000/caduceus.png";

export default function Home() {
  return (
    <div className="home-page">
      <div className="content-wrapper">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Health Record Management System</h1>
            <p>
              Empowering <span className="highlight">Admins</span>, <span className="highlight">Doctors</span>, and <span className="highlight">Patients</span> to manage health records securely and efficiently.
            </p>
            <a href="#features" className="cta-btn">Explore Features</a>
          </div>
          <img src={heroImg} alt="Health Records Hero" className="hero-img" />
        </header>

        <section className="features-section" id="features">
          <h2>Why Choose Us?</h2>
          <div className="features-cards">
            <div className="feature-card">
              <img src="https://img.icons8.com/ios-filled/100/4a90e2/doctor-male.png" alt="Doctor" />
              <h3>Doctor Portal</h3>
              <p>Doctors can add, view, and manage patient health records with ease and security.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios-filled/100/f7971e/patient-oxygen-mask.png" alt="Patient" />
              <h3>Patient Dashboard</h3>
              <p>Patients can register, view their health records, and update their profiles anytime.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios-filled/100/ff512f/admin-settings-male.png" alt="Admin" />
              <h3>Admin Control</h3>
              <p>Admins manage doctors, patients, and oversee all health records for compliance and safety.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios-filled/100/43cea2/security-checked.png" alt="Security" />
              <h3>Data Security</h3>
              <p>All records are encrypted and privacy is our top priority. Your data is safe with us.</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h2>Seamless Experience</h2>
            <p>
              Our platform is designed for simplicity and speed. Whether you are a doctor, patient, or admin, you'll find everything you need at your fingertips.
            </p>
          </div>
          <div className="info-card">
            <h2>24/7 Support</h2>
            <p>
              Need help? Our support team is available round the clock to assist you with any queries or issues.
            </p>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <a href="/" className="footer-logo">
              <img src={logoImg} alt="HealthRecord Logo" />
              <span>HealthRecord</span>
            </a>
            <p>Transforming healthcare management through innovative digital solutions.</p>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/patientregistration">Register</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: support@healthrecord.com</p>
            <p>Phone: +91-12345-67890</p>
            <p>Address: 123 Healthcare Avenue, Medical District, India</p>
          </div>
          
          <div className="footer-column">
            <h4>Follow Us</h4>
            <p>Stay connected with us on social media</p>
            <div className="social-icons">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Health Record Management System. All rights reserved.
        </div>
      </footer>
    </div>
  );
}