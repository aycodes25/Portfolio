import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Users, Zap, RotateCw, ShieldCheck, CheckCircle } from 'lucide-react';

const formatAmp = (text) => {
  if (!text) return text;
  const parts = text.split('&');
  return parts.map((part, index) => (
    <React.Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && <span className="amp">&</span>}
    </React.Fragment>
  ));
};

const Skills = () => {
  const customSkills = [
    {
      category: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'React Native', 'Next.js', 'Vite', 'Bootstrap']
    },
    {
      category: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Prisma ORM']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Git & GitHub', 'VS Code', 'Postman', 'NVM', 'Expo']
    },
    {
      category: 'Design & Prototyping',
      skills: ['Figma', 'CorelDraw', 'UI/UX Design', 'Responsive Design']
    }
  ];

  const coreCompetencies = [
    'Excellent Communication & Training',
    'Complex Problem-Solving',
    'Teamwork & Collaboration',
    'Adaptability & Quick Learning',
    'Agile Development',
    'Code Review & QA'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-container">
          {customSkills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category card-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="category-title">{formatAmp(category.category)}</h3>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">{formatAmp(skill)}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="competencies-container mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="section-subtitle text-center mb-6">Core Competencies</h3>
          <div className="competencies-grid">
            {coreCompetencies.map((comp, idx) => {
              // Icon mapping based on text
              const Icon = comp.includes('Communication') ? MessageCircle :
                comp.includes('Problem-Solving') ? Lightbulb :
                  comp.includes('Teamwork') ? Users :
                    comp.includes('Adaptability') ? Zap :
                      comp.includes('Agile') ? RotateCw :
                        comp.includes('Code Review') ? ShieldCheck : CheckCircle;

              return (
                <div key={idx} className="competency-card">
                  <div className="competency-icon-wrapper">
                    <Icon size={24} className="icon-accent" />
                  </div>
                  <span className="competency-text">{formatAmp(comp)}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
