import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'MyQRMenu App',
      role: 'Full Stack Developer',
      desc: 'Digital Menu Scan implemented with Prisma and SQLite backend. Allows users to download restaurant menus as PDF/Image.',
      link: 'https://www.myqrmenu.co/',
      playStore: 'https://play.google.com/store/apps/details?id=com.dastech.myqrmenu&pcampaignid=web_share',
      appStore: 'https://apps.apple.com/ng/app/myqrmenu/id6745400220',
      isFeatured: true,
      image: '/assets/images/smokey_dashboard.png',
      secondaryImage: '/assets/images/smokey_menu.png'
    },
    {
      title: 'EchoVerse',
      role: 'Lead Software Developer',
      desc: 'Church clock timer, presentation, and worship management software featuring a real-time AI speech-to-text engine for live sermon transcription.',
      isLaptop: true,
      video: '/assets/videos/echoverse-demo.mp4' /* Explicitly define video source for clarity */
    },
    {
      title: 'Endorsebase',
      role: 'Full Stack Developer',
      desc: 'An AI Tool to Prepare for Tech Nation Endorsement with UI enhancements and automatic Vercel deployment.',
      link: 'https://www.endorsebase.com/',
      isLaptop: true,
      mockupImage: '/assets/images/laptop-mockup2.png',
      screenImage: '/assets/images/endorsebase.png'
    },
    {
      title: 'AskMate',
      role: 'Lead Full Stack Dev (Ongoing)',
      desc: 'AI-Powered Real-Time Learning Platform with WebRTC/WebSockets for voice/video and AI-driven features.',
      image: '/assets/images/askmate.png'
    },
    {
      title: 'React Native Nigeria',
      role: 'Full Stack Developer',
      desc: 'Added language translation and Open Graph meta tags with UI enhancements.',
      link: 'https://www.reactnativenigeria.com/'
    },
    {
      title: 'Tech Event Near Me',
      role: 'Researcher & Documenter',
      desc: 'Open source project documenting global tech events.',
      github: 'https://github.com/TechEventsNearMe/Tech-Events-Dataset'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-accent-light">
      <div className="container">
        <motion.h2
          className="section-title text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h2>

        {/* FEATURED PROJECTS (FULL WIDTH) */}
        <div className="featured-projects-column">
          {projects.filter(p => p.isFeatured || p.isLaptop).map((project, idx) => (
            <motion.div
              key={idx}
              className="project-featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* LEFT TEXT */}
              <div className="featured-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-role">{project.role}</div>
                <p className="project-desc">{project.desc}</p>

                <div className="project-links mt-4" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink size={16} /> Website
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <Github size={16} /> Repository
                    </a>
                  )}
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noreferrer" className="play-badge-link">
                      <img src="/assets/images/googleplay.png" alt="Google Play Store" style={{ height: '48px' }} />
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noreferrer" className="app-badge-link">
                      <img src="/assets/images/appstore.png" alt="App Store" style={{ height: '48px' }} />
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT MOCKUP */}
              <div className={`featured-mockup ${project.isLaptop ? 'laptop-mockup' : 'two-phones'}`}>
                {project.isLaptop ? (
                  <div className="laptop-image-wrapper">
                    <img src={project.mockupImage || '/assets/images/laptop-mockup.png'} alt={`${project.title} laptop mockup`} className="laptop-img" />

                    {project.screenImage ? (
                      <img
                        className="laptop-image-overlay"
                        src={project.screenImage}
                        alt={`${project.title} screen`}
                      />
                    ) : (
                      <video
                        className="laptop-video-overlay"
                        src={project.video || '/assets/videos/echoverse-demo.mp4'}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    )}
                  </div>
                ) : (
                  <>
                    <div className="phone-stack-1 silver-theme">
                      <img src={project.image} alt="Dashboard" className="direct-phone-img" />
                    </div>
                    <div className="phone-stack-2">
                      <img src={project.secondaryImage} alt="Menu" className="direct-phone-img" />
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW (DRAFTED GRID: ASKMATE + STACKED CARDS) */}
        <div className="projects-drafted-grid">
          {projects.filter(p => !p.isFeatured && !p.isLaptop).map((project, idx) => {
            const isStacked = project.title === 'React Native Nigeria' || project.title === 'Tech Event Near Me';
            const isAskMate = project.title === 'AskMate';

            return (
              <motion.div
                key={idx}
                className={`project-card ${isAskMate ? 'project-card-wide' : ''} ${isStacked ? 'project-card-stacked' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="project-card-top">
                  {project.image && (
                    <img src={project.image} alt={`${project.title} screenshot`} className="project-card-img" />
                  )}
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-role">{project.role}</div>
                  <p className="project-desc">{project.desc}</p>
                </div>

                <div className="project-links mt-auto">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink size={16} /> {project.title === 'React Native Nigeria' ? 'Live Demo' : 'Website'}
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <Github size={16} /> Repository
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
