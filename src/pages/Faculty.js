import React from 'react';
import { Link } from 'react-router-dom';
import './Faculty.css';

const Faculty = () => {
  const faculty = [
    {
      name: 'Cheryl-Ann Henry',
      title: 'Program Manager - AS Programs',
      specialization: 'Computer Information Technology, Software Development, Network Systems Technology',
      bio: 'Cheryl-Ann Henry serves as the Program Manager for Associate in Science programs at the IT & Engineering Department. She advises students pursuing degrees in Computer Information Technology, Software Development, Network Systems Technology, and related AS programs.',
      office: 'Central Campus, Building 13',
      initials: 'CH'
    },
    {
      name: 'Nadine Blackwood',
      title: 'Program Manager - BAS in IT',
      specialization: 'Information Technology, IT Leadership',
      bio: "Nadine Blackwood manages the Bachelor of Applied Science in Information Technology program. She guides students through their journey from associate degree to bachelor's completion, helping them become successful IT professionals and leaders.",
      office: 'North Campus, Building 48',
      initials: 'NB'
    },
    {
      name: 'Prof. Archila',
      title: 'Program Manager - Data Analytics & AI BAS',
      specialization: 'Data Analytics, Artificial Intelligence, Machine Learning',
      bio: 'Prof. Archila leads the Data Analytics & AI Bachelor of Applied Science program, guiding students in developing skills to extract valuable insights from data and leverage machine learning techniques for informed decision-making.',
      office: 'Central Campus, Building 13',
      initials: 'FA'
    }
  ];

  const staff = [
    {
      name: 'Academic Advisors',
      title: 'Student Advising',
      description: 'Our academic advisors help students plan their course schedules, understand degree requirements, and stay on track for graduation.',
      contact: 'Schedule via BC Navigate',
      initials: 'AA'
    },
    {
      name: 'Computer Lab Staff',
      title: 'Lab Support & Tutoring',
      description: 'The Computer Labs are open for students to do homework and get computer science-related tutoring. Our tutors are ready to help.',
      contact: 'Central Campus, Building 13',
      initials: 'CL'
    },
    {
      name: 'Career Services',
      title: 'Career Development',
      description: 'Career Services assists students with resume writing, interview preparation, job placement, and connecting with industry partners.',
      contact: 'Contact for more info',
      initials: 'CS'
    }
  ];

  return (
    <div className="faculty">
      {/* Hero Section */}
      <section className="faculty-hero" aria-labelledby="faculty-heading">
        <div className="faculty-hero-bg">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="faculty-hero-content">
            <h1 id="faculty-heading" className="animate-fade-in-up">Our Faculty & Staff</h1>
            <p className="animate-fade-in-up delay-1">
              Meet the dedicated professionals who are committed to your success. 
              Our faculty bring real-world experience and academic excellence to every classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-section section" aria-labelledby="faculty-grid-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="faculty-grid-heading">Program Managers</h2>
            <p>Your guides to success in IT & Engineering</p>
          </div>

          <div className="faculty-grid">
            {faculty.map((member, index) => (
              <article key={index} className="faculty-card">
                <div className="faculty-card-header">
                  <div className="faculty-avatar">
                    {member.initials}
                  </div>
                  <div className="faculty-badge">Program Manager</div>
                </div>
                
                <div className="faculty-card-body">
                  <h3>{member.name}</h3>
                  <span className="faculty-title">{member.title}</span>
                  
                  <div className="faculty-specialization">
                    <strong>Specialization:</strong> {member.specialization}
                  </div>
                  
                  <p className="faculty-bio">{member.bio}</p>
                  
                  <div className="faculty-details">
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{member.office}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="staff-section section" aria-labelledby="staff-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="staff-heading">Support Services</h2>
            <p>Resources to help you succeed throughout your journey</p>
          </div>

          <div className="staff-grid">
            {staff.map((member, index) => (
              <article key={index} className="staff-card">
                <div className="staff-avatar">
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <span className="staff-title">{member.title}</span>
                <p>{member.description}</p>
                <div className="staff-contact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{member.contact}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="hours-section section" aria-labelledby="hours-heading">
        <div className="container">
          <div className="hours-content">
            <div className="hours-info">
              <h2 id="hours-heading">Advising & Office Hours</h2>
              <p>
                Students are encouraged to meet with their academic advisor before 
                registering for classes! Academic advising is offered face to face and remotely.
              </p>
              
              <div className="hours-grid">
                <div className="hours-card">
                  <h3>How to Schedule</h3>
                  <ul>
                    <li>Log in to BC Navigate</li>
                    <li>Select your assigned advisor</li>
                    <li>Choose face-to-face or remote</li>
                    <li>Pick an available time slot</li>
                  </ul>
                </div>
                <div className="hours-card">
                  <h3>When Emailing</h3>
                  <ul>
                    <li>Include your full name</li>
                    <li>Include your student ID</li>
                    <li>Include your program of study</li>
                    <li>Be specific about your question</li>
                  </ul>
                </div>
              </div>

              <div className="hours-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                <p>
                  <strong>Pro Tip:</strong> Schedule advising appointments early in the semester 
                  to ensure you get your preferred time slots and stay on track with your degree plan.
                </p>
              </div>
            </div>

            <div className="hours-visual">
              <div className="location-card">
                <h3>Campus Locations</h3>
                <div className="location-item">
                  <span className="location-name">Central Campus</span>
                  <span className="location-detail">Building 13 - AS Programs</span>
                </div>
                <div className="location-item">
                  <span className="location-name">North Campus</span>
                  <span className="location-detail">Building 48 - BAS Programs</span>
                </div>
                <div className="location-item">
                  <span className="location-name">Online</span>
                  <span className="location-detail">Remote advising available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="join-section" aria-labelledby="join-heading">
        <div className="container">
          <div className="join-content">
            <h2 id="join-heading">Have Questions?</h2>
            <p>
              Reach out to our team for more information about our programs, 
              advising, or any other questions you may have.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;