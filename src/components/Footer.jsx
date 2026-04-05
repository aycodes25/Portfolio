import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Let's work together.</h2>
          <p className="footer-tagline">I'm available for full-time, freelance and contract work.</p>
          <a href="mailto:tominiyiayomide068@gmail.com" className="footer-button">SAY HELLO →</a>
        </div>

        <div className="footer-socials footer-socials-bottom">
          <a href="https://github.com/aycodes25" target="_blank" rel="noreferrer" className="footer-icon">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tominiyi-ayomide-27251a385" target="_blank" rel="noreferrer" className="footer-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:tominiyiayomide068@gmail.com" className="footer-icon">
            <Mail size={20} />
          </a>
          <a href="https://wa.me/2349036084447" target="_blank" rel="noreferrer" className="footer-icon">
            <FaWhatsapp size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tominiyi Ayomide Olamidotun. All rights reserved.</p>
          {/* <p className="footer-credit">
            Made with <Heart size={14} color="white" /> and React
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
