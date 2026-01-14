import { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🌲</span>
            <span className="logo-text">Ten Trails Early Learning</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="nav-cta desktop-nav">Enroll Now</a>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#programs" onClick={closeMobileMenu}>Programs</a></li>
            <li><a href="#why-us" onClick={closeMobileMenu}>Why Us</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMobileMenu}>Enroll Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">Licensed Home-Based Childcare in Black Diamond</span>
            <h1>Where Little Explorers <span className="highlight">Discover</span> Big Adventures</h1>
            <p>At Ten Trails Early Learning Childcare, we provide a safe, loving, family-centered environment where every child can thrive. Specializing in play-based learning and individualized support for children with unique needs.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Schedule a Tour</a>
              <a href="#programs" className="btn btn-secondary">Our Programs</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Healthcare Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Children Capacity</span>
              </div>
              <div className="stat">
                <span className="stat-number">0-6</span>
                <span className="stat-label">Years Old</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img
                src="/media/play-based-learning.png"
                alt="Children engaged in play-based learning activities"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-card owner-photo">
                <img src="/media/tentrails owner.jpeg" alt="Ms. Chatty - Owner of Ten Trails Early Learning Childcare" />
              </div>
            </div>
            <div className="about-text">
              <span className="section-badge">Meet Ms. Chatty</span>
              <h2>A Personal, Meaningful, Family-Centered Approach</h2>
              <p>Hi, I'm Ms. Chatty, owner of Ten Trails Early Learning Childcare. With over 10 years of experience in healthcare and nursing, I bring a unique perspective to early childhood care. During the pandemic, staying home with my son who was delayed in his social-emotional development taught me the importance of patience, consistency, and early support – completely changing the direction of my life.</p>
              <p>I've been a licensed early learning childcare provider since May 2023. Today, I work with children who have complex needs, developmental delays, and disabilities. I collaborate closely with the Birth to Five Center at JJ Smith Elementary and the Children's Therapy Center, bringing individualized developmental support directly into my home.</p>
              <p>My love for childcare runs deep – my mom was an early childhood teacher before becoming a stay-at-home mom to five of us. I grew up surrounded by her love for learning and nurturing care, and now I get to provide that same safe, loving environment for the children in my care.</p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-icon">🏥</span>
                  <div>
                    <h4>Healthcare Background</h4>
                    <p>10+ years of nursing experience with CPR & First Aid certification</p>
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">🤝</span>
                  <div>
                    <h4>Therapy Partnerships</h4>
                    <p>Collaborating with Birth to Five Center & Children's Therapy Center</p>
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">💜</span>
                  <div>
                    <h4>Special Needs Support</h4>
                    <p>Specialized care for children with developmental delays and disabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Programs</span>
            <h2>Daycare for Ages 0 to 6 Years</h2>
            <p>Play-based learning tailored to each child's unique developmental journey. Full-time, part-time, and drop-in options available year-round.</p>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">👶</div>
              <h3>Infant Care</h3>
              <p className="program-age">0 - 12 months</p>
              <p>A safe, nurturing environment focused on bonding, sensory exploration, and establishing healthy routines for your little one.</p>
              <ul className="program-features">
                <li>Individual care plans</li>
                <li>Sensory play activities</li>
                <li>Daily parent communication</li>
              </ul>
            </div>
            <div className="program-card featured">
              <div className="program-badge">Play-Based</div>
              <div className="program-icon">🧒</div>
              <h3>Toddler Program</h3>
              <p className="program-age">1 - 3 years</p>
              <p>Active learning through play, music, and movement as toddlers discover their independence and social-emotional skills.</p>
              <ul className="program-features">
                <li>Language development</li>
                <li>Creative arts & music</li>
                <li>Outdoor exploration</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-icon">👧</div>
              <h3>Preschool Prep</h3>
              <p className="program-age">3 - 6 years</p>
              <p>Preparing children for kindergarten with early literacy, social skills, and individualized developmental support.</p>
              <ul className="program-features">
                <li>School readiness skills</li>
                <li>Social-emotional growth</li>
                <li>Developmental support</li>
              </ul>
            </div>
          </div>
          <div className="schedule-options">
            <div className="schedule-badge">Full Time</div>
            <div className="schedule-badge">Part Time</div>
            <div className="schedule-badge">Drop In</div>
            <div className="schedule-badge">Summer Care</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Ten Trails</span>
            <h2>Why Families Choose Us</h2>
            <p>A licensed home-based childcare with the expertise to support every child's unique journey.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-card-icon">🏥</span>
              <h3>Healthcare Expertise</h3>
              <p>Owner with 10+ years nursing background. Staff can administer medication and are CPR & First Aid certified.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">💜</span>
              <h3>Special Needs Support</h3>
              <p>Specialized care for children with complex needs, developmental delays, and disabilities with therapy partnerships.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🏡</span>
              <h3>Licensed Home Setting</h3>
              <p>State-licensed child care home (License #PL-82900) with intimate, family-centered environment.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🥗</span>
              <h3>Meals Provided</h3>
              <p>Healthy, balanced meals and snacks prepared fresh daily with accommodations for dietary needs.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🎨</span>
              <h3>Play-Based Learning</h3>
              <p>Child-led exploration that sparks imagination through art, music, storytelling, and hands-on activities.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🌲</span>
              <h3>Outdoor Play Space</h3>
              <p>Beautiful outdoor areas designed for nature exploration, physical activity, and discovery.</p>
            </div>
          </div>
          <div className="languages-section">
            <h3>Languages Spoken</h3>
            <div className="language-badges">
              <span className="language-badge">English</span>
              <span className="language-badge">Tagalog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2>What Parents Are Saying</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Ms. Chatty has been a blessing for our family. Her nursing background gives us so much peace of mind, and our daughter has flourished in her care!"</p>
              <div className="testimonial-author">
                <span className="author-avatar">👩🏻</span>
                <div>
                  <strong>Happy Parent</strong>
                  <span>Parent of toddler</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"The individualized attention and therapy collaboration has made such a difference for our son. Ms. Chatty truly understands children with special needs."</p>
              <div className="testimonial-author">
                <span className="author-avatar">👨🏽</span>
                <div>
                  <strong>Grateful Parent</strong>
                  <span>Parent of preschooler</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"The small, home-based setting is exactly what we wanted. It feels like family, and our child comes home happy every single day."</p>
              <div className="testimonial-author">
                <span className="author-avatar">👩🏾</span>
                <div>
                  <strong>Loving Parent</strong>
                  <span>Parent of infant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-badge">Get In Touch</span>
              <h2>Start Your Child's Journey Today</h2>
              <p>We'd love to welcome your family to Ten Trails Early Learning Childcare. Schedule a tour to see our home and meet Ms. Chatty!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Black Diamond, WA<br /><em>Home-Based Childcare</em></p>
                    <a
                      href="https://www.google.com/maps/search/Ten+Trails+Black+Diamond+WA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <strong>Hours</strong>
                    <p>Monday - Friday<br />8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📋</span>
                  <div>
                    <strong>License</strong>
                    <p>WA State License<br />#PL-82900</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💰</span>
                  <div>
                    <strong>Financial Aid</strong>
                    <p>Subsidies & Vouchers<br />Accepted</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/tentrailsearlylearning/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>📸</span> Instagram
                </a>
                <a href="https://www.facebook.com/groups/4073646546239026" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>📘</span> Facebook
                </a>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <h3>Schedule a Tour</h3>
                <div className="form-group">
                  <label htmlFor="name">Parent/Guardian Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
                </div>
                <div className="form-group">
                  <label htmlFor="childAge">Child's Age</label>
                  <select id="childAge" name="childAge" required>
                    <option value="">Select age range</option>
                    <option value="infant">Infant (0 - 12 months)</option>
                    <option value="toddler">Toddler (1 - 3 years)</option>
                    <option value="preschool">Preschool (3 - 6 years)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="schedule">Preferred Schedule</label>
                  <select id="schedule" name="schedule" required>
                    <option value="">Select schedule type</option>
                    <option value="fulltime">Full Time</option>
                    <option value="parttime">Part Time</option>
                    <option value="dropin">Drop In</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea id="message" name="message" placeholder="Tell us about your child and family..." rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Request Tour</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-icon">🌲</span>
                <span className="logo-text">Ten Trails Early Learning</span>
              </a>
              <p>A licensed home-based childcare providing loving, family-centered care in Black Diamond, WA. Specializing in play-based learning and support for children with unique needs.</p>
              <p className="license-info">WA State License #PL-82900</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Ms. Chatty</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#programs">Infant Care (0-12 mo)</a></li>
                <li><a href="#programs">Toddler Program (1-3 yr)</a></li>
                <li><a href="#programs">Preschool Prep (3-6 yr)</a></li>
                <li><a href="#programs">Summer Care</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.instagram.com/tentrailsearlylearning/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com/groups/4073646546239026" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li>
                  <a href="https://www.google.com/maps/search/Ten+Trails+Black+Diamond+WA" target="_blank" rel="noopener noreferrer">
                    Find Us on Map
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Ten Trails Early Learning Childcare. All rights reserved. | Black Diamond, WA</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
