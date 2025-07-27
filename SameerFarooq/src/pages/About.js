import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [counters, setCounters] = useState({ years: 0, clients: 0, properties: 0, homes: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounter = (target, key) => {
    const duration = target < 50 ? 800 : 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(8, 'years');
            animateCounter(500, 'clients');
            animateCounter(200, 'properties');
            animateCounter(150, 'homes');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const values = [
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="#c4a574">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every project and service we provide.'
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 72 72">
        <g>
          <path fill="#c4a574" d="M62.622,40.338c.96,3.25-1.109,5.983-4.435,5.392.443,3.249-2.735,6.13-6.579,4.283,1.478,3.766-1.997,5.908-4.731,4.283,1.403,1.6985-.813,7.46-9.387,1.994l-1.6426-.9033L16.5088,44.7522,15.05,43.95s-7.133-5.822-8.537-8.259c-4.392-7.595.9489-19.79,10.44-21.82l7.9426-1.4243,5.2391,7.9469,13.0738,6.0043L56,33.58l3.6854,3.7675Z"/>
          <path fill="#c4a574" d="M62.622,40.338c6.721-4.585,5.041-19.03-.0988-25.36-9.287-1.459-11-2.362-20.98-3.943l-13.53-.6185a3.9934,3.9934,0,0,0-4.779,2.533,32.8568,32.8568,0,0,1-3.599,8.378,3.5387,3.5387,0,0,0,1.872,4.588c1.908.4767,2.78-.386,4.46-1.686a25.9541,25.9541,0,0,0,3.805-4.575l13.64,6.204,12.72,7.164c2.514,1.698,5.012,5.844,6.51,7.321"/>
          <path fill="#c4a574" d="M31.51,54.15a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101A3.27,3.27,0,0,1,29.7,57.2424l1.81-3.094Z"/>
          <path fill="#c4a574" d="M25.84,50.98a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101a3.27,3.27,0,0,1-5.658-3.1713l1.81-3.094Z"/>
          <path fill="#c4a574" d="M20.18,47.82a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101a3.27,3.27,0,0,1-5.658-3.1713l1.81-3.094Z"/>
          <path fill="#c4a574" d="M14.53,44.65a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101a3.27,3.27,0,0,1-5.658-3.1713l1.81-3.094Z"/>
        </g>
        <g>
          <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.05,43.95s-7.133-5.822-8.537-8.259c-4.392-7.595.9489-19.79,10.44-21.82"/>
          <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M38.71,42.99,51.6,50.011"/>
          <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M33.87,47.79l13,6.498"/>
          <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M58.18,45.72l-5.1-4.358-8.279-4.335"/>
          <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m29.772 19.654 13.64 6.204 12.72 7.164c2.514 1.698 5.012 5.844 6.51 7.321"/>
        </g>
      </svg>,
      title: 'Trust',
      description: 'Building lasting relationships through transparency, reliability, and honest communication.'
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="#c4a574">
        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
      </svg>,
      title: 'Innovation',
      description: 'Embracing modern solutions and creative approaches to exceed client expectations.'
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="#c4a574">
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.28 2.97-.2 4.18-.65 1.66-2.57 4.66-4.01 4.66z"/>
      </svg>,
      title: 'Passion',
      description: 'Driven by genuine enthusiasm for creating beautiful spaces and memorable experiences.'
    }
  ];

  return (
    <div className="page">
      <section className="content-section">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '3rem', color: '#2c2c2c'}}>My Story</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto',
            alignItems: 'center'
          }}>
            <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#666'}}>
              <p style={{marginBottom: '2rem'}}>
                I'm a passionate entrepreneur with over 8 years of experience in the property and 
                lifestyle industry. My journey began with a simple vision: to transform how people 
                experience properties and create spaces that truly feel like home.
              </p>
              
              <p style={{marginBottom: '2rem'}}>
                What started as a fascination with beautiful spaces has evolved into a comprehensive 
                business that spans holiday home management, interior design, and real estate services. 
                I believe that every property has the potential to become something extraordinary.
              </p>
            </div>
            
            <div style={{
              width: '300px',
              height: '400px',
              background: '#f5f2e8',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8b7355',
              fontSize: '1rem',
              textAlign: 'center',
              border: '1px solid #d4c4a8'
            }}>
              Profile Photo
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '3rem auto 0',
            alignItems: 'center'
          }}>
            <div style={{
              width: '250px',
              height: '300px',
              background: '#f5f2e8',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8b7355',
              fontSize: '1rem',
              textAlign: 'center',
              border: '1px solid #d4c4a8'
            }}>
              Work Environment
            </div>
            
            <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#666'}}>
              <p style={{marginBottom: '2rem'}}>
                Today, I work with clients from around the world, helping them find their perfect 
                vacation rental, design their dream home, or navigate complex real estate decisions. 
                Each project is an opportunity to create something unique and meaningful.
              </p>
              
              <p>
                When I'm not working with clients, you'll find me exploring new destinations for 
                holiday properties, staying current with design trends, or building relationships 
                with industry professionals to ensure I can always provide the best possible service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} style={{background: '#faf8f3', padding: '4rem 0', borderTop: '1px solid #e8dcc6', borderBottom: '1px solid #e8dcc6'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '3rem', color: '#2c2c2c'}}>By the Numbers</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              background: '#f5f2e8',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(139,115,85,0.1)',
              border: '1px solid #d4c4a8'
            }}>
              <h3 style={{fontSize: '2.5rem', color: '#2c2c2c', marginBottom: '0.5rem'}}>{counters.years}+</h3>
              <p style={{fontSize: '1.1rem', color: '#666'}}>Years Experience</p>
            </div>
            <div style={{
              background: '#f5f2e8',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(139,115,85,0.1)',
              border: '1px solid #d4c4a8'
            }}>
              <h3 style={{fontSize: '2.5rem', color: '#2c2c2c', marginBottom: '0.5rem'}}>{counters.clients}+</h3>
              <p style={{fontSize: '1.1rem', color: '#666'}}>Happy Clients</p>
            </div>
            <div style={{
              background: '#f5f2e8',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(139,115,85,0.1)',
              border: '1px solid #d4c4a8'
            }}>
              <h3 style={{fontSize: '2.5rem', color: '#2c2c2c', marginBottom: '0.5rem'}}>{counters.properties}+</h3>
              <p style={{fontSize: '1.1rem', color: '#666'}}>Properties Managed</p>
            </div>
            <div style={{
              background: '#f5f2e8',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(139,115,85,0.1)',
              border: '1px solid #d4c4a8'
            }}>
              <h3 style={{fontSize: '2.5rem', color: '#2c2c2c', marginBottom: '0.5rem'}}>{counters.homes}+</h3>
              <p style={{fontSize: '1.1rem', color: '#666'}}>Homes Furnished</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '3rem', color: '#2c2c2c'}}>My Values</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: '4rem',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {values.map((value, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1.5rem'
                }}>
                  <div style={{marginBottom: '1rem', display: 'flex', justifyContent: 'center'}}>{value.icon}</div>
                  <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#2c2c2c'}}>{value.title}</h3>
                  <p style={{color: '#666', lineHeight: '1.6', fontSize: '0.9rem'}}>{value.description}</p>
                </div>
              ))}
            </div>
            
            <div style={{
              width: '350px',
              height: '450px',
              background: '#f5f2e8',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8b7355',
              fontSize: '1rem',
              textAlign: 'center',
              border: '1px solid #d4c4a8'
            }}>
              Team/Office Photo
            </div>
          </div>
        </div>
      </section>

      <section style={{background: '#faf8f3', padding: '4rem 0', borderTop: '1px solid #e8dcc6', borderBottom: '1px solid #e8dcc6'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '3rem', color: '#2c2c2c'}}>Areas of Expertise</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '4rem',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center'
          }}>
            <div style={{
              width: '300px',
              height: '400px',
              background: '#f5f2e8',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8b7355',
              fontSize: '1rem',
              textAlign: 'center',
              border: '1px solid #d4c4a8'
            }}>
              Portfolio/Projects
            </div>
            
            <div className="about-content">
              <div className="skill-tags" style={{justifyContent: 'flex-start'}}>
                <span className="skill-tag">Holiday Home Management</span>
                <span className="skill-tag">Interior Design</span>
                <span className="skill-tag">Real Estate Services</span>
                <span className="skill-tag">Property Investment</span>
                <span className="skill-tag">Space Planning</span>
                <span className="skill-tag">Market Analysis</span>
                <span className="skill-tag">Client Relations</span>
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Luxury Services</span>
                <span className="skill-tag">Property Maintenance</span>
                <span className="skill-tag">Design Consultation</span>
                <span className="skill-tag">Investment Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{
            textAlign: 'center',
            background: '#f5f2e8',
            color: '#2c2c2c',
            padding: '4rem 2rem',
            borderRadius: '15px',
            border: '1px solid #d4c4a8'
          }}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2c2c2c'}}>Let's Work Together</h2>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: '#666'}}>
              Ready to transform your property experience? I'd love to hear about your project.
            </p>
            <a href="/contact" className="btn btn-primary" style={{
              background: '#2c2c2c',
              color: 'white',
              padding: '15px 40px',
              fontSize: '1.1rem',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '400',
              transition: 'all 0.3s ease'
            }}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;