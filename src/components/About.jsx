import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-grid container">
          <motion.div
            className="mask-image"
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/assets/images/mypicture.png"
              alt="Ayomide profile"
              className="about-photo"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Professional Summary</h3>
            <p className="summary-text">
              Innovative Full Stack Engineer specializing in modern web/app technologies. Passionate about building robust applications, crafting intuitive UI/UX, and delivering high-quality software solutions from concept to deployment.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Location:</span> Abuja, Nigeria
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span> +234 9156301371
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span> tominiyiayomide068@gmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
