import React, { useState, useEffect } from 'react';
import offPlanImg from '../images/Most_Popular_Off_Plan_Projects.jpg';
import marinaVideo from '../videos/MARINA-VISTA.mp4';
import luxuryVillasImg from '../images/LuxuryVillasPalmJebelAli.jpg';
import realtorImg from '../images/Realtor.jpg';
import waldorfImg1 from '../images/WALDORFASTORIARESIDENCE.jpg';
import waldorfImg2 from '../images/WALDORFASTORIA2.jpg';
import grandPoloImg1 from '../images/GrandPolo.jpg';
import grandPoloImg2 from '../images/GrandPolo2.jpg';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [waldorfImageIndex, setWaldorfImageIndex] = useState(0);
  const [grandPoloImageIndex, setGrandPoloImageIndex] = useState(0);
  const luxuryVillasImages = [luxuryVillasImg, realtorImg];
  const waldorfImages = [waldorfImg1, waldorfImg2];
  const grandPoloImages = [grandPoloImg1, grandPoloImg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % luxuryVillasImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [luxuryVillasImages.length]);

  useEffect(() => {
    const waldorfInterval = setInterval(() => {
      setWaldorfImageIndex(prev => (prev + 1) % waldorfImages.length);
    }, 5000);
    return () => clearInterval(waldorfInterval);
  }, [waldorfImages.length]);

  useEffect(() => {
    const grandPoloInterval = setInterval(() => {
      setGrandPoloImageIndex(prev => (prev + 1) % grandPoloImages.length);
    }, 5000);
    return () => clearInterval(grandPoloInterval);
  }, [grandPoloImages.length]);
  const projects = [
    {
      id: 1,
      title: "MARINA VISTA",
      location: "Dubai Marina",
      type: "Off-Plan Residential",
      description: "Luxury waterfront apartments with stunning marina views. Premium amenities including infinity pool, gym, and concierge services.",
      features: ["2-4 Bedroom Apartments", "Marina Views", "Premium Amenities", "Prime Location"],
      price: "AED 9,200,000",
      completion: "Q4 2025",
      status: "Available"
    },
    {
      id: 2,
      title: "Grand Polo Club & Resort",
      location: "Downtown Dubai",
      type: "Off-Plan Commercial",
      description: "Modern commercial tower in the heart of Dubai's business district. State-of-the-art offices with panoramic city views.",
      features: ["Office Spaces", "Retail Units", "Smart Building Tech", "Metro Access"],
      price: "Starting from AED 5.5M",
      completion: "Q2 2030",
      status: "Pre-Launch"
    },
    {
      id: 3,
      title: "Luxury Villas Palm Jebel Ali",
      location: "Palm Jumeirah",
      type: "Off-Plan Villas",
      description: "Exclusive beachfront villas on the iconic Palm Jumeirah. Private beach access and world-class amenities.",
      features: ["5-7 Bedroom Villas", "Private Beach", "Luxury Finishes", "Exclusive Community"],
      price: "Starting from AED 19M",
      completion: "Q4 2027",
      status: "Limited Units"
    },
    {
      id: 4,
      title: "WALDORF ASTORIA RESIDENCE",
      location: "Business Bay",
      type: "Off-Plan Mixed-Use",
      description: "Mixed-use development combining residential, commercial, and retail spaces in Dubai's thriving business district.",
      features: ["Mixed-Use Development", "Canal Views", "Retail Podium", "Business Hub"],
      price: "Starting from AED 15M",
      completion: "Q4 2029",
      status: "Selling Fast"
    }
  ];

  return (
    <div className="page" style={{background: '#faf8f3'}}>
      {/* Minimal Hero */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${offPlanImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 0 6rem',
        borderBottom: '1px solid #333'
      }}>
        <div className="container">
          <div style={{maxWidth: '800px'}}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '300',
              color: '#e0e0e0',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>Off-Plan <span style={{color: '#00bcd4'}}>Portfolio</span></h1>
            <p style={{
              fontSize: '1.3rem',
              color: '#a0a0a0',
              fontWeight: '300',
              lineHeight: '1.6'
            }}>
              Curated selection of premium developments in Dubai's most coveted districts
            </p>
          </div>
        </div>
      </section>

      <section style={{padding: '6rem 0'}}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem'
          }}>
            {projects.map((project, index) => (
              <div key={project.id} style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                minHeight: '500px'
              }}>
                {/* Image Section */}
                <div style={{
                  order: index % 2 === 0 ? 1 : 2,
                  height: '400px',
                  background: project.id === 1 ? '#000' : project.id === 3 ? '#f0f0f0' : `linear-gradient(45deg, #${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}20, #${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}40)`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {project.id === 1 && (
                    <video
                      autoPlay
                      muted
                      loop
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    >
                      <source src={marinaVideo} type="video/mp4" />
                    </video>
                  )}
                  {project.id === 3 && (
                    <img
                      src={luxuryVillasImages[currentImageIndex]}
                      alt="Luxury Villas"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                  {project.id === 2 && (
                    <img
                      src={grandPoloImages[grandPoloImageIndex]}
                      alt="Grand Polo Club & Resort"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                  {project.id === 4 && (
                    <img
                      src={waldorfImages[waldorfImageIndex]}
                      alt="Waldorf Astoria Residence"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    background: 'rgba(0,188,212,0.9)',
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: '#121212',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    {project.status}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: '300'
                  }}>
                    {project.title}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{
                  order: index % 2 === 0 ? 2 : 1,
                  padding: '2rem 0'
                }}>
                  <div style={{marginBottom: '1.5rem'}}>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#a0a0a0',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.5rem'
                    }}>
                      {project.location} • {project.type}
                    </div>
                    <h2 style={{
                      fontSize: '1.8rem',
                      fontWeight: '300',
                      color: '#e0e0e0',
                      marginBottom: '1rem',
                      letterSpacing: '-0.01em'
                    }}>
                      {project.title}
                    </h2>
                    <p style={{
                      fontSize: '1rem',
                      color: '#a0a0a0',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {project.description}
                    </p>
                  </div>

                  <div style={{marginBottom: '2rem'}}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '1rem'
                    }}>
                      {project.features.map(feature => (
                        <div key={feature} style={{
                          padding: '0.75rem 0',
                          borderBottom: '1px solid #333',
                          fontSize: '0.95rem',
                          color: '#a0a0a0'
                        }}>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 0',
                    borderTop: '1px solid #333',
                    borderBottom: '1px solid #333'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.85rem',
                        color: '#a0a0a0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '0.25rem'
                      }}>From</div>
                      <div style={{
                        fontSize: '1.2rem',
                        fontWeight: '400',
                        color: '#00bcd4'
                      }}>
                        {project.price}
                      </div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <div style={{
                        fontSize: '0.85rem',
                        color: '#a0a0a0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '0.25rem'
                      }}>Completion</div>
                      <div style={{
                        fontSize: '1rem',
                        color: '#e0e0e0'
                      }}>
                        {project.completion}
                      </div>
                    </div>
                  </div>

                  <div style={{marginTop: '2rem'}}>
                    <a href="/contact" style={{
                      display: 'inline-block',
                      padding: '1rem 2.5rem',
                      background: '#00bcd4',
                      color: '#121212',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '400',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      border: '1px solid #00bcd4'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#00bcd4';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#00bcd4';
                      e.target.style.color = '#121212';
                    }}>
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section style={{
        background: '#1a1a1a',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center',
        borderTop: '1px solid #333'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}><span style={{color: '#00bcd4'}}>Investment</span> Consultation</h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#a0a0a0',
            marginBottom: '3rem',
            fontWeight: '300'
          }}>
            Schedule a private consultation to explore exclusive opportunities
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            padding: '1.2rem 3rem',
            background: 'transparent',
            color: '#00bcd4',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '400',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            border: '1px solid #00bcd4',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#00bcd4';
            e.target.style.color = '#121212';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#00bcd4';
          }}>
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;