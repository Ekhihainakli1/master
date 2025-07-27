import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "Express.js", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Redis", level: 65 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Jest", level: 70 },
        { name: "Webpack", level: 65 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  return (
    <div className="page">
      <section className="content-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
            {skillCategories.map((category, index) => (
              <div key={index} style={{marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333'}}>{category.category}</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem'}}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{marginBottom: '1rem'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                        <span style={{fontWeight: '500'}}>{skill.name}</span>
                        <span style={{color: '#666'}}>{skill.level}%</span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          backgroundColor: '#007bff',
                          borderRadius: '4px',
                          transition: 'width 0.3s ease'
                        }}></div>
                      </div>
                    </div>
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

export default Skills;