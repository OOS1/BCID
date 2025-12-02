import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        {/* Background Effects */}
        <div className="hero-background">
          <div className="hero-grid"></div>
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="container hero-container">
          {/* Left Side - Content */}
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-title">
              Shape the Future with
              <span className="title-gradient"> Information Technology</span>
            </h1>
            <p className="hero-description">
              Broward College's IT & Engineering Department prepares you for the 
              workforce or further studies, helping you succeed in today's tech-driven 
              world. From software development to data analytics & AI, get the skills 
              employers want.
            </p>
            <div className="hero-actions">
              <Link to="/programs" className="btn btn-primary btn-lg">
                Explore Programs
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Request Info
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Job Placement Rate</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">2,500+</span>
                <span className="stat-label">Active Students</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Industry Partners</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Degree Programs</span>
              </div>
            </div>
          </div>

          {/* Right Side - Code Window */}
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">future_career.js</span>
              </div>
              <div className="code-content">
                <pre><code>{`const student = {
  passion: "technology",
  goals: ["innovate", "create", "lead"],
  school: "Broward College IT"
};

async function buildFuture() {
  const skills = await learn(student);
  const career = await apply(skills);
  
  return success(career);
}

buildFuture();`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll">
          <span>Scroll to Explore</span>
          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section section" aria-labelledby="programs-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="programs-heading">Featured Programs</h2>
            <p>Discover our industry-aligned programs designed to launch your tech career</p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3>Software Development</h3>
              <p>Master programming languages, web development, and software engineering principles.</p>
              <Link to="/programs" className="program-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <h3>Network Systems</h3>
              <p>Build expertise in network administration, cybersecurity, and cloud architecture.</p>
              <Link to="/programs" className="program-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3>Data Analytics & AI</h3>
              <p>Learn to extract insights from data and build intelligent systems with AI.</p>
              <Link to="/programs" className="program-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3>Applied Artificial Intelligence</h3>
              <p>Develop AI solutions with machine learning, neural networks, and data science.</p>
              <Link to="/programs" className="program-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="programs-cta">
            <Link to="/programs" className="btn btn-outline btn-lg">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section section" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <h2 id="why-heading">Why Choose Broward College IT?</h2>
              <p className="why-intro">
                Our programs are designed with industry input to ensure you graduate 
                with the skills employers are actively seeking.
              </p>
              <ul className="why-list">
                <li>
                  <div className="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Industry-Relevant Curriculum</h4>
                    <p>Programs developed with input from tech industry leaders and updated regularly.</p>
                  </div>
                </li>
                <li>
                  <div className="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Expert Faculty</h4>
                    <p>Learn from instructors with real-world experience in tech and IT industries.</p>
                  </div>
                </li>
                <li>
                  <div className="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                  </div>
                  <div>
                    <h4>State-of-the-Art Labs</h4>
                    <p>Access modern computer labs with the latest software and equipment.</p>
                  </div>
                </li>
                <li>
                  <div className="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <path d="M22 4L12 14.01l-3-3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>FREE Certifications</h4>
                    <p>Earn industry certifications at no cost through the Open Door Scholarship.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="stats-card">
              <div className="stats-card-header">
                <span>By The Numbers</span>
              </div>
              <div className="stats-card-content">
                <div className="stats-card-item">
                  <span className="stats-card-number">95%</span>
                  <span className="stats-card-label">Job Placement</span>
                </div>
                <div className="stats-card-item">
                  <span className="stats-card-number">10K+</span>
                  <span className="stats-card-label">Graduates</span>
                </div>
                <div className="stats-card-item">
                  <span className="stats-card-number">50+</span>
                  <span className="stats-card-label">Industry Partners</span>
                </div>
                <div className="stats-card-item">
                  <span className="stats-card-number">8</span>
                  <span className="stats-card-label">Degree Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="testimonials-heading">Student Success Stories</h2>
            <p>Hear from students who launched their tech careers with us</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "The Software Development program gave me the skills I needed to land 
                my dream job. The instructors are amazing and really prepare you for 
                the real world."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MS</div>
                <div className="author-info">
                  <span className="author-name">Maria Santos</span>
                  <span className="author-role">Software Developer at Tech Corp</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "Getting my Network+ and Security+ certifications for FREE through 
                Broward College was a game changer. I'm now working in cybersecurity!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JW</div>
                <div className="author-info">
                  <span className="author-name">James Wilson</span>
                  <span className="author-role">Security Analyst at SecureNet</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "The Data Analytics program opened doors I never thought possible. 
                The hands-on projects and supportive faculty made all the difference."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AJ</div>
                <div className="author-info">
                  <span className="author-name">Aisha Johnson</span>
                  <span className="author-role">Data Analyst at DataDriven Inc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta-background">
          <div className="cta-glow"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 id="cta-heading">Ready to Start Your Tech Journey?</h2>
            <p>
              Join thousands of successful graduates who launched their careers 
              with Broward College's IT & Engineering programs.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;