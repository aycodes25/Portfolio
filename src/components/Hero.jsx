import React from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="greeting">Hello, I'm</p>
          <h1 className="hero-name">Tominiyi Ayomide</h1>
          <h2 className="hero-role">Full Stack Software Engineer <span className="amp">&</span> UI/UX Designer</h2>
          <p className="hero-desc">
            Passionate about crafting dynamic, scalable digital experiences.
            Blending technical rigor with an eye for stunning aesthetics.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/assets/TOMINIYI_CV.pdf" download className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/aycodes25" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/tominiyi-ayomide-27251a385" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="social-icon" />
            </a>
            <a href="mailto:tominiyiayomide068@gmail.com" aria-label="Email">
              <Mail className="social-icon" />
            </a>
            <a href="https://wa.me/2349036084447" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mask-image hero-mask"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/assets/images/mypicture.png"
            alt="Tominiyi Ayomide"
            className="hero-photo"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
};

export default Hero;
