import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => {
      setShowSuccess(false);
      // Reset button color when reverting
      const button = document.querySelector('button[type="submit"]');
      if (button) button.style.background = '#c4a574';
    }, 4000);
  };

  return (
    <div className="page" style={{background: '#faf8f3', position: 'relative'}}>
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#28a745',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          fontSize: '1rem',
          fontWeight: '500'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <path d="M9 12l2 2 4-4" stroke="#28a745" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Message sent successfully! We'll get back to you within 24 hours.
        </div>
      )}
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #c4a574 0%, #a0824a 100%)',
        padding: '6rem 0 4rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            marginBottom: '1rem',
            letterSpacing: '-1px'
          }}>Let's Work Together</h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
          }}>Ready to transform your property dreams into reality? Get in touch for a personalized consultation.</p>
        </div>
      </section>

      <section style={{padding: '4rem 0'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '300',
                color: '#2c2c2c',
                marginBottom: '2rem'
              }}>Get In Touch</h2>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '3rem'
              }}>Whether you're looking for luxury holiday homes, premium interior design, or expert real estate services, I'm here to provide personalized solutions that exceed your expectations.</p>

              <div style={{marginBottom: '3rem'}}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#c4a574',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{color: '#2c2c2c', marginBottom: '0.25rem'}}>Email</h4>
                    <a href="mailto:sameerfarooq@gmail.com" style={{color: '#666', textDecoration: 'none'}}>sameerfarooq@gmail.com</a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#c4a574',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{color: '#2c2c2c', marginBottom: '0.25rem'}}>Phone</h4>
                    <a href="tel:+1234567890" style={{color: '#666', textDecoration: 'none'}}>+1 (234) 567-8900</a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  background: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#c4a574',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{color: '#2c2c2c', marginBottom: '0.25rem'}}>Location</h4>
                    <p style={{color: '#666', margin: 0}}>Dubai, UAE</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{color: '#2c2c2c', marginBottom: '1rem'}}>Follow Me</h3>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <a href="https://linkedin.com/in/sameerfarooq" style={{
                    width: '45px',
                    height: '45px',
                    background: '#0077B5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20 6h-2.5l-1.1-1.4C16.1 4.2 15.7 4 15.2 4H8.8c-.5 0-.9.2-1.2.6L6.5 6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/sameerproperties" style={{
                    width: '45px',
                    height: '45px',
                    background: '#E4405F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/12345678900" style={{
                    width: '45px',
                    height: '45px',
                    background: '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '300',
                color: '#2c2c2c',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '15px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fafafa',
                      color: '#2c2c2c',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#c4a574'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      padding: '15px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fafafa',
                      color: '#2c2c2c',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#c4a574'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '15px',
                    border: '2px solid #f0f0f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    background: '#fafafa',
                    color: '#2c2c2c',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c4a574'}
                  onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                />
                
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '15px',
                    border: '2px solid #f0f0f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    background: '#fafafa',
                    color: '#2c2c2c',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c4a574'}
                  onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                >
                  <option value="">Select Service Interest</option>
                  <option value="holiday-homes">Holiday Homes</option>
                  <option value="home-furnishers">Home Furnishers</option>
                  <option value="realtor">Realtor Services</option>
                  <option value="consultation">General Consultation</option>
                </select>
                
                <textarea
                  name="message"
                  placeholder="Tell me about your project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    padding: '15px',
                    border: '2px solid #f0f0f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    background: '#fafafa',
                    color: '#2c2c2c',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c4a574'}
                  onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                />
                
                <button
                  type="submit"
                  style={{
                    padding: '15px 30px',
                    background: '#c4a574',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    cursor: showSuccess ? 'default' : 'pointer',
                    transition: 'background 0.3s ease',
                    marginTop: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!showSuccess) e.target.style.background = '#a0824a';
                  }}
                  onMouseLeave={(e) => {
                    if (!showSuccess) e.target.style.background = '#c4a574';
                  }}
                  disabled={showSuccess}
                >
                  {showSuccess ? 'Thank You!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section style={{
        background: '#2c2c2c',
        padding: '3rem 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '300'}}>Need Immediate Assistance?</h3>
          <p style={{marginBottom: '2rem', opacity: '0.8'}}>For urgent inquiries, reach out directly</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
            <a href="tel:+1234567890" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '12px 24px',
              background: '#c4a574',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '500',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#a0824a'}
            onMouseLeave={(e) => e.target.style.background = '#c4a574'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '0.5rem'}}>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Now
            </a>
            <a href="https://wa.me/12345678900" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '12px 24px',
              background: '#25D366',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '500',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#1da851'}
            onMouseLeave={(e) => e.target.style.background = '#25D366'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '0.5rem'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;