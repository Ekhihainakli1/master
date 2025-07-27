import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "2016 - 2018",
      location: "Stanford, CA",
      gpa: "3.8/4.0",
      coursework: [
        "Advanced Algorithms and Data Structures",
        "Machine Learning and AI",
        "Database Systems",
        "Software Engineering Principles",
        "Computer Networks",
        "Human-Computer Interaction"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Graduate Research Assistant",
        "Published 2 papers in ACM conferences"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT) Delhi",
      duration: "2012 - 2016",
      location: "New Delhi, India",
      gpa: "8.5/10.0",
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Architecture",
        "Software Engineering"
      ],
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Society",
        "Winner of Inter-college Programming Contest"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-456"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-DEV-2021-789"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2020",
      credentialId: "META-REACT-2020-123"
    }
  ];

  return (
    <div className="page">
      <section className="content-section">
        <div className="container">
          <h2>Education & Certifications</h2>
          
          {/* Education Section */}
          <div style={{marginBottom: '4rem'}}>
            <h3 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#333'}}>Education</h3>
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
              {education.map((edu, index) => (
                <div key={index} style={{
                  marginBottom: '3rem',
                  padding: '2rem',
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  borderLeft: '4px solid #28a745'
                }}>
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{fontSize: '1.4rem', color: '#333', marginBottom: '0.5rem'}}>{edu.degree}</h4>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem'}}>
                      <span style={{fontWeight: '600', color: '#28a745'}}>{edu.institution}</span>
                      <span style={{color: '#666'}}>{edu.duration}</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                      <span style={{color: '#666', fontSize: '0.9rem'}}>{edu.location}</span>
                      <span style={{color: '#666', fontSize: '0.9rem'}}>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <div style={{marginBottom: '1.5rem'}}>
                    <strong style={{color: '#333'}}>Relevant Coursework:</strong>
                    <div style={{marginTop: '0.5rem'}}>
                      {edu.coursework.map((course, i) => (
                        <span key={i} style={{
                          background: '#e9ecef',
                          color: '#495057',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          marginRight: '0.5rem',
                          marginBottom: '0.5rem',
                          display: 'inline-block'
                        }}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <strong style={{color: '#333'}}>Achievements:</strong>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem'}}>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} style={{marginBottom: '0.3rem', color: '#555'}}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#333'}}>Certifications</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {certifications.map((cert, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  background: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef'
                }}>
                  <h4 style={{fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem'}}>{cert.name}</h4>
                  <p style={{color: '#007bff', fontWeight: '600', marginBottom: '0.5rem'}}>{cert.issuer}</p>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666'}}>
                    <span>Issued: {cert.date}</span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;