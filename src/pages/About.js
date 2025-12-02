import React from 'react';
import './About.css';

const About = () => {
  const timeline = [
    {
      year: '1960',
      title: 'Broward College Founded',
      description: 'Broward College was established to serve the growing South Florida community.'
    },
    {
      year: '1995',
      title: 'IT Programs Launched',
      description: 'The IT Department was created to meet the growing demand for technology education.'
    },
    {
      year: '2010',
      title: 'Cybersecurity & Networking Added',
      description: 'Expanded programs to include network systems and security specializations.'
    },
    {
      year: '2020',
      title: 'Data Analytics Program',
      description: 'Launched Data Analytics degree to meet industry demand for data professionals.'
    },
    {
      year: '2024',
      title: 'Applied AI Program',
      description: 'Introduced Applied Artificial Intelligence degree for next-generation tech careers.'
    }
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace emerging technologies and continuously evolve our curriculum to stay ahead of industry trends.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Inclusivity',
      description: 'We believe technology education should be accessible to everyone, regardless of background or experience.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We hold ourselves and our students to the highest standards of academic and professional achievement.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Community',
      description: 'We foster strong connections between students, faculty, industry partners, and alumni.'
    }
  ];

  const leadership = [
    {
      name: 'Cheryl-Ann Henry',
      title: 'Program Manager - AS Programs',
      bio: 'Manages Associate in Science programs including Computer Information Technology, Software Development, and Network Systems.',
      initials: 'CH'
    },
    {
      name: 'Nadine Blackwood',
      title: 'Program Manager - BAS in IT',
      bio: 'Oversees the Bachelor of Applied Science in Information Technology program at North Campus.',
      initials: 'NB'
    },
    {
      name: 'Prof. Archila',
      title: 'Program Manager - Data Analytics & AI',
      bio: 'Leads the Data Analytics and Applied AI programs, guiding students in emerging technology fields.',
      initials: 'FA'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-hero-bg">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <h1 id="about-heading" className="animate-fade-in-up">About Our Department</h1>
            <p className="animate-fade-in-up delay-1">
              Broward College's IT & Engineering Department prepares students for the workforce 
              or further studies in today's tech-driven world. Our programs offer hands-on 
              learning with industry-relevant curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section" aria-labelledby="mission-heading">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 id="mission-heading">Our Mission</h2>
              <p className="mission-statement">
                To empower students with the knowledge, skills, and practical experience 
                needed to thrive in the technology industry while fostering innovation, 
                critical thinking, and ethical responsibility.
              </p>
              <div className="mission-highlights">
                <div className="highlight">
                  <span className="highlight-number">8</span>
                  <span className="highlight-text">Degree Programs</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">10K+</span>
                  <span className="highlight-text">Graduates</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-text">Industry Partners</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mission-card-header">
                  <span className="card-tag">Vision</span>
                </div>
                <p>
                  To be the leading community college IT program in South Florida, 
                  recognized for producing job-ready graduates and driving regional 
                  technology innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="values-heading">Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section" aria-labelledby="history-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="history-heading">Our Journey</h2>
            <p>Key milestones in our department's history</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section section" aria-labelledby="leadership-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="leadership-heading">Department Leadership</h2>
            <p>Meet the team guiding our department's vision</p>
          </div>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <article key={index} className="leader-card">
                <div className="leader-avatar">
                  {leader.initials}
                </div>
                <h3>{leader.name}</h3>
                <span className="leader-title">{leader.title}</span>
                <p>{leader.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section section" aria-labelledby="goals-heading">
        <div className="container">
          <div className="goals-content">
            <h2 id="goals-heading">Our Goals & Objectives</h2>
            <div className="goals-grid">
              <div className="goal-item">
                <div className="goal-number">01</div>
                <h3>Academic Excellence</h3>
                <p>
                  Maintain rigorous academic standards while ensuring curriculum 
                  relevance to current industry practices and emerging technologies.
                </p>
              </div>
              <div className="goal-item">
                <div className="goal-number">02</div>
                <h3>Student Success</h3>
                <p>
                  Achieve high job placement rates for graduates through career services, 
                  internships, and strong industry partnerships.
                </p>
              </div>
              <div className="goal-item">
                <div className="goal-number">03</div>
                <h3>Industry Alignment</h3>
                <p>
                  Continuously update programs based on industry advisory board 
                  feedback and labor market analysis.
                </p>
              </div>
              <div className="goal-item">
                <div className="goal-number">04</div>
                <h3>Community Impact</h3>
                <p>
                  Serve as a technology resource for the South Florida community 
                  through workshops, partnerships, and outreach programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="accreditation-section section" aria-labelledby="accreditation-heading">
        <div className="container">
          <div className="accreditation-content">
            <h2 id="accreditation-heading">Accreditation & Recognition</h2>
            <p>
              Our programs are accredited by the Southern Association of Colleges and 
              Schools Commission on Colleges (SACSCOC) and meet industry certification 
              standards including CompTIA, Cisco, Microsoft, and AWS.
            </p>
            <div className="accreditation-badges">
              <div className="badge-item">SACSCOC Accredited</div>
              <div className="badge-item">CompTIA Partner</div>
              <div className="badge-item">Cisco Academy</div>
              <div className="badge-item">AWS Academy</div>
              <div className="badge-item">Microsoft Partner</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;