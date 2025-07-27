import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import dubaiVideo from '../videos/Dubai_road_center.mp4';

const Home = () => {
  const testimonialsRef = useRef(null);
  const [counters, setCounters] = useState({ properties: 0, years: 0, homes: 0, clients: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounter = (target, key) => {
    const duration = target < 50 ? 800 : 2000; // A bit slower for smaller numbers
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
    const interval = setInterval(() => {
      if (testimonialsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testimonialsRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          // Reset to beginning
          testimonialsRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll to next position
          testimonialsRef.current.scrollTo({
            left: scrollLeft + 382,
            behavior: 'smooth'
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(200, 'properties');
            animateCounter(8, 'years');
            animateCounter(150, 'homes');
            animateCounter(500, 'clients');
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

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('transparent');
    
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const servicesSection = document.querySelector('.services-background');
      const offplanSection = document.querySelector('.offplan-background');
      const servicesSectionTop = servicesSection ? servicesSection.getBoundingClientRect().top + window.scrollY : 0;
      const servicesSectionBottom = servicesSection ? servicesSectionTop + servicesSection.offsetHeight : 0;
      const offplanSectionTop = offplanSection ? offplanSection.getBoundingClientRect().top + window.scrollY : 0;
      const offplanSectionBottom = offplanSection ? offplanSectionTop + offplanSection.offsetHeight : 0;
      const currentScroll = window.scrollY + 100;
      
      if ((currentScroll < heroHeight) || 
          (currentScroll >= servicesSectionTop && currentScroll < servicesSectionBottom) ||
          (currentScroll >= offplanSectionTop && currentScroll < offplanSectionBottom)) {
        navbar.classList.add('transparent');
      } else {
        navbar.classList.remove('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navbar.classList.remove('transparent');
    };
  }, []);

  const stats = [
    { number: '200+', label: 'Properties Managed' },
    { number: '8+', label: 'Years Experience' },
    { number: '150+', label: 'Homes Furnished' },
    { number: '500+', label: 'Happy Clients' }
  ];

  return (
    <div className="page">
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src={dubaiVideo} type="video/mp4" />
        </video>
        <div className="container">
          <div className="hero-content">
            <h1>Hello, I'm <span className="highlight">Sameer Farooq</span></h1>
            <p className="hero-subtitle">I specialize in premium property services, from luxury holiday rentals to complete home furnishing solutions and expert real estate guidance, creating exceptional experiences through personalized solutions tailored to each client's unique needs.</p>
            <p className="hero-description">
              With over 8 years of experience, I help clients transform spaces and find their perfect properties across luxury markets.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">View Services</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} style={{padding: '50px 0 30px 0', background: 'white'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{fontSize: '2.5rem', color: '#c4a574', marginBottom: '0.5rem', fontWeight: '300'}}>{counters.properties}+</h3>
              <p style={{fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px'}}>Properties Managed</p>
            </div>
            <div>
              <h3 style={{fontSize: '2.5rem', color: '#c4a574', marginBottom: '0.5rem', fontWeight: '300'}}>{counters.years}+</h3>
              <p style={{fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px'}}>Years Experience</p>
            </div>
            <div>
              <h3 style={{fontSize: '2.5rem', color: '#c4a574', marginBottom: '0.5rem', fontWeight: '300'}}>{counters.homes}+</h3>
              <p style={{fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px'}}>Homes Furnished</p>
            </div>
            <div>
              <h3 style={{fontSize: '2.5rem', color: '#c4a574', marginBottom: '0.5rem', fontWeight: '300'}}>{counters.clients}+</h3>
              <p style={{fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px'}}>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>



      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{marginBottom: '2.5rem'}}>
            <h3 style={{fontSize: '2rem', fontWeight: '300', color: '#c4a574', textAlign: 'center', marginBottom: '2.5rem'}}>Consulting Services</h3>
          
          <div style={{marginBottom: '4rem'}}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '2rem',
              alignItems: 'center',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{textAlign: 'center'}}>
                <img 
                  src={require('../images/an-outline-drawing-of-a-city-skyline-illustration-photo-1536x1229.jpg')} 
                  alt="City Skyline" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    opacity: 0.8
                  }}
                />
              </div>
              <div style={{textAlign: 'justify'}}>
                <h2 style={{fontSize: '1.8rem', fontWeight: '300', color: '#c4a574', marginBottom: '1rem', textAlign: 'left'}}>Real Estate Due Diligence: Protecting Your Investment</h2>
                <p style={{color: '#666', fontSize: '1rem', lineHeight: '1.7', textAlign: 'justify'}}>
                  Real estate due diligence is the thorough investigation process that takes place before a property purchase. It ensures that buyers are fully informed about all aspects of the property, including its condition, legal status, and financial viability. Whether you're investing in a luxury estate or purchasing your dream home, due diligence safeguards your investment from unexpected issues.
                </p>
              </div>
            </div>
          </div>
            

          </div>

          <div className="services-background" style={{
            minHeight: '120vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '5rem',
            paddingBottom: '5rem'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100%',
              marginLeft: 'calc(-50vw + 50%)',
              backgroundImage: `url(${require('../images/multi_floor_open_building.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 1
            }}></div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100%',
              marginLeft: 'calc(-50vw + 50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 2
            }}></div>
            <div className="container" style={{
              position: 'relative',
              zIndex: 3,
              width: '100%'
            }}>
              <div style={{
                position: 'relative',
                maxWidth: '1200px',
                margin: '0 auto',
                height: '700px'
              }}>
              <div style={{position: 'absolute', left: '0', top: '0', maxWidth: '45%'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', color: '#f5f5f5', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.5px'}}>Real Estate Market Studies</h4>
                <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.7', textShadow: '0 1px 3px rgba(0,0,0,0.4)', fontWeight: '300'}}>
                  I provide comprehensive Real Estate Market Studies to help you make well-informed property decisions in Dubai's dynamic real estate landscape. Our in-depth reports analyze key market trends, pricing patterns, and emerging investment opportunities across residential, commercial, and off-plan developments.
                </p>
              </div>
              
              <div style={{position: 'absolute', right: '0', top: '120px', maxWidth: '45%'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', color: '#f5f5f5', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.5px'}}>Property Sales</h4>
                <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.7', textShadow: '0 1px 3px rgba(0,0,0,0.4)', fontWeight: '300'}}>
                  We specialize in assisting clients with the purchase and sale of luxury properties across Dubai. From waterfront villas in Palm Jumeirah to high-rise apartments in Downtown Dubai, we provide end-to-end support to ensure a seamless experience.
                </p>
              </div>
              
              <div style={{position: 'absolute', left: '0', top: '280px', maxWidth: '45%'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', color: '#f5f5f5', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.5px'}}>Lease Advisory</h4>
                <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.7', textShadow: '0 1px 3px rgba(0,0,0,0.4)', fontWeight: '300'}}>
                  Our Lease Advisory services provide tailored solutions for both landlords and tenants in Dubai's competitive real estate market. We offer expert advice on lease negotiations, contract terms, and market rates to ensure you get the best deal, whether you're leasing a luxury property or securing prime commercial space.
                </p>
              </div>
              
              <div style={{position: 'absolute', right: '0', top: '400px', maxWidth: '45%'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', color: '#f5f5f5', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.5px'}}>Real Estate Valuation Services</h4>
                <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.7', textShadow: '0 1px 3px rgba(0,0,0,0.4)', fontWeight: '300'}}>
                  I provide professional Real Estate Valuation Services to ensure you understand the true market value of your property. Our expert team uses the latest market data and valuation methods to deliver precise and reliable assessments for residential, commercial, and investment properties.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section style={{padding: '5rem 0', background: 'white'}}>
        <div className="container">
          <div style={{
            maxWidth: '800px', 
            margin: '0 auto 5rem',
            background: '#f5f2e8',
            padding: '2rem',
            borderRadius: '2px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e8e8e8'
          }}>

            <p style={{
              color: '#666',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
              textAlign: 'left'
            }}>A step forward to your luxury. Get in touch with short message.</p>
            
            <form style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <input
                type="text"
                placeholder="Name"
                required
                style={{
                  padding: '14px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  fontSize: '0.95rem',
                  background: 'white',
                  color: '#2c2c2c',
                  fontFamily: 'inherit'
                }}
              />
              <input
                type="email"
                placeholder="Email"
                required
                style={{
                  padding: '14px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  fontSize: '0.95rem',
                  background: 'white',
                  color: '#2c2c2c',
                  fontFamily: 'inherit'
                }}
              />
              <select
                required
                style={{
                  padding: '14px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  fontSize: '0.95rem',
                  background: 'white',
                  color: '#2c2c2c',
                  fontFamily: 'inherit',
                  gridColumn: '1 / -1'
                }}
              >
                <option value="">Service Required</option>
                <option value="holiday-homes">Holiday Homes</option>
                <option value="interior-design">Interior Design</option>
                <option value="real-estate">Real Estate</option>
              </select>
              <textarea
                placeholder="Message"
                required
                rows="4"
                style={{
                  padding: '14px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  fontSize: '0.95rem',
                  resize: 'vertical',
                  background: 'white',
                  color: '#2c2c2c',
                  fontFamily: 'inherit',
                  gridColumn: '1 / -1'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 32px',
                  background: '#2c2c2c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0',
                  fontSize: '0.95rem',
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                  justifySelf: 'start',
                  fontFamily: 'inherit'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="offplan-background" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${require('../images/Bar_du_port.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}></div>
        <div className="container" style={{position: 'relative', zIndex: 1, width: '100%'}}>

          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '4rem 2rem',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{fontSize: '2rem', fontWeight: '300', color: '#2c3e50', marginBottom: '1rem'}}>Upcoming Off Plan Projects</h3>
            <h4 style={{fontSize: '1.5rem', fontWeight: '400', color: '#34495e', marginBottom: '1rem'}}>OFF PLAN PROPERTIES</h4>
            <h5 style={{fontSize: '1.2rem', fontWeight: '500', color: '#5d6d7e', marginBottom: '2rem'}}>PREMIUM PROJECTS IN THE BEST LOCATIONS</h5>
            <p style={{color: '#566573', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 2rem'}}>
              Off-plan properties are those developments which are still in the planning or the construction stages. Purchasing an off-plan property in Dubai (the UAE) comes with certain advantages as many real estate developers in the United Arab Emirates offer special promotions in the early phases, such as generous post-handover payment plans.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}>
              <span style={{color: '#34495e', fontWeight: '500'}}>Jumeirah Residences</span>
              <span style={{color: '#34495e', fontWeight: '500'}}>Waldorf Astoria</span>
              <span style={{color: '#34495e', fontWeight: '500'}}>Grand Polo Club</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 0',
        background: '#f8f8f8'
      }}>
        <div className="container">
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '300',
            color: '#c4a574',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>What Our Clients Say</h3>
          
          <div 
            ref={testimonialsRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '2rem',
              padding: '1rem 0',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: 'grab',
              userSelect: 'none'
            }}>
            {[
              {
                name: "Ahmed Al-Rashid",
                role: "Property Investor",
                text: "Sameer has been instrumental in leading our property investment ventures. He is a true visionary with exceptional organizing and planning qualities. His quick decision-making ability and high performance benchmarks have consistently delivered outstanding results in Dubai's competitive real estate market."
              },
              {
                name: "Sarah Johnson",
                role: "Business Partner",
                text: "Having worked with Sameer, I can attest to his strong foundation and clarity in real estate ventures. His unique persona, combined with high adaptability and keenness to learn, sets him apart in the industry. It has been a wonderful experience having Sameer as part of our team."
              },
              {
                name: "Mohammed Hassan",
                role: "Team Leader",
                text: "Sameer excels in managing cross-functional teams and handles challenges exceptionally well. He understands both personal and professional needs of clients, providing apt solutions that make property transactions smooth and successful."
              },
              {
                name: "Fatima Al-Zahra",
                role: "Luxury Home Buyer",
                text: "Sameer's visionary approach and exceptional planning made our luxury home purchase in Palm Jumeirah seamless. His attention to detail and professional guidance exceeded our expectations."
              },
              {
                name: "David Thompson",
                role: "Commercial Investor",
                text: "Working with Sameer on our commercial property portfolio has been remarkable. His adaptability and strong market knowledge helped us secure prime locations with excellent investment potential."
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #f0f0f0',
                minWidth: '350px',
                maxWidth: '350px',
                minHeight: '320px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  flex: 1
                }}>"{testimonial.text}"</p>
                <div style={{marginTop: '1.5rem'}}>
                  <h4 style={{
                    color: '#c4a574',
                    fontSize: '1rem',
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>{testimonial.name}</h4>
                  <p style={{
                    color: '#999',
                    fontSize: '0.85rem',
                    margin: 0
                  }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;