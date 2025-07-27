import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Built scalable React applications with modern state management"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Developed and maintained 5+ web applications using React and Django",
        "Collaborated with design team to implement responsive UI/UX",
        "Optimized database queries improving application performance by 40%",
        "Integrated third-party APIs and payment gateways"
      ],
      technologies: ["React", "Django", "Python", "MongoDB", "Redis"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: [
        "Built responsive web applications from scratch using React",
        "Implemented modern CSS frameworks and design systems",
        "Worked closely with backend team for API integration",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git"]
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Agency",
      duration: "2018 - 2019",
      location: "Remote",
      description: [
        "Developed client websites using HTML, CSS, and JavaScript",
        "Maintained and updated existing web applications",
        "Learned modern development practices and version control",
        "Collaborated with team members on various client projects"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"]
    }
  ];

  return (
    <div className="page">
      <section className="content-section">
        <div className="container">
          <h2>Work Experience</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {experiences.map((exp, index) => (
              <div key={index} style={{
                marginBottom: '3rem',
                padding: '2rem',
                background: '#f8f9fa',
                borderRadius: '10px',
                borderLeft: '4px solid #007bff'
              }}>
                <div style={{marginBottom: '1rem'}}>
                  <h3 style={{fontSize: '1.4rem', color: '#333', marginBottom: '0.5rem'}}>{exp.title}</h3>
                  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem'}}>
                    <span style={{fontWeight: '600', color: '#007bff'}}>{exp.company}</span>
                    <span style={{color: '#666'}}>{exp.duration}</span>
                  </div>
                  <span style={{color: '#666', fontSize: '0.9rem'}}>{exp.location}</span>
                </div>
                
                <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{marginBottom: '0.5rem', color: '#555'}}>{item}</li>
                  ))}
                </ul>
                
                <div>
                  <strong style={{color: '#333', marginRight: '1rem'}}>Technologies:</strong>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} style={{
                      background: '#007bff',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      marginRight: '0.5rem',
                      marginBottom: '0.5rem',
                      display: 'inline-block'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;