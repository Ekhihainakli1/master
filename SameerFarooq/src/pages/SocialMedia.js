import React from 'react';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: "📸",
      handle: "@sameerfarooqdxb",
      url: "https://www.instagram.com/sameerfarooqdxb/",
      description: "Beautiful property photos and interior design inspiration",
      followers: "12.5K",
      color: "#E4405F"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      handle: "Sameer Farooq",
      url: "https://www.linkedin.com/in/sameer-farooq-0415b3246/",
      description: "Professional insights and industry networking",
      followers: "8.2K",
      color: "#0077B5"
    },
    {
      name: "Facebook",
      icon: "👥",
      handle: "Dubai Holiday Homes by Sameer",
      url: "https://www.facebook.com/dubaiholidayhomesbysameer/",
      description: "Community updates and property showcases",
      followers: "15.8K",
      color: "#1877F2"
    },
    {
      name: "YouTube",
      icon: "🎥",
      handle: "Sameer Property Tours",
      url: "https://youtube.com/@sameerpropertytours",
      description: "Virtual property tours and real estate advice",
      followers: "6.7K",
      color: "#FF0000"
    },
    {
      name: "Twitter",
      icon: "🐦",
      handle: "@sameerfarooqdxb",
      url: "https://x.com/sameerfarooqdxb",
      description: "Quick updates and market insights",
      followers: "4.3K",
      color: "#1DA1F2"
    },
    {
      name: "WhatsApp",
      icon: "💬",
      handle: "+1 (234) 567-8900",
      url: "https://wa.me/12345678900",
      description: "Direct messaging for quick inquiries",
      followers: "Available 24/7",
      color: "#25D366"
    },
    {
      name: "Telegram",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0088CC">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>,
      handle: "@SameerProperties",
      url: "https://t.me/sameerproperties",
      description: "Exclusive property deals and market updates",
      followers: "2.1K",
      color: "#0088CC"
    },
    {
      name: "TikTok",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>,
      handle: "@sameerfarooqdxb",
      url: "https://tiktok.com/sameerfarooqdxb",
      description: "Short-form videos showcasing properties and tips",
      followers: "3.2K",
      color: "#000000"
    }
  ];

  return (
    <div className="page">
      <section className="content-section">
        <div className="container">
          <h2 style={{color: '#2c2c2c'}}>Connect With Us</h2>
          <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
            Stay connected across all platforms for the latest updates, property insights, and exclusive content
          </p>

          {/* Social Media Feed Preview */}
          <div style={{
            background: '#f8f9fa',
            padding: '3rem 2rem',
            borderRadius: '15px',
            marginBottom: '4rem',
            textAlign: 'center'
          }}>
            <h3 style={{fontSize: '2rem', marginBottom: '1rem', color: '#333'}}>
              Latest Social Updates
            </h3>
            <p style={{color: '#666', marginBottom: '2rem', fontSize: '1.1rem'}}>
              Follow us for daily property insights, design inspiration, and exclusive deals
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{color: '#E4405F', fontSize: '1.5rem', marginBottom: '0.5rem'}}>📸</div>
                <p style={{fontSize: '0.9rem', color: '#555'}}>
                  "Just listed this stunning beachfront villa! 🏖️ #HolidayHomes"
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{color: '#0077B5', fontSize: '1.5rem', marginBottom: '0.5rem'}}>💼</div>
                <p style={{fontSize: '0.9rem', color: '#555'}}>
                  "Market trends show 15% growth in luxury rentals this quarter"
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{color: '#FF0000', fontSize: '1.5rem', marginBottom: '0.5rem'}}>🎥</div>
                <p style={{fontSize: '0.9rem', color: '#555'}}>
                  "New video: 5 Interior Design Mistakes to Avoid"
                </p>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {socialPlatforms.map((platform, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: `3px solid ${platform.color}20`,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
              }}>
                


                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: `${platform.color}15`,
                  borderRadius: '0 15px 0 60px'
                }}></div>

                <div style={{marginBottom: '1.5rem'}}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{fontSize: '2.5rem', marginRight: '1rem'}}>{platform.icon}</span>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        color: platform.color,
                        marginBottom: '0.25rem'
                      }}>
                        {platform.name}
                      </h3>
                      <p style={{
                        color: '#666',
                        fontSize: '0.9rem',
                        margin: 0
                      }}>
                        {platform.handle}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#555',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {platform.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{
                      background: `${platform.color}15`,
                      color: platform.color,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      {platform.followers} {platform.name === 'WhatsApp' ? '' : 'followers'}
                    </span>
                  </div>
                </div>

                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: platform.color,
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${platform.color}dd`;
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = platform.color;
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {platform.name === 'WhatsApp' ? 'Message Now' : 
                   platform.name === 'Telegram' ? 'Join Channel' : 
                   `Follow on ${platform.name}`}
                </a>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default SocialMedia;