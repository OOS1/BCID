import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: 'Virtual Support',
      description: 'Place yourself in a virtual line and a Student Services representative will contact you when it\'s your turn.',
      buttonText: 'Contact for Info',
      buttonPath: '/contact'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Visit a Campus Location',
      description: 'Visit us at our campus locations for on-site assistance with admissions, advising, and more.',
      buttonText: 'View Locations Below',
      buttonPath: '/contact'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <path d="M20 8v6M23 11h-6"/>
        </svg>
      ),
      title: 'View Directory',
      description: 'View full staff directory and faculty teaching schedules for the IT & Engineering Department.',
      buttonText: 'Faculty & Staff Directory',
      buttonPath: '/faculty'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
        </svg>
      ),
      title: 'Browse Student Help Center',
      description: 'The Student Help Center has self-help support articles on admissions, records, registration, and financial aid.',
      buttonText: 'Contact for Help',
      buttonPath: '/contact'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
      ),
      title: 'Technical Support',
      description: 'Contact our I.T. Support Team for BC One Access, D2L, myBC, Zoom, login, and other technical assistance.',
      buttonText: 'Get Technical Support',
      buttonPath: '/contact'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Program Managers',
      description: 'Contact our IT & Engineering program managers directly for advising and program-specific questions.',
      buttonText: 'View Contact List',
      buttonPath: '/faculty'
    }
  ];

  const programContacts = [
    { program: 'AS Programs (CIT, Software Dev, Network, etc.)', name: 'Cheryl-Ann Henry', email: 'chenry2@broward.edu', location: 'Central Campus, Bldg 13' },
    { program: 'BAS in Information Technology', name: 'Nadine Blackwood', email: 'nblackwo@broward.edu', location: 'North Campus, Bldg 48' },
    { program: 'Data Analytics & AI (BAS)', name: 'Prof. Archila', email: 'farchila@broward.edu', location: 'Central Campus, Bldg 13' }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-hero-content">
              <h1 id="contact-heading">Contact Us</h1>
              <p>
                Our goal is to prepare and provide professional, courteous, accurate, 
                and timely communication services at a superior level. We embrace a 
                shared community of respect to our internal and external clients. We 
                maintain an environment based on open communication, teamwork, and 
                assuring you of a positive experience.
              </p>
            </div>
            <div className="contact-hero-phone">
              <div className="phone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p>Live Representatives are available 24/7/365 to answer general questions.</p>
              <a href="tel:+19542014000" className="phone-number">954-201-4000</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section section" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading" className="visually-hidden">Contact Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.buttonPath} className="service-btn">
                  {service.buttonText}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program Contacts */}
      <section className="program-contacts-section section" aria-labelledby="program-contacts-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="program-contacts-heading">IT & Engineering Program Contacts</h2>
            <p>Reach out directly to our program managers for advising</p>
          </div>

          <div className="contacts-table-wrapper">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {programContacts.map((contact, index) => (
                  <tr key={index}>
                    <td data-label="Program">{contact.program}</td>
                    <td data-label="Contact">{contact.name}</td>
                    <td data-label="Email">
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </td>
                    <td data-label="Location">{contact.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="advising-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <p>
              <strong>Scheduling Advising:</strong> Log in to BC Navigate to 
              schedule an appointment. When emailing, please include your name, student ID, and program of study.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="locations-section section" aria-labelledby="locations-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="locations-heading">Campus Locations</h2>
            <p>Visit us at one of our campus locations</p>
          </div>

          <div className="locations-grid">
            <div className="location-card">
              <h3>Central Campus</h3>
              <p className="location-address">
                3501 SW Davie Road<br />
                Davie, FL 33314
              </p>
              <p className="location-detail">
                <strong>IT & Engineering:</strong> Building 13
              </p>
            </div>
            <div className="location-card">
              <h3>North Campus</h3>
              <p className="location-address">
                1000 Coconut Creek Blvd<br />
                Coconut Creek, FL 33066
              </p>
              <p className="location-detail">
                <strong>BAS Programs:</strong> Building 48
              </p>
            </div>
            <div className="location-card">
              <h3>South Campus</h3>
              <p className="location-address">
                7200 Pines Blvd<br />
                Pembroke Pines, FL 33024
              </p>
              <p className="location-detail">
                <strong>Student Services:</strong> Building 68
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;