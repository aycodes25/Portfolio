import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
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

const Education = () => {
  const eduItems = [
    {
      degree: 'Professional Diploma in Software Development',
      inst: 'African University of Science and Technology (AUST)',
      years: '2023 - 2025',
      note: 'First Class (CGPA: 4.89)'
    },
    
    {
      degree: 'Diploma in Software Engineering',
      inst: 'GlobalTech World Institute, Nigeria',
      years: '2024 - 2025',
      note: 'Comprehensive training in full-stack architecture'
    }
  ];

  const certs = [
    'Professional Diploma in Software Development - AUST',
    'Diploma in Software Engineering - GlobalTech World Institute',
    'Design Thinking & Digital Marketing Certifications',
    'Google Professional Certificate',
    'Responsive Web Design Certificate - FreeCodeCamp',
    'Digital Marketing Certificate - Professional Marketing Course',
    'Web Design & Development Certificate - Professional Training Course',
    'Soft Skills Development Certificate - Professional Training Program'
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {formatAmp('Education & Certifications')}
        </motion.h2>

        <div className="edu-grid">
          <motion.div
            className="edu-column"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="icon-accent" size={28} />
              <h3 className="column-title">Education</h3>
            </div>
            <div className="edu-list">
              {eduItems.map((item, i) => (
                <div key={i} className="edu-item card-effect">
                  <h4 className="edu-degree">{item.degree}</h4>
                  <p className="edu-inst">{item.inst} | {item.years}</p>
                  <p className="edu-note">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="cert-column"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="icon-accent" size={28} />
              <h3 className="column-title">Certifications</h3>
            </div>
            <ul className="cert-list custom-list">
              {certs.map((cert, i) => (
                <li key={i} className="cert-item">{formatAmp(cert)}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
