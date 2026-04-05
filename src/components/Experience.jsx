import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

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

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'NubiaPay (Contract Job - Remote)',
      period: 'Feb 2026 - March 2026',
      points: [
        'Redesigned the Nubiapay app UI for the frontend.',
        'Integrated live APIs and endpoints into the frontend, and performed testing to ensure proper functionality.',
        'Identified errors and bugs, debugged issues, and implemented fixes.'
      ]
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Ortho & Das Technology (Remote)',
      period: 'Nov 2025 - Present',
      points: [
        'Developed clean, maintainable, and efficient code for full-stack applications using modern frameworks.',
        'Built responsive front-end applications with React, Next.js, TypeScript, and React Native.',
        'Implemented robust back-end solutions using Node.js, Prisma ORM, PostgreSQL, and SQLite.',
        'Leveraged AI debugging tools (Claude AI, ChatGPT, GitHub Copilot) to enhance development efficiency.'
      ]
    },
    {
      title: 'Full Stack Developer & Trainer',
      company: 'GlobalTech World Computer Institute, Abuja',
      period: 'April 2025 - Nov 2025',
      points: [
        'Led development and deployment of a learning management system, serving 150+ students.',
        'Trained 50+ students in software development fundamentals encompassing web and mobile app development.',
        'Contributed to all phases of platform development from UI design to testing and deployment.'
      ]
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  return (
    <section id="experience" className="section-padding bg-accent-light">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-icon flex-center">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-period">{formatAmp(exp.period)}</span>
                <h3 className="timeline-title">{formatAmp(exp.title)}</h3>
                <h4 className="timeline-company">{formatAmp(exp.company)}</h4>
                <ul className="timeline-list">
                  {exp.points.map((point, i) => (
                    <li key={i}>{formatAmp(point)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
