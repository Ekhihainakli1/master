import React from 'react';
import { Link } from 'react-router-dom';
import holidayHomesImg from '../images/holidayHomes.jpg';
import homeFurnishingImg from '../images/homefurnishing.png';
import realtorImg from '../images/Realtor.jpg';

const Services = () => {
  const services = [
    {
      title: "Realtor Services",
      icon: <svg width="50" height="50" viewBox="0 180 512 180" fill="white">
        <path d="M311.338,203.162l-1.306-1.42c-4.06-4.417-10.932-4.705-15.349-0.645c-4.416,4.06-4.706,10.932-0.645,15.348l1.307,1.421 c2.142,2.331,5.066,3.511,7.999,3.511c2.627,0,5.263-0.948,7.349-2.866C315.109,214.451,315.398,207.579,311.338,203.162z"/>
        <path d="M501.137,345.116h-17.923V310.68c0.622,0.109,1.251,0.175,1.881,0.175c2.625,0,5.26-0.946,7.345-2.862 c4.418-4.058,4.71-10.93,0.652-15.348l-12.74-13.869c-0.001-0.001-0.002-0.003-0.003-0.004l-67.001-72.91 c-2.057-2.239-4.958-3.512-7.998-3.512s-5.941,1.274-7.998,3.512l-41.768,45.451l-0.486-0.528l-0.001-0.001l-20.22-22.003 c-4.059-4.418-10.931-4.707-15.348-0.648c-4.418,4.059-4.708,10.931-0.648,15.348l17.361,18.893v82.744H292.01v-57.159 c0-20.294-16.515-36.803-36.814-36.803h-3.856c-20.299,0-36.814,16.509-36.814,36.803v57.159h-44.233v-82.744l82.97-90.298 l18.486,20.117c4.059,4.418,10.931,4.707,15.348,0.648c4.418-4.059,4.708-10.931,0.648-15.348l-26.484-28.821 c-2.057-2.239-4.958-3.513-7.999-3.513c-3.04,0-5.941,1.274-7.998,3.513l-93.832,102.12c-0.002,0.002-0.003,0.004-0.005,0.005 l-0.72,0.783l-42.011-45.719c-2.057-2.239-4.958-3.512-7.998-3.512s-5.941,1.274-7.998,3.512l-67.001,72.91 c-0.001,0.001-0.002,0.003-0.003,0.004l-13.967,15.206c-4.058,4.418-3.766,11.29,0.652,15.348c2.086,1.916,4.72,2.862,7.345,2.862 c1.049,0,2.098-0.158,3.109-0.458v33.384H10.863C4.863,345.117,0,349.98,0,355.979s4.863,10.863,10.863,10.863h22.833h47.09 h39.822h38.823h65.958h55.758h65.958h38.334h39.812h47.1c0.596,0,1.179-0.061,1.749-0.153c0.57,0.092,1.151,0.153,1.749,0.153 h25.288c5.999,0,10.863-4.863,10.863-10.863S507.137,345.116,501.137,345.116z M109.745,345.116H91.648v-37.704 c0-4.222,3.44-7.658,7.669-7.658h2.759c4.229,0,7.669,3.436,7.669,7.658V345.116z M148.567,345.117H131.47v-37.705 c0-16.203-13.186-29.383-29.394-29.383h-2.759c-16.208,0-29.394,13.181-29.394,29.383v37.704H44.559v-54.762l56.138-61.089 l35.257,38.369l-4.095,4.457c-4.059,4.417-3.769,11.288,0.647,15.348c2.087,1.918,4.721,2.864,7.347,2.864 c2.934,0,5.859-1.182,8-3.512l0.714-0.777V345.117z M270.284,345.116h-34.033v-57.159c0-8.313,6.769-15.077,15.088-15.077h3.856 c8.32,0,15.088,6.764,15.088,15.077V345.116z M414.388,345.116h-18.086v-37.704c0-4.222,3.44-7.658,7.669-7.658h2.759 c4.222,0,7.658,3.436,7.658,7.658V345.116z M436.114,345.116v-37.704c0-16.203-13.181-29.383-29.383-29.383h-2.759 c-16.208,0-29.394,13.181-29.394,29.383v37.704h-16.609v-59.255c2.008,1.697,4.497,2.563,6.998,2.563 c2.627,0,5.262-0.947,7.348-2.864c4.417-4.059,4.707-10.931,0.647-15.348l-2.619-2.849l35.009-38.097l56.138,61.089v54.762 H436.114z"/>
      </svg>,
      backgroundImage: realtorImg,
      description: "Professional real estate services for buying, selling, and investing in properties. Expert guidance through every step of your real estate journey.",
      features: [
        "Property buying assistance",
        "Home selling services",
        "Market analysis & valuation",
        "Investment property guidance",
        "Negotiation expertise",
        "Legal documentation support"
      ],


    },
    {
      title: "Holiday Homes",
      icon: <svg width="40" height="40" viewBox="0 -12.91 122.88 122.88" fill="white">
        <path d="M100.28,27.01c-0.88-0.09-1.53-0.88-1.44-1.77c0.09-0.88,0.88-1.53,1.77-1.44c1.98,0.21,3.87,0.82,5.6,1.86 c0.84,0.5,1.63,1.1,2.38,1.8c0.34-0.83,0.76-1.6,1.24-2.32c1.07-1.58,2.46-2.88,4.1-3.83c0.77-0.45,1.76-0.18,2.2,0.59 c0.45,0.77,0.18,1.76-0.59,2.2c-1.22,0.7-2.25,1.67-3.04,2.84c-0.77,1.15-1.32,2.5-1.59,4.01c-0.06,0.43-0.28,0.83-0.66,1.1 c-0.72,0.52-1.73,0.35-2.25-0.37c-1.01-1.42-2.18-2.5-3.45-3.26C103.24,27.63,101.8,27.17,100.28,27.01L100.28,27.01z M36.99,38.8 v53.41h6.2l7.22-7.94h-3.83v-4.85h11.86L45.06,64.59l3.6-3.24l8.1,8.97v-0.35h19.83c0.87,0,1.64,0.46,2.07,1.15l5.86,8.29h11.01 c0.73,0,1.39,0.32,1.83,0.84l12.06,11.96h13.46v4.85H0.7v-4.85h32.52V38.8H1.89C0.85,38.8,0,37.96,0,36.91c0-0.06,0-0.12,0.01-0.19 c0.08-9.42,4.01-17.93,10.32-24.1C16.56,6.55,25.1,2.74,34.54,2.61c0.18-0.06,0.38-0.09,0.58-0.09c0.2,0,0.4,0.03,0.59,0.09 c9.39,0.17,17.87,3.97,24.07,10.02c6.35,6.21,10.29,14.79,10.32,24.28c0,1.04-0.84,1.88-1.88,1.88v0.01H36.99L36.99,38.8z M49.74,92.22h52.8l-8.01-7.94H56.96L49.74,92.22L49.74,92.22z M64.97,79.42h13.61l-3.24-4.59H60.83L64.97,79.42L64.97,79.42z M83.92,7.95c-1.03,0.13-1.97-0.59-2.11-1.62c-0.13-1.03,0.59-1.97,1.62-2.11c3.26-0.43,6.41-0.04,9.26,1.23 c1.72,0.77,3.31,1.85,4.74,3.27c0.78-1.75,1.84-3.29,3.14-4.58c2.15-2.13,4.92-3.56,8.08-4.11c1.03-0.18,2,0.52,2.18,1.54 c0.18,1.03-0.52,2-1.54,2.18c-2.38,0.41-4.46,1.48-6.05,3.06c-1.58,1.56-2.7,3.65-3.19,6.12l-0.01,0c-0.09,0.47-0.36,0.91-0.79,1.2 c-0.86,0.58-2.03,0.36-2.61-0.5c-1.52-2.24-3.39-3.8-5.48-4.73C88.97,7.9,86.51,7.61,83.92,7.95L83.92,7.95z M57.15,15.33 c-2.56-2.5-5.57-4.58-8.89-6.09c1.28,1.85,2.36,3.96,3.24,6.29c2.05,5.41,3.05,12.06,3.15,19.5h11.62 C65.77,27.35,62.38,20.44,57.15,15.33L57.15,15.33z M40.58,6.86c-1.17-0.2-2.36-0.34-3.57-0.42v28.59h13.88 c-0.09-6.98-1.02-13.18-2.91-18.17C46.3,12.41,43.86,8.96,40.58,6.86L40.58,6.86z M33.23,6.43c-1.19,0.07-2.37,0.2-3.52,0.39 c-3.32,2.11-5.79,5.59-7.48,10.1c-1.87,4.97-2.79,11.16-2.88,18.1h13.88V6.43L33.23,6.43z M22.05,9.15 c-3.4,1.53-6.48,3.63-9.09,6.19c-5.23,5.11-8.62,12.02-9.12,19.69h11.76c0.09-7.4,1.09-14.03,3.12-19.43 C19.61,13.2,20.72,11.03,22.05,9.15L22.05,9.15z"/>
      </svg>,
      backgroundImage: holidayHomesImg,
      description: "Premium vacation rental properties in the most sought-after destinations. From beachfront villas to mountain retreats, we offer luxury accommodations for unforgettable holidays.",
      features: [
        "Luxury vacation rentals",
        "Prime locations worldwide",
        "24/7 concierge service",
        "Fully furnished properties",
        "Professional cleaning service",
        "Local experience packages"
      ],


    },
    {
      title: "Home Furnishers",
      icon: <svg width="40" height="40" viewBox="0 -12.98 122.88 122.88" fill="white">
        <path d="M9.57,49a7.72,7.72,0,0,1-5.28.25,6.28,6.28,0,0,1-2.91-2A6.48,6.48,0,0,1,0,43.88a8.33,8.33,0,0,1,2-6.13H2a2.46,2.46,0,0,1,.28-.28L60.11.46A1.74,1.74,0,0,1,62.36.37l57.9,37h0a.93.93,0,0,1,.21.19,7.81,7.81,0,0,1,2.22,7.21,6.66,6.66,0,0,1-1.52,2.89,6.5,6.5,0,0,1-2.69,1.82,7.25,7.25,0,0,1-5.64-.37V96.79h-4.13V47.54c0-.84-43.5-27.13-47.1-29.93-3.81,2.9-47.91,29-47.91,30.07V96.91l-4.13,0V49Zm72.37,5.79H93.38l4,14.77H78l4-14.77ZM88.77,72V93.36H92a.86.86,0,0,1,0,1.71H83.38a.86.86,0,0,1,0-1.71h3.2V72ZM57.94,92.47V95H55.46V92.47H32.36V95H29.87V92.48H29a3.08,3.08,0,0,1-2.1-.63A2.82,2.82,0,0,1,26,89.63V74a7,7,0,0,1-1.81-.78,3.91,3.91,0,0,1-1.55-1.73,4.94,4.94,0,0,1,.75-5.78,5.66,5.66,0,0,1,2.14-1.39A5.82,5.82,0,0,1,28.07,64a5.17,5.17,0,0,1,1.85.48v-5.9c0-3.16.48-4.81,1.7-5.74s2.9-.93,5.5-.93H50.74c2.83,0,4.55.11,5.68,1.12s1.46,2.75,1.46,6v5.78a5.64,5.64,0,0,1,2.49-.53,6.05,6.05,0,0,1,2.39.5,5.38,5.38,0,0,1,2,1.4,4.63,4.63,0,0,1,.46,5.43,4.44,4.44,0,0,1-1.55,1.68,6.83,6.83,0,0,1-1.81.8V89.61h0a2.79,2.79,0,0,1-.89,2.21,3.08,3.08,0,0,1-2.1.63h-.89ZM31.45,65.6a5.38,5.38,0,0,1,1.1,2,5.93,5.93,0,0,1,.25,1.28,8.64,8.64,0,0,1,0,1.44v2H55V70.32a8.23,8.23,0,0,1,0-1.39,4.44,4.44,0,0,1,.3-1.35,5.58,5.58,0,0,1,1.06-1.71V59c0-2.75-.21-4.17-1-4.83s-2.2-.72-4.66-.72H37.12c-2.28,0-3.79,0-4.59.63s-1.08,1.89-1.08,4.52v7Zm1.35,8.32v2.57H55V73.92ZM28,65.49a4.57,4.57,0,0,0-1.9.27,3.54,3.54,0,0,0-2,5.12A2.53,2.53,0,0,0,25,72a5.92,5.92,0,0,0,1.92.74h0a.76.76,0,0,1,.6.74V89.6a1.37,1.37,0,0,0,.35,1.08A1.7,1.7,0,0,0,29,91h2.27V70.26a6,6,0,0,0,0-1.2,4.07,4.07,0,0,0-.19-1A3.49,3.49,0,0,0,28,65.49Zm28.59,7.44a.85.85,0,0,1,0,.23.93.93,0,0,1,0,.24v3.69a1.45,1.45,0,0,1,0,.34V90.94h2.27A1.83,1.83,0,0,0,60,90.68a1.48,1.48,0,0,0,.35-1.07h0V73.43a.77.77,0,0,1,.65-.76,5.69,5.69,0,0,0,1.86-.73,2.84,2.84,0,0,0,1-1.09,3.16,3.16,0,0,0-.24-3.74,4,4,0,0,0-1.41-1,4.89,4.89,0,0,0-1.81-.38,3.78,3.78,0,0,0-3.65,2.41,2.86,2.86,0,0,0-.18.89,7.19,7.19,0,0,0,0,1.22.17.17,0,0,1,0,.07h0v2.61Zm-23.75,18H55V78H32.8V90.94ZM98.67,3l14.27.58V22.8L98.67,16V3Z"/>
      </svg>,
      backgroundImage: homeFurnishingImg,
      description: "Complete interior design and furnishing solutions for your home. We transform spaces with premium furniture, decor, and personalized design consultations.",
      features: [
        "Custom interior design",
        "Premium furniture selection",
        "Space planning & layout",
        "Color scheme consultation",
        "Installation & setup",
        "Ongoing maintenance support"
      ],


    }
  ];

  return (
    <div className="page">
      <section className="content-section" style={{paddingTop: '2rem'}}>
        <div className="container">
          <h2 style={{marginBottom: '0.5rem'}}>Our Services</h2>
          <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', marginTop: '0.5rem'}}>
            We provide comprehensive solutions for all your property and lifestyle needs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'stretch',
            minHeight: '550px'
          }}>
            {services.map((service, index) => (
              <div key={index} 
              onClick={() => {
                if (service.title === 'Holiday Homes') {
                  window.open('https://restnroamdubai.ae/holiday-homes/', '_blank');
                  window.location.href = '/contact';
                } else {
                  window.location.href = '/contact';
                }
              }}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.4s ease',
                border: '1px solid #333',
                color: 'white',
                height: '525px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.height = '550px';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,188,212,0.2)';
                e.currentTarget.style.zIndex = '10';
                e.currentTarget.querySelector('.features-list').style.opacity = '1';
                e.currentTarget.querySelector('.features-list').style.maxHeight = '300px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.height = '525px';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                e.currentTarget.style.zIndex = '1';
                e.currentTarget.querySelector('.features-list').style.opacity = '0';
                e.currentTarget.querySelector('.features-list').style.maxHeight = '0';
              }}>
                
                <div style={{textAlign: 'center'}}>
                  <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>{service.icon}</div>
                  <h3 style={{fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem'}}>{service.title}</h3>
                  <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.4', fontSize: '0.9rem'}}>{service.description}</p>
                </div>

                <div className="features-list" style={{
                  opacity: '0',
                  maxHeight: '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  marginTop: '1rem'
                }}>
                  <h4 style={{fontSize: '1.2rem', color: 'white', marginBottom: '1rem', textAlign: 'center'}}>What's Included:</h4>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        padding: '0.4rem 0',
                        color: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.9rem'
                      }}>
                        <span style={{color: '#00bcd4', marginRight: '0.5rem'}}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div style={{
            background: '#1a1a1a',
            padding: '3rem 2rem',
            borderRadius: '15px',
            marginTop: '4rem',
            textAlign: 'center',
            border: '1px solid #333'
          }}>
            <h3 style={{fontSize: '2rem', marginBottom: '2rem', color: '#e0e0e0'}}>Why Choose Us?</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div>
                <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                  <svg width="30" height="30" viewBox="0 0 64 64" fill="#c4a574">
                    <path d="m60.28 58 3.501-4.375A1 1 0 0 0 63 52h-9v-6a1 1 0 0 0-1-1h-9a7.008 7.008 0 0 1-7-7v-4.22l5.907 3.106a1 1 0 0 0 1.45-1.055l-2.083-12.145 8.825-8.601a1 1 0 0 0-.555-1.706L38.35 11.607 32.897.557a1.04 1.04 0 0 0-1.793 0l-5.455 11.05-12.193 1.772a1 1 0 0 0-.555 1.706l8.825 8.601-2.083 12.145a1 1 0 0 0 1.45 1.054L27 33.78V38a7.008 7.008 0 0 1-7 7h-9a1 1 0 0 0-1 1v6H1a1 1 0 0 0-.781 1.625L3.72 58 .219 62.376A1 1 0 0 0 1 64h19.002A1.007 1.007 0 0 0 21 63v-4h22v4a1.008 1.008 0 0 0 .998 1H63a1 1 0 0 0 .781-1.625zM23.498 22.62l-7.749-7.553 10.708-1.556a.999.999 0 0 0 .753-.547L32 3.259l4.79 9.705a.999.999 0 0 0 .753.547l10.708 1.556-7.749 7.554a1.001 1.001 0 0 0-.287.885l1.829 10.666c-8.31-4.368-3.347-1.765-9.58-5.037a.996.996 0 0 0-.93 0l-9.578 5.037 1.829-10.666a1.001 1.001 0 0 0-.287-.885zM29 38v-5.272l3-1.577 3 1.577V38a8.989 8.989 0 0 0 3.349 7H25.65A8.989 8.989 0 0 0 29 38zm-17 9h40v10H12zM5.781 58.624a1 1 0 0 0 0-1.249L3.081 54H10v4a1.105 1.105 0 0 0 .515.874L16.14 62H3.081zM19 61.301 14.859 59H19zM49.141 59 45 61.3V59zm-1.282 3 5.626-3.126A1.082 1.082 0 0 0 54 58v-4h6.919l-2.7 3.376a1 1 0 0 0 0 1.249l2.7 3.375z"/>
                    <path d="M15 55h34a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm1-4h32v2H16z"/>
                  </svg>
                </div>
                <h4 style={{color: '#e0e0e0', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Expert Team</h4>
                <p style={{color: '#a0a0a0', fontSize: '0.9rem'}}>Years of experience in property and design</p>
              </div>
              <div>
                <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#c4a574">
                    <path d="M21.488 6.432 18 2.551a.609.609 0 0 0-.383-.171H6.382A.609.609 0 0 0 6 2.551L2.512 6.432a.505.505 0 0 0-.123.285.774.774 0 0 0 .072.335l9.1 14.329a.515.515 0 0 0 .87 0l9.1-14.329a.774.774 0 0 0 .072-.335.505.505 0 0 0-.115-.285zm-3.646-2.516 2.107 2.345h-2.83zm-.923-.5-.756 2.453-2.795-2.458zm-1.867 2.85h-6.1L12 3.581zm-4.42-2.85L7.837 5.864l-.756-2.453zm-4.474.5.723 2.345h-2.83zM3.833 7.291H7.2l3.177 10.3zM12 19.357 8.278 7.291h7.444zm1.624-1.77L16.8 7.291h3.366z"/>
                  </svg>
                </div>
                <h4 style={{color: '#e0e0e0', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Premium Quality</h4>
                <p style={{color: '#a0a0a0', fontSize: '0.9rem'}}>Only the finest properties and materials</p>
              </div>
              <div>
                <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                  <svg width="30" height="30" viewBox="0 0 72 72">
                    <path fill="#c4a574" d="M62.622,40.338c.96,3.25-1.109,5.983-4.435,5.392.443,3.249-2.735,6.13-6.579,4.283,1.478,3.766-1.997,5.908-4.731,4.283,1.403,1.6985-.813,7.46-9.387,1.994l-1.6426-.9033L16.5088,44.7522,15.05,43.95s-7.133-5.822-8.537-8.259c-4.392-7.595.9489-19.79,10.44-21.82l7.9426-1.4243,5.2391,7.9469,13.0738,6.0043L56,33.58l3.6854,3.7675Z"/>
                    <path fill="#c4a574" d="M62.622,40.338c6.721-4.585,5.041-19.03-.0988-25.36-9.287-1.459-11-2.362-20.98-3.943l-13.53-.6185a3.9934,3.9934,0,0,0-4.779,2.533,32.8568,32.8568,0,0,1-3.599,8.378,3.5387,3.5387,0,0,0,1.872,4.588c1.908.4767,2.78-.386,4.46-1.686a25.9541,25.9541,0,0,0,3.805-4.575l13.64,6.204,12.72,7.164c2.514,1.698,5.012,5.844,6.51,7.321"/>
                    <path fill="#c4a574" d="M31.51,54.15a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101A3.27,3.27,0,0,1,29.7,57.2424l1.81-3.094Z"/>
                    <path fill="#c4a574" d="M25.84,50.98a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101a3.27,3.27,0,0,1-5.658-3.1713l1.81-3.094Z"/>
                    <path fill="#c4a574" d="M20.18,47.82a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101a3.27,3.27,0,0,1-5.658-3.1713l1.81-3.094Z"/>
                    <path fill="#c4a574" d="M14.53,44.65a3.0218,3.0218,0,0,1,4.144-.9c1.405.8125,2.439,2.362,1.478,4.063l-1.774,3.101a3.27,3.27,0,0,1-5.658-3.1713l1.81-3.094Z"/>
                    <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.05,43.95s-7.133-5.822-8.537-8.259c-4.392-7.595.9489-19.79,10.44-21.82"/>
                    <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M38.71,42.99,51.6,50.011"/>
                    <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M33.87,47.79l13,6.498"/>
                    <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M58.18,45.72l-5.1-4.358-8.279-4.335"/>
                    <path fill="none" stroke="#8b7355" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m29.772 19.654 13.64 6.204 12.72 7.164c2.514 1.698 5.012 5.844 6.51 7.321"/>
                  </svg>
                </div>
                <h4 style={{color: '#e0e0e0', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Personal Service</h4>
                <p style={{color: '#a0a0a0', fontSize: '0.9rem'}}>Dedicated support throughout your journey</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{textAlign: 'center', marginTop: '4rem'}}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#e0e0e0'}}>
              Ready to Get Started?
            </h3>
            <p style={{fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '2rem'}}>
              Contact us today to discuss your needs and get a personalized quote
            </p>
            <Link to="/contact" className="btn btn-primary" style={{fontSize: '1.1rem', padding: '15px 40px'}}>
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;