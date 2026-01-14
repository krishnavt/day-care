import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🌲</span>
            <span className="logo-text">Ten Trails Early Learning</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Enroll Now</a>
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
            <span className="hero-badge">Welcome to Our Learning Family</span>
            <h1>Where Little Explorers <span className="highlight">Discover</span> Big Adventures</h1>
            <p>At Ten Trails Early Learning, we nurture curious minds through nature-inspired education, creative play, and a warm, loving environment where every child can thrive.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Schedule a Tour</a>
              <a href="#programs" className="btn btn-secondary">Our Programs</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Happy Families</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                <span className="emoji-large">👧🏽👦🏻👶🏾</span>
                <p>Learning Through Play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-card">
                <span className="emoji-xl">🌳🦋🌻</span>
              </div>
            </div>
            <div className="about-text">
              <span className="section-badge">About Us</span>
              <h2>Nurturing Growth, One Trail at a Time</h2>
              <p>Ten Trails Early Learning is more than just a daycare – we're a community dedicated to giving children the best start in life. Our nature-inspired approach combines outdoor exploration with structured learning to develop well-rounded, confident children.</p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-icon">🌱</span>
                  <div>
                    <h4>Nature-Based Learning</h4>
                    <p>Outdoor activities and nature exploration integrated into daily curriculum</p>
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">❤️</span>
                  <div>
                    <h4>Caring Environment</h4>
                    <p>Small class sizes with dedicated, nurturing teachers</p>
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">📚</span>
                  <div>
                    <h4>School Readiness</h4>
                    <p>Age-appropriate curriculum preparing children for academic success</p>
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
            <h2>Programs for Every Stage of Growth</h2>
            <p>From infants to preschoolers, we offer age-appropriate programs designed to nurture development at every milestone.</p>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">👶</div>
              <h3>Infant Care</h3>
              <p className="program-age">6 weeks - 12 months</p>
              <p>A safe, nurturing environment focused on bonding, sensory exploration, and establishing healthy routines for your little one.</p>
              <ul className="program-features">
                <li>Individual care plans</li>
                <li>Tummy time & sensory play</li>
                <li>Daily parent updates</li>
              </ul>
            </div>
            <div className="program-card featured">
              <div className="program-badge">Most Popular</div>
              <div className="program-icon">🧒</div>
              <h3>Toddler Program</h3>
              <p className="program-age">1 - 2 years</p>
              <p>Active learning through play, music, and movement as toddlers discover their independence and social skills.</p>
              <ul className="program-features">
                <li>Language development</li>
                <li>Creative arts & music</li>
                <li>Outdoor exploration</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-icon">👧</div>
              <h3>Preschool</h3>
              <p className="program-age">3 - 5 years</p>
              <p>Preparing children for kindergarten with literacy, math foundations, science exploration, and social-emotional development.</p>
              <ul className="program-features">
                <li>Early literacy & math</li>
                <li>STEM activities</li>
                <li>Kindergarten readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Ten Trails</span>
            <h2>Why Families Choose Us</h2>
            <p>We go above and beyond to ensure your child receives the highest quality care and education.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-card-icon">👩‍🏫</span>
              <h3>Qualified Teachers</h3>
              <p>Our educators are certified professionals with years of early childhood experience and ongoing training.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🏡</span>
              <h3>Safe & Clean Facility</h3>
              <p>State-licensed facility with enhanced safety protocols, secure entry, and rigorous cleaning standards.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🥗</span>
              <h3>Nutritious Meals</h3>
              <p>Healthy, balanced meals and snacks prepared fresh daily with accommodations for dietary needs.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">📱</span>
              <h3>Parent Communication</h3>
              <p>Real-time updates, photos, and daily reports through our parent app keep you connected.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🎨</span>
              <h3>Creative Curriculum</h3>
              <p>Play-based learning that sparks imagination through art, music, storytelling, and hands-on activities.</p>
            </div>
            <div className="feature-card">
              <span className="feature-card-icon">🌲</span>
              <h3>Outdoor Learning</h3>
              <p>Beautiful outdoor spaces designed for nature exploration, physical activity, and discovery.</p>
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
              <p>"Ten Trails has been a blessing for our family. The teachers truly care about each child's development, and our daughter has flourished here!"</p>
              <div className="testimonial-author">
                <span className="author-avatar">👩🏻</span>
                <div>
                  <strong>Sarah M.</strong>
                  <span>Parent of 3-year-old</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"The nature-based approach is exactly what we were looking for. Our son comes home excited about what he learned every single day."</p>
              <div className="testimonial-author">
                <span className="author-avatar">👨🏽</span>
                <div>
                  <strong>Michael T.</strong>
                  <span>Parent of 4-year-old</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"From infant care to preschool, Ten Trails has been our home away from home. The staff feels like family!"</p>
              <div className="testimonial-author">
                <span className="author-avatar">👩🏾</span>
                <div>
                  <strong>Jessica L.</strong>
                  <span>Parent of 2 children</span>
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
              <p>We'd love to welcome your family to Ten Trails Early Learning. Schedule a tour to see our facility and meet our amazing teachers!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Ten Trails Community<br />Black Diamond, WA</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>hello@tentrailsearlylearning.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <strong>Hours</strong>
                    <p>Monday - Friday<br />6:30 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://instagram.com/tentrailsearlylearning" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>📸</span> Follow us on Instagram
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
                    <option value="infant">Infant (6 weeks - 12 months)</option>
                    <option value="toddler">Toddler (1 - 2 years)</option>
                    <option value="preschool">Preschool (3 - 5 years)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea id="message" name="message" placeholder="Tell us about your family..." rows="3"></textarea>
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
              <p>Nurturing curious minds through nature-inspired education and loving care.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Programs</h4>
              <ul>
                <li><a href="#programs">Infant Care</a></li>
                <li><a href="#programs">Toddler Program</a></li>
                <li><a href="#programs">Preschool</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://instagram.com/tentrailsearlylearning" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://facebook.com/tentrailsearlylearning" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Ten Trails Early Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
