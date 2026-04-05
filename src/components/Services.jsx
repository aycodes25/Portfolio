import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Zap, Code2, Bug, Plug, Cloud } from 'lucide-react';

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

const Services = () => {
  const servicesData = [
    {
      title: 'Full-Stack Web Applications',
      desc: 'Build complete web applications from frontend to backend with modern frameworks, databases, and deployment.',
      icon: <Globe size={40} color="#3b82f6" />,
      delay: 0.1
    },
    {
      title: 'Mobile Applications',
      desc: 'Develop cross-platform mobile apps using React Native and Expo for iOS and Android.',
      icon: <Smartphone size={40} color="#10b981" />,
      delay: 0.2
    },
    {
      title: 'Real-Time Applications',
      desc: 'Create real-time features using WebSockets, WebRTC for chat, video calls, live updates, and collaboration tools.',
      icon: <Zap size={40} color="#f59e0b" />,
      delay: 0.3
    },
    {
      title: 'REST APIs & Backend Services',
      desc: 'Design and build robust REST APIs with Node.js, Express, Prisma ORM, and database integration.',
      icon: <Code2 size={40} color="#ef4444" />,
      delay: 0.4
    },
    {
      title: 'Debugging & Optimization',
      desc: 'Fix bugs, improve performance, optimize database queries, and enhance code quality.',
      icon: <Bug size={40} color="#06b6d4" />,
      delay: 0.5
    },
    {
      title: 'Third-Party Integrations',
      desc: 'Integrate payment gateways, APIs, cloud services, and external platforms into applications.',
      icon: <Plug size={40} color="#64748b" />,
      delay: 0.6
    },
    {
      title: 'Domain Transfer & Deployment',
      desc: 'Handle domain transfers, configure deployments, set up hosting, manage DNS, and ensure smooth application launches.',
      icon: <Cloud size={40} color="#8b5cf6" />,
      delay: 0.7
    }
  ];

  return (
    <section id="services" className="section-padding bg-accent-light">
      <div className="container">
        <div className="services-header text-center mb-12">
          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Can Build
          </motion.h2>
          <motion.p
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Solutions I deliver for clients and projects
          </motion.p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card card-effect text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon mb-4 flex-center">
                {service.icon}
              </div>
              <h3 className="service-card-title mb-2">{formatAmp(service.title)}</h3>
              <p className="service-card-desc">{formatAmp(service.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
