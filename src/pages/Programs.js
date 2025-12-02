import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 'computer-info-tech',
      title: 'Computer Information Technology',
      subtitle: 'Associate in Science (AS)',
      duration: '2 Years',
      credits: '60 Credits',
      description: 'The Computer Information Technology AS degree exposes students to applications programming, networking, systems administration, database management, information security, project management and web development.',
      highlights: [
        'Applications programming fundamentals',
        'Networking and systems administration',
        'Database management systems',
        'Information security principles',
        'Project management methodologies',
        'Web development technologies'
      ],
      careers: ['IT Support Specialist', 'Systems Administrator', 'Database Administrator', 'Network Technician', 'Help Desk Analyst'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      )
    },
    {
      id: 'software-development',
      title: 'Software Development',
      subtitle: 'Associate in Science (AS)',
      duration: '2 Years',
      credits: '60 Credits',
      description: 'The Software Development AS degree is designed to prepare students for the dynamic world of application and web development. Students will use current technology to learn procedural and object-oriented programming as well as web design including client-side and server-side scripting.',
      highlights: [
        'Procedural and object-oriented programming',
        'Web design and development',
        'Client-side scripting (JavaScript, HTML, CSS)',
        'Server-side scripting and APIs',
        'Mobile application development',
        'Software development lifecycle'
      ],
      careers: ['Software Developer', 'Web Developer', 'Front-End Developer', 'Back-End Developer', 'Mobile App Developer'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'network-systems',
      title: 'Network Systems Technology',
      subtitle: 'Associate in Science (AS)',
      duration: '2 Years',
      credits: '60 Credits',
      description: 'The Network Systems Technology AS degree prepares students for employment opportunities as network administrators, Information Security Analysts, and cloud architects.',
      highlights: [
        'Network administration and management',
        'Information security analysis',
        'Cloud architecture (AWS, Azure)',
        'Server configuration and maintenance',
        'Network troubleshooting',
        'Virtualization technologies'
      ],
      careers: ['Network Administrator', 'Information Security Analyst', 'Cloud Architect', 'Systems Engineer', 'IT Infrastructure Specialist'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      subtitle: 'Associate in Science (AS)',
      duration: '2 Years',
      credits: '60 Credits',
      description: 'The Data Analytics Associate in Science degree equips students with the skills to extract valuable insights from data, translate them into compelling visuals, and leverage machine learning techniques for informed decision-making.',
      highlights: [
        'Data extraction and analysis techniques',
        'Data visualization tools (Tableau, Power BI)',
        'Machine learning fundamentals',
        'Statistical analysis methods',
        'SQL and database querying',
        'Business intelligence reporting'
      ],
      careers: ['Data Analyst', 'Business Intelligence Analyst', 'Data Visualization Specialist', 'Research Analyst', 'Junior Data Scientist'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'applied-ai',
      title: 'Applied Artificial Intelligence',
      subtitle: 'Associate in Science (AS)',
      duration: '2 Years',
      credits: '60 Credits',
      description: 'The Applied Artificial Intelligence AS degree is designed to provide students with a strong foundation in AI principles, machine learning, and data science. This program equips students with the technical and analytical skills needed to develop, implement, and manage AI-driven solutions across various industries.',
      highlights: [
        'AI principles and foundations',
        'Machine learning algorithms',
        'Data science methodologies',
        'Neural networks and deep learning',
        'AI implementation strategies',
        'Ethical AI considerations'
      ],
      careers: ['AI Technician', 'Machine Learning Developer', 'AI Solutions Specialist', 'Automation Engineer', 'AI Support Analyst'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'project-management',
      title: 'Technology Project Management',
      subtitle: 'Associate in Science (AS)',
      duration: '2 Years',
      credits: '60 Credits',
      description: 'The Technology Project Management AS degree prepares students for employment opportunities as entry level project management professionals. It is designed for students seeking the skill set needed to be successful in their careers as supervisors, managers, and project leaders especially in the field of Information Technology.',
      highlights: [
        'Project management fundamentals',
        'Agile and Scrum methodologies',
        'IT project planning and execution',
        'Team leadership and communication',
        'Risk management strategies',
        'Budget and resource allocation'
      ],
      careers: ['Project Coordinator', 'IT Project Manager', 'Scrum Master', 'Technical Lead', 'Program Analyst'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 'bas-it',
      title: 'Information Technology',
      subtitle: "Bachelor of Applied Science (BAS)",
      duration: '4 Years (2 with AS)',
      credits: '120 Credits',
      description: 'Students completing the BAS in Information Technology program will have the skills and knowledge required to become successful Information Technology Professionals and Leaders. The curriculum offers a learner-centered and practical approach to understanding and applying Computer Information Technology.',
      highlights: [
        'Advanced IT leadership skills',
        'Enterprise systems management',
        'Strategic technology planning',
        'Advanced programming concepts',
        'IT governance and compliance',
        'Capstone project experience'
      ],
      careers: ['IT Manager', 'Systems Architect', 'Technology Consultant', 'IT Director', 'Senior Developer'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      )
    },
    {
      id: 'bas-data-ai',
      title: 'Data Analytics & AI',
      subtitle: 'Bachelor of Applied Science (BAS)',
      duration: '4 Years (2 with AS)',
      credits: '120 Credits',
      description: 'The Data Analytics & AI BAS equips students with the skills to extract valuable insights from data, translate them into compelling visuals, and leverage machine learning techniques for informed decision-making. The program prepares students for data analyst positions in various industries.',
      highlights: [
        'Data Fundamentals and methodology',
        'Advanced Databases and SQL',
        'Data Visualization techniques',
        'Statistics and Probability',
        'AI in Business Data applications',
        'Hands-on labs and projects'
      ],
      careers: ['Senior Data Analyst', 'AI Engineer', 'Data Scientist', 'Business Intelligence Manager', 'Machine Learning Engineer'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ];

  const currentProgram = programs[activeProgram];

  return (
    <div className="programs">
      {/* Hero Section */}
      <section className="programs-hero" aria-labelledby="programs-heading">
        <div className="programs-hero-bg">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="programs-hero-content">
            <h1 id="programs-heading" className="animate-fade-in-up">Our Programs</h1>
            <p className="animate-fade-in-up delay-1">
              Industry-aligned programs designed to launch your career in technology. 
              Choose from our range of Associate and Bachelor's degrees.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Browser */}
      <section className="programs-browser section" aria-labelledby="programs-list-heading">
        <div className="container">
          <div className="browser-layout">
            {/* Sidebar */}
            <aside className="programs-sidebar">
              <h2 id="programs-list-heading" className="sidebar-title">Programs</h2>
              <nav className="programs-nav">
                <div className="nav-group">
                  <span className="nav-group-title">Associate Degrees</span>
                  {programs.slice(0, 6).map((program, index) => (
                    <button
                      key={program.id}
                      className={`nav-item ${activeProgram === index ? 'active' : ''}`}
                      onClick={() => setActiveProgram(index)}
                      aria-current={activeProgram === index ? 'true' : undefined}
                    >
                      <span className="nav-icon">{program.icon}</span>
                      <span className="nav-label">{program.title}</span>
                    </button>
                  ))}
                </div>
                <div className="nav-group">
                  <span className="nav-group-title">Bachelor's Degrees</span>
                  {programs.slice(6).map((program, index) => (
                    <button
                      key={program.id}
                      className={`nav-item ${activeProgram === index + 6 ? 'active' : ''}`}
                      onClick={() => setActiveProgram(index + 6)}
                      aria-current={activeProgram === index + 6 ? 'true' : undefined}
                    >
                      <span className="nav-icon">{program.icon}</span>
                      <span className="nav-label">{program.title}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="program-detail">
              <div className="detail-header">
                <div className="detail-icon">{currentProgram.icon}</div>
                <div className="detail-title-group">
                  <span className="detail-badge">{currentProgram.subtitle}</span>
                  <h3>{currentProgram.title}</h3>
                  <div className="detail-meta">
                    <span className="meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      {currentProgram.duration}
                    </span>
                    <span className="meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                      {currentProgram.credits}
                    </span>
                  </div>
                </div>
              </div>

              <div className="detail-body">
                <div className="detail-description">
                  <p>{currentProgram.description}</p>
                </div>

                <div className="detail-grid">
                  <div className="detail-section">
                    <h4>What You'll Learn</h4>
                    <ul className="highlights-list">
                      {currentProgram.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <path d="M5 13l4 4L19 7"/>
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Career Opportunities</h4>
                    <div className="careers-list">
                      {currentProgram.careers.map((career, idx) => (
                        <span key={idx} className="career-tag">{career}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="detail-actions">
                  <Link to="/contact" className="btn btn-primary">
                    Request Information
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Apply Now
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section section" aria-labelledby="cert-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="cert-heading">Industry Certifications</h2>
            <p>Earn FREE certifications through the Open Door Scholarship</p>
          </div>

          <div className="cert-grid">
            <div className="cert-category">
              <h3>CompTIA</h3>
              <ul>
                <li>CompTIA A+</li>
                <li>CompTIA Network+</li>
                <li>CompTIA Security+</li>
                <li>CompTIA Linux+</li>
              </ul>
            </div>
            <div className="cert-category">
              <h3>Cisco</h3>
              <ul>
                <li>CCNA</li>
                <li>CCNP (pathway)</li>
                <li>CyberOps Associate</li>
              </ul>
            </div>
            <div className="cert-category">
              <h3>Cloud</h3>
              <ul>
                <li>AWS Cloud Practitioner</li>
                <li>AWS Solutions Architect</li>
                <li>Microsoft Azure Fundamentals</li>
              </ul>
            </div>
            <div className="cert-category">
              <h3>Development</h3>
              <ul>
                <li>AWS Developer Associate</li>
                <li>Meta Front-End Developer</li>
                <li>Google Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta-section" aria-labelledby="programs-cta-heading">
        <div className="container">
          <div className="programs-cta-content">
            <h2 id="programs-cta-heading">Ready to Get Started?</h2>
            <p>
              Take the first step toward your IT career. Our advisors are ready to help 
              you find the right program for your goals.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;