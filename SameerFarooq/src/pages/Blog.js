import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Holiday Home Destinations for 2024",
      excerpt: "Discover the most sought-after vacation rental locations that offer the perfect blend of luxury, comfort, and unforgettable experiences.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Holiday Homes",
      tags: ["Travel", "Vacation Rentals", "Destinations", "Luxury"]
    },
    {
      id: 2,
      title: "Interior Design Trends That Will Transform Your Home in 2024",
      excerpt: "Explore the latest interior design trends, from sustainable materials to smart home integration, that are reshaping modern living spaces.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Interior Design",
      tags: ["Design Trends", "Home Decor", "Modern Living", "Sustainability"]
    },
    {
      id: 3,
      title: "Real Estate Investment: A Beginner's Guide to Property Success",
      excerpt: "Learn the fundamentals of property investment, from market analysis to financing options, and start building your real estate portfolio.",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Real Estate",
      tags: ["Investment", "Property", "Finance", "Market Analysis"]
    },
    {
      id: 4,
      title: "Maximizing Your Holiday Home's Rental Potential",
      excerpt: "Proven strategies to increase bookings, enhance guest experience, and maximize revenue from your vacation rental property.",
      date: "January 22, 2024",
      readTime: "6 min read",
      category: "Holiday Homes",
      tags: ["Rental Income", "Guest Experience", "Property Management", "Marketing"]
    },
    {
      id: 5,
      title: "Small Space, Big Style: Furnishing Compact Homes",
      excerpt: "Creative solutions and design tips for making the most of small living spaces without compromising on style or functionality.",
      date: "January 8, 2024",
      readTime: "15 min read",
      category: "Interior Design",
      tags: ["Small Spaces", "Space Planning", "Furniture", "Design Tips"]
    },
    {
      id: 6,
      title: "The Ultimate Guide to Buying Your First Home",
      excerpt: "Navigate the home buying process with confidence. From pre-approval to closing, everything first-time buyers need to know.",
      date: "December 20, 2023",
      readTime: "9 min read",
      category: "Real Estate",
      tags: ["Home Buying", "First Time Buyers", "Mortgage", "Property Search"]
    }
  ];

  const categories = ["All", "Holiday Homes", "Interior Design", "Real Estate", "Property Tips"];

  return (
    <div className="page">
      <section className="content-section">
        <div className="container">
          <h2 style={{color: '#e0e0e0'}}>Blog & <span style={{color: '#00bcd4'}}>Articles</span></h2>
          <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '3rem'}}>
            Sharing knowledge and insights about property, interior design, and real estate
          </p>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {categories.map((category, index) => (
              <button key={index} style={{
                padding: '8px 16px',
                border: '2px solid #00bcd4',
                borderRadius: '25px',
                background: index === 0 ? '#00bcd4' : 'transparent',
                color: index === 0 ? '#121212' : '#00bcd4',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}>
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {blogPosts.map((post) => (
              <article key={post.id} style={{
                background: '#1e1e1e',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                border: '1px solid #333',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,188,212,0.2)';
                e.currentTarget.style.borderColor = '#00bcd4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = '#333';
              }}>
                
                {/* Blog Post Header */}
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, #121212 0%, #1a1a1a 100%)`,
                  borderBottom: '1px solid #00bcd4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  {post.category}
                </div>

                {/* Blog Post Content */}
                <div style={{padding: '1.5rem'}}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: '#a0a0a0'
                  }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: '#e0e0e0',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    color: '#a0a0a0',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {post.tags.map((tag, index) => (
                      <span key={index} style={{
                        background: '#2a2a2a',
                        color: '#a0a0a0',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#" style={{
                    color: '#00bcd4',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div style={{
            background: '#1a1a1a',
            padding: '3rem 2rem',
            borderRadius: '15px',
            textAlign: 'center',
            marginTop: '4rem',
            maxWidth: '600px',
            margin: '4rem auto 0',
            border: '1px solid #333'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#e0e0e0'}}>
              Subscribe to My <span style={{color: '#00bcd4'}}>Newsletter</span>
            </h3>
            <p style={{color: '#a0a0a0', marginBottom: '2rem'}}>
              Get the latest articles and insights delivered directly to your inbox
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '12px 16px',
                  border: '1px solid #333',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  minWidth: '250px',
                  background: '#2a2a2a',
                  color: '#e0e0e0'
                }}
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;