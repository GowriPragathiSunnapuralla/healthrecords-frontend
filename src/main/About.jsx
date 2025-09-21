import './style.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About HealthRecord</h1>
          <p>Transforming healthcare management through innovative digital solutions</p>
        </div>
      </section>
      
      <div className="about-container">
        <section className="about-section">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                At HealthRecord, our mission is to revolutionize healthcare management by providing a secure, 
                efficient, and user-friendly platform for patients, doctors, and administrators. We believe that 
                accessible and well-organized health information leads to better healthcare outcomes and improved 
                patient experiences.
              </p>
              <p>
                Founded in 2023, we've been dedicated to bridging the gap between healthcare providers and patients 
                through technology that simplifies record keeping while maintaining the highest standards of data 
                security and privacy.
              </p>
            </div>
            <div className="mission-image">
              <img 
                src="https://img.icons8.com/fluency/240/healthcare-and-medical.png" 
                alt="Healthcare Mission" 
              />
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img 
                  src="https://img.icons8.com/color/96/000000/security-checked.png" 
                  alt="Security Icon" 
                />
              </div>
              <h3>Enhanced Security</h3>
              <p>
                State-of-the-art encryption and security protocols to keep your medical data safe and private.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <img 
                  src="https://img.icons8.com/color/96/000000/easy.png" 
                  alt="Easy Access Icon" 
                />
              </div>
              <h3>Easy Access</h3>
              <p>
                Access your medical records anytime, anywhere through our intuitive web interface.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <img 
                  src="https://img.icons8.com/color/96/000000/doctor-male.png" 
                  alt="Doctor Management Icon" 
                />
              </div>
              <h3>Doctor Management</h3>
              <p>
                Doctors can efficiently manage patient records, diagnoses, and treatment plans in one place.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <img 
                  src="https://img.icons8.com/color/96/000000/conference-call.png" 
                  alt="Admin Controls Icon" 
                />
              </div>
              <h3>Admin Controls</h3>
              <p>
                Comprehensive administrative tools to manage users, monitor system usage, and ensure compliance.
              </p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Our Approach</h2>
          <div className="approach-content">
            <div className="approach-steps">
              <div className="approach-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>User-Centered Design</h3>
                  <p>
                    We build our platform with the end user in mind, ensuring that all features are intuitive 
                    and accessible regardless of technical proficiency.
                  </p>
                </div>
              </div>
              
              <div className="approach-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Privacy First</h3>
                  <p>
                    We adhere to the highest standards of data protection and compliance with healthcare 
                    regulations, ensuring your information is always secure.
                  </p>
                </div>
              </div>
              
              <div className="approach-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Continuous Improvement</h3>
                  <p>
                    We constantly gather feedback and improve our platform to meet the evolving needs of 
                    healthcare professionals and patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>support@healthrecord.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91-12345-67890</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Healthcare Avenue, Medical District, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
